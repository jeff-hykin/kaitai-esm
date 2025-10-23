
        import { ksyToC } from "../helpers/ksyToC.js"
        import Yaml from 'https://esm.sh/yaml@2.4.3?target=es2022'
        import CM from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@0.0.2.2/main.js?target=es2022'
        import atomOne from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@0.0.2.2/themes/atomone.js?target=es2022'
        import dracula from 'https://esm.sh/gh/jeff-hykin/codemirror_esm@0.0.2.2/themes/dracula.js?target=es2022'

        const { basicSetup } = CM["codemirror"]
        const { EditorView, keymap } = CM["@codemirror/view"]
        const { EditorState, Prec } = CM["@codemirror/state"]
        console.log(Object.keys(CM))
        const { cpp } = CM["@codemirror/lang-cpp"]
        const { tags: t } = CM['@lezer/highlight']
        const { themeToExtension } = CM["@jeff-hykin/theme-tools"]

        //  NOTE: all of @uiw/codemirror-theme's have been ported to ./themes
        
        function makeEditor(code) {
            const parent = document.createElement("div")
            let editor = new EditorView({
                parent,
                state: EditorState.create({
                    doc: code,
                    extensions: [
                        basicSetup, // ctrl+z = undo, and other stuff like that
                        cpp(), // highlighting hooks
                        
                        // 
                        // theme choice
                        // 
                        themeToExtension(
                            atomOne({
                                // override theme settings
                                settings: {
                                    background: "#272C35",
                                    foreground: "#9d9b97",
                                    caret: "#797977",
                                    selection: "#3d4c64",
                                    selectionMatch: "#3d4c64",
                                    gutterBackground: "#272C35",
                                    gutterForeground: "#465063",
                                    gutterBorder: "transparent",
                                    lineHighlight: "#2e3f5940",
                                },
                                // effectively delete any existing red styles from the theme
                                mutateThemeStyles: (style, tags) => (style.color == "red" ? null : style),
                                // add some new styles
                                styles: (tags) => [
                                    {
                                        tag: [t.tagName, t.heading],
                                        color: "#e06c75",
                                    },
                                    {
                                        tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
                                        color: "hsl(207, 82%, 66%)",
                                    },
                                ],
                            })
                        ),
                        
                        //
                        // example: define your own keybinding
                        //
                        keymap.of([{
                            key: "Ctrl-Enter",
                            run: () =>{
                                console.log("User pressed Ctrl+Enter!")
                                return true
                            }}
                        ]),
                        
                        // 
                        // example: overriding a default keybinding (from the basicSetup or another extension)
                        // 
                        // Prec = "precedence"
                        Prec.high(keymap.of([{
                            key: "Ctrl-;",
                            run: () =>{
                                console.log("User pressed Ctrl+;!")
                                return true
                            }}
                        ])),
                        
                        // 
                        // example: onChange
                        // 
                        EditorView.updateListener.of((update)=>{
                            // const codeString = editor.state.doc.text.join("\n")
                            // console.log("Something (no matter how small) happened!")
                            // console.log("I'm called on init, and twice per keypress")
                            // console.log("DON'T USE THIS UNLESS YOU HAVE TO!")
                        })
                    ],
                }),
            })
            return parent
        }

        let code
        setInterval(() => {
            if (code!=document.getElementById("code").value) {
                code = document.getElementById("code").value 
                try {
                    const { code: cCode, warnings } = ksyToC(Yaml.parse(code))
                    document.getElementById("code_output").innerHTML = ""
                    document.getElementById("code_output").append(makeEditor(cCode))
                    warnings.innerHTML = warnings.map(each=>`<div>${each}</div>`.replace(/\n/g,"<br>")).join("<br>")
                } catch (error) {
                    warnings.innerHTML = error.stack.replace(/\n/g,"<br>")
                }
            }
        }, 100)
    