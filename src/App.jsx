
import useDragDrop from './useDragDrop'
function App() {


  const { falseFilesOnDrag, simpleDrag, previewFIlesDrag, previewFilesData } = useDragDrop()
  console.log(previewFilesData, 'previewFilesData')
  return (
    <>
      <div className='container'>
        {/* --simle drag-- */}
        <div className="box" onDrop={simpleDrag} onDragEnter={falseFilesOnDrag} onDragOver={falseFilesOnDrag}>
          drop files
        </div>

        {/* --pre img drag-- */}
        <div className="box" onDrop={previewFIlesDrag} onDragEnter={falseFilesOnDrag} onDragOver={falseFilesOnDrag}>
          drop files
        </div>

      </div>
    </>
  )
}

export default App
