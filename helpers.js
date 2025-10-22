export async function loadExportedJs(exported, KaitaiStream) {
    const functions = await Promise.all(
        Object.values(exported).map(
            value => import(`data:text/javascript;base64,${btoa(value)}`).then((imported)=>imported.default)
        )
    )
    const results = {}
    for (const each of functions) {
        for (const [key, classFunction] of Object.entries(each(KaitaiStream))) {
            if (classFunction instanceof Function && classFunction.prototype) {
                let prototypeCopy = {}
                Object.setPrototypeOf(prototypeCopy, classFunction.prototype)
                // there should never be an overlap in key names / class names
                results[key] = (bytes)=>new classFunction(new KaitaiStream(bytes))
                Object.setPrototypeOf(results[key], prototypeCopy)
                Object.assign(results[key], classFunction)
            } else {
                results[key] = classFunction
            }
        }
    }
    return results
}