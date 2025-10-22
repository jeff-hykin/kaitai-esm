import { toPascalCase } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/to_pascal_case.js'
import { toRepresentation } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/to_representation.js'

const contentToBytes = (content)=>{
    if (typeof content === 'string') {
        return [...new TextEncoder().encode(content)]
    } else if (typeof content === 'number') {
        if (content > 255) {
            throw Error(`got a content value of ${content}, which is too large to be a byte`)
        }
        if (content < 0) {
            throw Error(`got a content value of ${content}, which is too small to be a byte`)
        }
        return [content]
    } else if (content instanceof Array) {
        return content.map(contentToBytes).flat(Infinity)
    } else {
        throw Error(`Unsupported contents type: ${toRepresentation(content)}`)
    }
}

/**
 * convert a ksy file to C
 *
 * @example
 * ```js
 * import Yaml from 'https://esm.sh/yaml@2.4.3'
 * var ksyFileAsObject = Yaml.parse(`
 * meta:
 *   id: gif
 *   file-extension: gif
 *   endian: le
 * seq:
 *   - id: header
 *     type: header
 *   - id: logical_screen
 *     type: logical_screen
 * types:
 *   header:
 *     seq:
 *       - id: magic
 *         contents: 'GIF'
 *       - id: version
 *         size: 3
 *   logical_screen:
 *     seq:
 *       - id: image_width
 *         type: u2
 *       - id: image_height
 *         type: u2
 *       - id: flags
 *         type: u1
 *       - id: bg_color_index
 *         type: u1
 *       - id: pixel_aspect_ratio
 *         type: u1
 * `)
 * console.log(ksyToC(ksyFileAsObject))
 * ```
 *
 * @param {Object} arg1 - the output of a yaml parsing of a ksy file
 * @returns {Object} output - 
 * @returns {string} output.code - the C code
 * @returns {Array<string>} output.warnings - all warnings encountered
 */
