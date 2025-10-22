### What is this?

There's a nice tool, [Kaitai Struct](https://kaitai.io/), for helpping parse binary data across languages. It's great but it's javascript support is for node.js and common.js rather than modern ESM modules. This is a slight modification of the compiler that allows it to be used in modern ESM environments.

### Example Usage

```js
import kaitaiCompiler from "https://esm.sh/gh/jeff-hykin/kaitai-esm@master/compiler.js"
import kaitaiCompiler from "./compiler.js"
import Yaml from 'https://esm.sh/yaml@2.4.3'

var ksyFileAsObject = Yaml.parse(`
meta:
  id: gif
  file-extension: gif
  endian: le
seq:
  - id: header
    type: header
  - id: logical_screen
    type: logical_screen
types:
  header:
    seq:
      - id: magic
        contents: 'GIF'
      - id: version
        size: 3
  logical_screen:
    seq:
      - id: image_width
        type: u2
      - id: image_height
        type: u2
      - id: flags
        type: u1
      - id: bg_color_index
        type: u1
      - id: pixel_aspect_ratio
        type: u1
`)
var debugMode = false
var importer = {
    importYaml: (name, mode) => Promise.resolve(Yaml.parse(Deno.readTextFileSync(name)))
}
var filenameToContents = await kaitaiCompiler.compile("javascript", ksyFileAsObject, importer, debugMode)
console.debug("Files to create: ", filenameToContents)
```