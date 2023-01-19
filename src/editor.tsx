import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Editor from 'src/editor/Editor'

export const useEditor = () => {
    // if (document !== undefined) {
    //     const svgEditor = new Editor(document.getElementById('canvas'))
    //     svgEditor.init()
    //     svgEditor.setConfig({
    //       allowInitialUserOverride: true,
    //       extensions: [],
    //       noDefaultExtensions: false,
    //       userExtensions: []
    //     })
    //   }
    useEffect(() => {
        if (document !== undefined) {
            const svgEditor = new Editor(document.getElementById('canvas'))
            svgEditor.init()
            svgEditor.setConfig({
              allowInitialUserOverride: true,
              extensions: [],
              noDefaultExtensions: false,
              userExtensions: []
            })
          }
    }, []);

    // return (
    //     <>
    //         <div id="canvas" style={{ height: "100vh", width: "100vw" }}></div>
    //     </>
    // )
}