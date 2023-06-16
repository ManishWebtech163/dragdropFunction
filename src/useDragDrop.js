import { useState } from "react"

export default function useDragDrop() {

    // --false open files on browser-- (required)
    const falseFilesOnDrag = (event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    const simpleDrag = (event) => {
        event.preventDefault()
        console.log(event)
        let data = event.dataTransfer

        // --list of droped files--
        let listOfFiles = data.files
        console.log(listOfFiles)
    }


    // -----------
    const [previewFilesData, setpreviewFilesData] = useState(null)

    const previewFIlesDrag = (event) => {

        event.preventDefault()

        // --list of droped files--
        let data = event.dataTransfer
        let listOfFiles = data.files

        // --array for store file values--
        let filesData = []

        // -- loop for get one by one files value
        for (let i = 0; i < listOfFiles.length; i++) {
            let getFile = listOfFiles[i]
            // --crate object according to need--
            let createObject = { name: `${getFile.name}`, value: getFile }
            // --push values in array
            filesData.push(createObject)
        }

        // --set data in state for send another files-
        setpreviewFilesData(filesData)
    }

    return { falseFilesOnDrag, simpleDrag, previewFIlesDrag, previewFilesData }
}
