import React,{useState} from 'react';
import Navigation from './Navigation';

const CreateAuction = () => {

    const [image1, setImage1] = useState([]);
    const [image2, setImage2] = useState([]);
    const [image3, setImage3] = useState([]);
    const [image4, setImage4] = useState([]);
    const [product,setProduct] = useState({
        title:"",
        category:"",
        price:"",
        description:"",
        startdate:"",
        enddate:""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target
        setProduct({...product, [name]:value})
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.title) {
            err.title = "Title is required."
        }
        if (!values.category) {
            err.category = "Category is required."
        }

        if (!values.price) {
            err.price = "Price is required."
        }

        if (!values.description) {
            err.description = "Description is required."
        }

        if(values.startdate > values.enddate){
            err.startdate = "start date should be less than end date"
            err.enddate = "start date should be less than end date"
        }

        if (!values.startdate) {
            err.startdate = "Start is required."
        }
        if (!values.enddate) {
            err.enddate = "End date is required."
        }
        if(image1.length===0){
            err.image1 = "Front Image is required."
        }
        return err
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let errs = validateForm(product)
        setErrors(validateForm(product))

        if(Object.keys(errs).length===0){
            let data = {
                title:product.title,
                category:product.category,
                price:product.price,
                description:product.description,
                startdate:product.startdate,
                enddate:product.enddate,
                image1:image1,
                image2:image2,
                image3:image3,
                image4:image4,
            }
            console.log(data)
        }else{
            console.log(errs)
        }
    }

    return (
        <div>
            <Navigation />
            <div className='container-fluid d-flex justify-content-center align-items-center py-5 bg-secondary'>
                <div className="row w-100 justify-content-center">
                    <div className='col-md-12 col-lg-6 shadow p-5 bg-white'>
                        <form className='' onSubmit={handleSubmit}>
                        <h2 className='mb-4'>Upload Product</h2>
                        <hr/>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bold">Title</label>
                            <input type="text" name="title" className={`form-control ${errors.title ? "is-invalid" : ""} `} id="title" onChange={handleChange}/>
                            {errors.title && <div className="alert-danger my-3 p-2">{errors.title}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label fw-bold">Category</label>
                            <select defaultValue="" className={`form-select ${errors.category ? "is-invalid" : ""} `} name="category" onChange={handleChange} >
                                <option value="" disabled>Select Category</option>
                                <option value="1">cat 1</option>
                                <option value="2">cat 2</option>
                                <option value="3">cat 3</option>
                            </select>
                            {errors.category && <div className="alert-danger my-3 p-2">{errors.category}</div>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="price" className="form-label fw-bold">Price</label>
                            <div className='input-group'>
                                <span className="input-group-text fw-bolder">₹</span>
                                <input type="text" id="price" className={`form-control ${errors.price ? "is-invalid" : ""} `} name="price" onChange={handleChange} />
                            </div>
                            {errors.price && <div className="alert-danger my-3 p-2">{errors.price}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label fw-bold">Description</label>
                            <textarea id="description" className={`form-control ${errors.description ? "is-invalid" : ""} `} name="description" onChange={handleChange} ></textarea>
                            {errors.description && <div className="alert-danger my-3 p-2">{errors.description}</div>}
                        </div>
                        <hr/>
                        <div className="mb-3">
                            <label htmlFor="startdate" className="form-label fw-bold">Start date</label>
                            <input type="date" className={`form-control ${errors.startdate ? "is-invalid" : ""} `} id="startdate" name="startdate" onChange={handleChange} />
                            {errors.startdate && <div className="alert-danger my-3 p-2">{errors.startdate}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="enddate" className="form-label fw-bold">End date</label>
                            <input type="date" className={`form-control ${errors.enddate ? "is-invalid" : ""} `} id="enddate" name="enddate" onChange={handleChange} />
                            {errors.enddate && <div className="alert-danger my-3 p-2">{errors.enddate}</div>}
                        </div>
                        <hr/>
                        <div>
                            <label htmlFor="startdate" className="form-label fw-bold">Product Images</label>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Image 1</label>
                                    <input className={`form-control ${errors.image1 ? "is-invalid" : ""} `} type="file" id="image-input1" accept='.jpg,.jpeg,.png' onChange={(e)=>setImage1(e.target.files[0]?[e.target.files[0]]:[])}/>
                                    {errors.image1 && <div className="alert-danger my-3 p-2">{errors.image1}</div>}
                                    {image1.length !==0?<img className='col-5 my-2' src={URL.createObjectURL(image1[0])} />:<></>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Image 2</label>
                                    <input className="form-control" type="file" id="image-input2" accept='.jpg,.jpeg,.png' onChange={(e)=>setImage2(e.target.files[0]?[e.target.files[0]]:[])} />
                                    {image2.length !==0?<img className='col-5 my-2' src={URL.createObjectURL(image2[0])} />:<></>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Image 3</label>
                                    <input className="form-control" type="file" id="image-input3" accept='.jpg,.jpeg,.png' onChange={(e)=>setImage3(e.target.files[0]?[e.target.files[0]]:[])} />
                                    {image3.length !==0?<img className='col-5 my-2' src={URL.createObjectURL(image3[0])} />:<></>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formFile" className="form-label">Image 4</label>
                                    <input className="form-control" type="file" id="image-input4" accept='.jpg,.jpeg,.png' onChange={(e)=>setImage4(e.target.files[0]?[e.target.files[0]]:[])}/>
                                    {image4.length !==0?<img className='col-5 my-2' src={URL.createObjectURL(image4[0])} />:<></>}
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <button type="submit" className='btn btn-primary float-end btn-lg'>Save</button>
                            </div>
                        </div>
                    </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreateAuction