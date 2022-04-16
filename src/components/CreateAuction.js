import React,{useState} from 'react';
import Navigation from './Navigation';

// image upload
// import Dropzone from 'react-dropzone-uploader'
// import 'react-dropzone-uploader/dist/styles.css'
// import { getDroppedOrSelectedFiles } from 'html5-file-selector'

const CreateAuction = () => {

    // const [files,setFiles]=useState([])

    // const onSubmit = (files, allFiles) => {
    //     console.log(allFiles)
    // }
    // const fileParams = ({ meta }) => {
    //     return { url: 'https://httpbin.org/post' }
    // }

    // const onFileChange = ({ meta, file }, status) => {
    //     // console.log(status, meta, file)
    //     // console.log(files)
    // }

    // const getFilesFromEvent = e => {
    //     return new Promise(resolve => {
    //         getDroppedOrSelectedFiles(e).then(chosenFiles => {
    //             resolve(chosenFiles.map(f => f.fileObject))
    //             // setFiles({...files,chosenFiles})
    //             // setFiles([...files,chosenFiles[0]])
    //             // console.log(chosenFiles[0])
    //         })
    //     })
    // }
    // const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    //     const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
    //     return (
    //         <label className="btn btn-danger mt-4">
    //             {textMsg}
    //             <input
    //                 style={{ display: 'none' }}
    //                 type="file"
    //                 accept={accept}
    //                 multiple
    //                 onChange={e => {
    //                     getFilesFromEvent(e).then(chosenFiles => {
    //                         onFiles(chosenFiles)
    //                     })
    //                 }}
    //             />
    //         </label>
    //     )
    // }

    const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

    return (
        <div>
            <Navigation />
            <div className='container d-flex justify-content-center align-items-center py-5'>
                <div className="row w-100 justify-content-center">
                    <div className='col-md-12 col-lg-6 shadow p-5'>
                        <form className=''>
                        <h2>Upload Product</h2>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select className="form-select">
                                <option>cat 1</option>
                                <option>cat 2</option>
                                <option>cat 3</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="price" className="form-label">Price</label>
                            <div className="input-group">
                                <span className="input-group-text">₹</span>
                                <input type="text" id="price" className="form-control"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Description</label>
                            <textarea id="description" className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startdate" className="form-label">Start date</label>
                            <input type="date" className="form-control" id="startdate"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="startdate" className="form-label">End date</label>
                            <input type="date" className="form-control" id="startdate"/>
                        </div>
                        <div>
                            <label htmlFor="startdate" className="form-label">Product Images</label>
                            {/* <Dropzone
                                onSubmit={onSubmit}
                                onChangeStatus={onFileChange}
                                InputComponent={selectFileInput}
                                getUploadParams={fileParams}
                                getFilesFromEvent={getFilesFromEvent}
                                accept="image/jpg, image/png"
                                maxFiles={4}
                                inputContent="Drop A File"
                                styles={{
                                    height:"auto",
                                    dropzoneActive: { borderColor: 'green' },
                                }}
                            /> */}
                        </div>
                    </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreateAuction