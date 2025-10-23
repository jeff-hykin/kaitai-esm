### What is this?

There's a nice tool, [Kaitai Struct](https://kaitai.io/), for helpping parse binary data across languages. It's great but it's javascript support is for node.js and common.js rather than modern ESM modules. This is a slight modification that adds jsdoc completions and makes the generated JS support modern ESM environments.

Once [this PR from 2023](https://github.com/kaitai-io/kaitai_struct_compiler/pull/249) is merged (note: its 2025 at time of writing) this library will be less useful.

### Example Usage

```js
import Yaml from 'https://esm.sh/yaml@2.4.3'
import { createLoader } from "https://esm.sh/gh/jeff-hykin/kaitai-esm@master/main.js"

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
var debug = false
var importer = {
    importYaml: (name, mode) => Promise.resolve(Yaml.parse(Deno.readTextFileSync(name)))
}
var loaders = await createLoader(ksyFileAsObject, { debug, importer })
var exampleGifBytes = new Uint8Array([
  0x47, 0x49, 0x46, 0x38, 0x39, 0x61, // Header: GIF89a
  0x01, 0x00, 0x01, 0x00,             // Logical Screen Width & Height: 1x1
  0x80,                               // GCT follows for 2 colors
  0x01,                               // Background color index
  0x00,                               // Pixel aspect ratio
  0x00, 0x00, 0x00,                   // GCT[0] - Black
  0xFF, 0xFF, 0xFF,                   // GCT[1] - White
  0x21, 0xF9, 0x04, 0x01, 0x00, 0x00, 0x00, 0x00, // Graphics Control Extension
  0x2C,                               // Image Descriptor
  0x00, 0x00, 0x00, 0x00,             // Image left, top
  0x01, 0x00, 0x01, 0x00,             // Image width & height: 1x1
  0x00,                               // No local color table
  0x02, 0x02, 0x44, 0x01, 0x00,       // Image data (LZW min code size = 2)
  0x3B                                // GIF file terminator
]);
var parsedGif = loaders.Gif(exampleGifBytes)
// use the data:
parsedGif.header.magic
parsedGif.header.version
parsedGif.logicalScreen.imageWidth // 1
parsedGif.logicalScreen.imageHeight // 1

// 
// manually compiling the KSY file to JS
// 
import kaitaiCompiler from "https://esm.sh/gh/jeff-hykin/kaitai-esm@master/compiler.js"
var filenameToContents = await kaitaiCompiler.compile("javascript", ksyFileAsObject, importer, debug)
console.debug(`contents are:`,filenameToContents["Gif.js"])


// 
// using the generated JS file
// 
import { KaitaiStream } from "./kaitaiCore.js"
// NORMALLY: import gifSetup from "./Gif.js"
const setupGif = await import(`data:text/javascript;base64,${btoa(filenameToContents["Gif.js"])}`).then(i=>i.default)
const Gif = setupGif(KaitaiStream)
var parsedGif = Gif(exampleGifBytes)
// use the data:
parsedGif.header.magic
parsedGif.header.version
parsedGif.logicalScreen.imageWidth // 1
parsedGif.logicalScreen.imageHeight // 1
```

### Other

[Kaitai docs](https://doc.kaitai.io/user_guide.html#fixed-size-struct)