export function ksyToC(ksyFileAsObject) {
    const warnings = []
    const thingsThatNeedDefinitionHelp = []
    function builtinTypeToC(type) {
        if (!type.match(/^(str|strz|b\d+|(u\d+|s\d+|f\d+)(le|be)?)$/)) {
            return null
        }
        type = type.replace(/(le|be)$/g, "")
        switch (type) {
            case "b1":
                return [ type.slice(-1)[0]-1, "bool" ]
            case "b2":
                return [ type.slice(-1)[0]-1, "uint16_t /* bytes (not int) */" ]
            case "b4":
                return [ type.slice(-1)[0]-1, "uint32_t /* bytes (not int) */" ]
            case "b8":
                return [ type.slice(-1)[0]-1, "uint64_t /* bytes (not int) */" ]
            
            case "u1":
                return [ type.slice(-1)[0]-1, "uint8_t" ]
            case "u2":
                return [ type.slice(-1)[0]-1, "uint16_t" ]
            case "u4":
                return [ type.slice(-1)[0]-1, "uint32_t" ]
            case "u8":
                return [ type.slice(-1)[0]-1, "uint64_t" ]
            
            case "s1":
                return [ type.slice(-1)[0]-1, "int8_t" ]
            case "s2":
                return [ type.slice(-1)[0]-1, "int16_t" ]
            case "s4":
                return [ type.slice(-1)[0]-1, "int32_t" ]
            case "s8":
                return [ type.slice(-1)[0]-1, "int64_t" ]
            
            case "f1":
                thingsThatNeedDefinitionHelp.push("_Float8")
                return [ type.slice(-1)[0]-1, "_Float8" ]
            case "f2":
                thingsThatNeedDefinitionHelp.push("_Float16")
                return [ type.slice(-1)[0]-1, "_Float16" ]
            case "f4":
                thingsThatNeedDefinitionHelp.push("_Float32")
                return [ type.slice(-1)[0]-1, "_Float32" ]
            case "f8":
                thingsThatNeedDefinitionHelp.push("_Float64")
                return [ type.slice(-1)[0]-1, "_Float64" ]
            
            case "str":
                return [ 0, "char" ]
            case "strz":
                return [ 0, "char" ]
            
            default:
                if (type[0] === "b") {
                    const size = type.slice(1)-1
                    return [ size, `uint8_t[${size}]` ]
                }
                throw Error(`Unsupported builtin type: ${type}. There is no C standard equivalent yet.`)
        }
    }
    const obj = ksyFileAsObject
    let documentationChunks = []
    
    // 
    // endianness
    // 
    let topLevelName = obj.meta?.id
    if (obj.meta) {
        if (obj.meta.imports) {
            warnings.push(`meta.imports are not supported, skipping`)
        }
        // TODO: warn about imports
        if (obj.meta.endian) {
            documentationChunks.push(`/* NOTE: endianness is ${obj.meta.endian == "be" ? "big" : "little"} */`)
        }
    }
    
    // 
    // doc
    // 
    if (obj.doc) {
        documentationChunks.push(`/*${obj.doc.replace(/\*\//g, "* /").replace(/\n/g, "\n * ")}\n */`)
    }
    
    let chunks = [
    ]

    // 
    // enums
    // 
    const enums = {}
    for (const [key, value] of Object.entries(obj.enums||{})) {
        enums[key] = {}
        chunks.push(`enum ${key} {`)
        for (const [enumValue, itemNameOrDetails] of Object.entries(value)) {
            if (itemNameOrDetails instanceof Object) {
                const { id, doc, "doc-ref": docRef } = itemNameOrDetails
                enums[key][id] = enumValue
                chunks.push(`    ${id} = ${enumValue},`)
            } else {
                enums[key][itemNameOrDetails] = enumValue
                chunks.push(`    ${itemNameOrDetails} = ${enumValue},`)
            }
        }
        chunks.push(`}`)
    }

    // 
    // structs
    // 
    const sizeOf = {
        b1: 1, 
        b2: 2, 
        b4: 4, 
        b8: 8, 
        u1: 1, 
        u2: 2, 
        u4: 4, 
        u8: 8, 
        s1: 1, 
        s2: 2, 
        s4: 4, 
        s8: 8, 
        f1: 1, 
        f2: 2, 
        f4: 4, 
        f8: 8, 
    }
    // top level struct
    if (topLevelName && obj.seq) {
        // just make the top level struct behave like the last of the types
        obj.types = obj.types||{}
        obj.types[topLevelName] = { seq: obj.seq }
    }
    outer: for (const [baseTypeName, value] of Object.entries(obj.types||{})) {
        const typeName = toPascalCase(baseTypeName)
        if (!value.seq) {
            warnings.push(`Type ${baseTypeName} is not a fixed-size struct (no seq:), skipping`)
            continue
        }
        let newChunks = []
        newChunks.push(`__attribute__((packed)) struct ${typeName} {`)
        let typeSizeInBytes = 0
        for (let {doc, id, contents, type, encoding, size, "doc-ref": docRef, enum: enumType, "if": ifCondition, valid, repeat, "repeat-expr": repeatExpr, "-orig-id": originalId, ...other } of value.seq) {
            // TODO: valid, valid.any-of, valid.expr, valid.min, valid.max, valid.eq
            if (!id) {
                warnings.push(`Sequence item ${JSON.stringify(baseTypeName)} has no id, skipping`)
                continue outer
            }
            if (size && typeof size !== "number") {
                warnings.push(`Sequence item ${JSON.stringify(baseTypeName)} has a size that is not a number which is not supported (size = ${toRepresentation(size)}), skipping ${baseTypeName}`)
                continue outer
            }
            if (!size) {
                if (repeat) {
                    if (repeat == "expr" && typeof repeatExpr == "number") {
                        size = repeatExpr * sizeOf[type]
                    } else {
                        warnings.push(`Sequence item ${JSON.stringify(baseTypeName)} has a repeat that is not a number which is not supported, skipping ${baseTypeName}`)
                        continue outer
                    }
                } else {
                    size = sizeOf[type]
                }
            }
            // size but no type, default to bytes
            if (!type && size) {
                type = "b1"
            }
            if (Object.keys(other).length > 0) {
                warnings.push(`Sequence item ${JSON.stringify(baseTypeName)} has attributes that are not supported: ${Object.keys(other).join(", ")}`)
            }
            if (ifCondition) {
                warnings.push(`Note if-conditions will be assumed to always be true (e.g. ignored)`)
            }
            if (doc) {
                newChunks.push(`    /* ${doc.replace(/\*\//g, "* /").replace(/\n/g, "\n     * ")} */`)
            }
            if (docRef) {
                newChunks.push(`    /* ${docRef.replace(/\*\//g, "* /").replace(/\n/g, "\n     * ")} */`)
            }
            if (enumType) {
                newChunks.push(`    /* value is ${enumType} */`)
            }
            let value
            if (contents) {
                if (typeof contents === "number") {
                    // will throw if bad number
                    contentToBytes(contents)
                    type = "u1"
                    size = 1
                    value = contents + `/* ${number.toString(16).padStart(2, "0")}, ${number.toString(2).padStart(8, "0")} */`
                } else if (typeof contents === "string") {
                    type = "str"
                    size = contents.length
                    encoding = "UTF-8"
                    value = JSON.stringify(contents)
                } else {
                    const bytes = contentToBytes(contents)
                    let validAsUtf8 = true
                    let hasNoNulls = bytes.every(each=>each !== 0)
                    try {
                        new TextDecoder().decode(new Uint8Array(bytes))
                    } catch (error) {
                        validAsUtf8 = false
                    }
                    
                    if (bytes.length == 1) {
                        type = "u1"
                        size = 1
                        value = bytes[0] + `/* ${bytes[0].toString(16).padStart(2, "0")}, ${bytes[0].toString(2).padStart(8, "0")} */`
                    } else if (validAsUtf8 && hasNoNulls) {
                        type = "str"
                        size = bytes.length
                        encoding = "UTF-8"
                        value = JSON.stringify(new TextDecoder().decode(new Uint8Array(bytes)))
                    } else {
                        type = "u1"
                        size = bytes.length
                        value = `{${bytes}} /* {${bytes.map(each=>each.toString(16)).join(", ")}}, {${bytes.map(each=>each.toString(2)).join(", ")}} */`
                    }
                }
            }
            if (typeof type !== "string") {
                warnings.push(`Sequence item ${JSON.stringify(baseTypeName)} has a type that is not a string which is not supported (type = ${toRepresentation(type)}), skipping ${baseTypeName}`)
                continue outer
            }
            var cBuiltinType = builtinTypeToC(type)
            if (cBuiltinType) {
                var [ defaultSizeBytes, cBuiltinType ] = cBuiltinType
                // byte arrays
                if (type === "u1" && size > 1) {
                    cBuiltinType = cBuiltinType+`[${size}]`
                }
                if (cBuiltinType === "char") {
                    cBuiltinType = cBuiltinType+`[${size}]`
                    if (encoding) {
                        cBuiltinType = `${cBuiltinType} /* encoding: ${encoding} */`
                    }
                }
                if (value) {
                    newChunks.push(`    ${cBuiltinType} ${id} = ${value};`)
                } else {
                    newChunks.push(`    ${cBuiltinType} ${id};`)
                }
                typeSizeInBytes += size||defaultSizeBytes
                continue
            }
            // array of custom type
            if (size != sizeOf[type] && size) {
                const quantity = size/sizeOf[type]
                if (quantity != Math.floor(quantity)) {
                    warnings.push(`Sequence item ${JSON.stringify(baseTypeName)} has a size that is not a multiple of ${sizeOf[type]} which is not supported, skipping ${baseTypeName}`)
                    continue outer
                }
                // FIXME: allow contents to set a default struct value
                newChunks.push(`    ${toPascalCase(type)} ${id}[${quantity}];`)
            // custom type
            } else {
                newChunks.push(`    ${toPascalCase(type)} ${id};`)
            }
        }
        sizeOf[baseTypeName] = typeSizeInBytes
        newChunks.push(`}`)
        chunks.push(...newChunks)
    }
    
    // 
    // instances
    // 
    // TODO: instances
    // instances:
    //     body:
    //         pos: file_offset
    //         size: file_size

    // 
    // header stuff
    // 
    documentationChunks.push(`#include <stdint.h>`)
    for (const each of thingsThatNeedDefinitionHelp) {
        if (each === "_Float8") {
            documentationChunks.push(`
                /* just ensuring _Float8 is defined */
                #nifdef _Float8
                    #warning _Float8 is not defined, falling back on uint8_t
                    #warning .
                    #warning WHICH MEANS YOUR _Float8 TYPES WILL BEHAVE LIKE INTEGERS
                    #warning .
                #endif
            `.replace(/\n                /g, "\n"))
        } else if (each === "_Float16") {
            documentationChunks.push(`
                /* just ensuring _Float16 is defined */
                #nifdef _Float16
                    #include <float.h>
                    #if FLT_MANT_DIG == 11
                        /* float is 16-bit natively */
                        #define _Float16 float
                    #else
                        #warning _Float16 is not defined, falling back on uint16_t 
                        #warning .
                        #warning WHICH MEANS YOUR _Float16 TYPES WILL BEHAVE LIKE INTEGERS
                        #warning .
                        #define _Float16 uint16_t
                    #endif
                #endif
            `.replace(/\n                /g, "\n"))
        } else if (each === "_Float32") {
            documentationChunks.push(`
                /* just ensuring _Float32 is defined */
                #nifdef _Float32
                    #include <float.h>
                    #if FLT_MANT_DIG == 24
                        /* float is 32-bit */
                        #define _Float32 float
                    #else
                        #warning _Float32 is not defined, and float on this system seems to not be 32 (FLT_MANT_DIG == 24), falling back on uint32_t 
                        #warning .
                        #warning WHICH MEANS YOUR _Float32 TYPES WILL BEHAVE LIKE INTEGERS
                        #warning .
                        #define _Float32 uint16_t
                        printf("float is 64-bit\n");
                    #endif
                #endif
            `.replace(/\n                /g, "\n"))
        } else if (each === "_Float64") {
            documentationChunks.push(`
                /* just ensuring _Float64 is defined */
                #nifdef _Float64
                    #include <float.h>
                    #if DBL_MANT_DIG == 53
                        /* double is 64-bit */
                        #define _Float64 double
                    #elif LDBL_MANT_DIG == 53
                        /* long double is 64-bit */
                        #define _Float64 long double
                    #elif FLT_MANT_DIG == 53
                        /* float is 64-bit */
                        #define _Float64 float
                    #else
                        #warning _Float64 is not defined, and none of float/double/long double on this system seems to be 64 (ex: FLT_MANT_DIG == 24), falling back on uint64_t
                        #warning .
                        #warning WHICH MEANS YOUR _Float64 TYPES WILL BEHAVE LIKE INTEGERS
                        #warning .
                        #define _Float64 uint16_t
                    #endif
                #endif
            `.replace(/\n                /g, "\n"))
        }
    }

    return {
        warnings,
        code: documentationChunks.join("\n") + "\n\n" + chunks.join("\n"),
    }
}