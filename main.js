import compiler from "./compiler.js"
import Yaml from 'https://esm.sh/yaml@2.4.3'
import { KaitaiStream } from "./kaitaiCore.js"
import { loadExportedJs } from "./helpers.js"
import { typedArrayClasses } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/typed_array_classes.js'

export { compiler, Yaml, KaitaiStream, loadExportedJs }

/**
 * Asynchronously creates a loader from a Kaitai Struct YAML (.ksy) file.
 *
 * This function takes a Kaitai Struct file (as a string, `Uint8Array`, `ArrayBuffer`, 
 * or a pre-parsed JS object), compiles it into JavaScript using the Kaitai compiler, 
 * and returns the resulting loader after loading the compiled JS.
 *
 * @async
 * @function
 * @param {string|Uint8Array|ArrayBuffer|Object} ksyFile - The Kaitai Struct definition. 
 *        Can be a YAML string, a `Uint8Array`, an `ArrayBuffer`, or an already-parsed JavaScript object.
 * @param {Object} [options={}] - Optional settings.
 * @param {boolean} [options.debug=false] - Whether to enable debug mode in the compiler.
 * @param {function(string): Promise<string>} [options.importer=null] - 
 *        Optional function to handle importing of additional .ksy files. 
 *        Should take a file name and return a Promise that resolves to its YAML content as a string.
 *
 * @returns {Promise<Function>} A Promise that resolves to the compiled Kaitai loader function.
 *
 * @throws {Error} If `ksyFile` is not a supported type (string, typed array, or object).
 *
 * @example
 * ```js
 * import Yaml from 'https://esm.sh/yaml@2.4.3'
 * let yourKsyFileAsString = `
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
 * `;
 * const loader = await createLoader(yourKsyFileAsString, {
 *   debug: true,
 *   importer: async (path) => Yaml.parse(await fetch(path).then(res => res.text()))
 * });
 * var exampleGifBytes = new Uint8Array([
 *   0x47, 0x49, 0x46, 0x38, 0x39, 0x61, // Header: GIF89a
 *   0x01, 0x00, 0x01, 0x00,             // Logical Screen Width & Height: 1x1
 *   0x80,                               // GCT follows for 2 colors
 *   0x01,                               // Background color index
 *   0x00,                               // Pixel aspect ratio
 *   0x00, 0x00, 0x00,                   // GCT[0] - Black
 *   0xFF, 0xFF, 0xFF,                   // GCT[1] - White
 *   0x21, 0xF9, 0x04, 0x01, 0x00, 0x00, 0x00, 0x00, // Graphics Control Extension
 *   0x2C,                               // Image Descriptor
 *   0x00, 0x00, 0x00, 0x00,             // Image left, top
 *   0x01, 0x00, 0x01, 0x00,             // Image width & height: 1x1
 *   0x00,                               // No local color table
 *   0x02, 0x02, 0x44, 0x01, 0x00,       // Image data (LZW min code size = 2)
 *   0x3B                                // GIF file terminator
 * ])
 * const parsedGif = new loader.Gif(exampleGifBytes);
 * console.debug(`parsedGif.logicalScreen.imageWidth is:`,parsedGif.logicalScreen.imageWidth);
 * ```
 */
export const createLoader = async (ksyFile, { debug=false, importer=null }={}) => {
    if (ksyFile instanceof ArrayBuffer) {
        ksyFile = new Uint8Array(ksyFile)
    }
    if (typedArrayClasses.some(each => ksyFile instanceof each)) {
        ksyFile = new TextDecoder().decode(ksyFile)
    }
    if (typeof ksyFile === "string") {
        ksyFile = Yaml.parse(ksyFile)
    }
    if (!(ksyFile instanceof Object)) {
        throw Error(`ksyFile must be a yaml string, Uint8Array/ArrayBuffer, or yaml-parsed Object`)
    }
    importer &&= {
        importYaml: importer
    }
    var filenameToContents = await compiler.compile("javascript", ksyFileAsObject, importer, debug)
    return await loadExportedJs(filenameToContents, KaitaiStream)
}