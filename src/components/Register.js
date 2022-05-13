import Navigation from './Navigation';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import validator from 'validator'
import auctionCover from '../../src/images/auction-cover.jpeg'

const Register = ({notify}) => {
    document.title = "Registration- AuctionPoint.com"

    const formInitialValue = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
        dob: "",
        aadharNumber: "",
        profile: "",
        gender: "",
        address: ""
    }

    const [values, setValues] = useState(formInitialValue)
    const [sucessMessage, setMessage] = useState("")
    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (event) => {
        //console.log(event.target.value, event.target)
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        //console.log("data ", event.target);
        event.preventDefault()
        // setErrors(validateForm(values))
        let errs = validateForm(values)
        // setDataIsCorrect(true)
        setErrors(errs)

        if(Object.keys(errs).length===0){
            const firstName = event.target.firstName.value;
            //console.log("fn ",firstName);
            const lastName = event.target.lastName.value;
            const dob = event.target.dob.value;
            const email = event.target.email.value;
            const mobileNumber = event.target.mobileNumber.value;
            const password = event.target.password.value;
            const aadharNumber = event.target.aadharNumber.value;
            const address = event.target.address.value;
            const gender = event.target.gender.value;

            let item = { firstName, lastName, dob, email, mobileNumber, password, aadharNumber, address, gender }
            // console.warn(item)
            let result = await fetch("https://auctionpointbackend.herokuapp.com/user/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            })

            result = await result.json()
            if(result.message === 'Record created successfully.'){
                notify("Account verification link has been sent to your mail.")
            }
        }
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.firstName) {
            err.firstName = "First name is required."
        }
        if (!values.lastName) {
            err.lastName = "Last name is required."
        }
        if (!/\S+@\S+\.\S+/.test(values.email)) {
            err.email = "Email is invalid"
        }
        if (!values.email) {
            err.email = "Email is required."
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/.test(values.password)) {
            err.password = `At least 1 Uppercase. At least 1 Lowercase. At least 1 Number. Min 8 chars and Max 20 chars`
        }

        if (!values.password) {
            err.password = "Password is required."
        }
        if (!values.confirmPassword) {
            err.confirmPassword = "Confirm password is required."
        }
        if (values.password !== values.confirmPassword) {
            err.confirmPassword = "Password and confirm password not matching."
        }

        if (values.mobileNumber.length !== 10) {
            err.mobileNumber = "Phone number must be of 10 digit."
        }

        if (!values.mobileNumber) {
            err.mobileNumber = "Phone number is required."
        }

        if (values.aadharNumber.length !== 12) {
            err.aadharNumber = "Aadhar number must be of 12 digit."
        }
        if (!values.aadharNumber) {
            err.aadharNumber = "Aadhar number is required."
        }

        if (!values.gender) {
            err.gender = "Gender is required."
        }

        if (!validator.isDate(values.dob)) {
            err.dob = "Invalid date."
        }

        if (!values.dob) {
            err.dob = "Date Of Birth is required."
        }

        // if (!values.profile.match(/\.(jpg|jpeg|png)$/)) {
        //     err.profile = "Please select an image file only."
        // }

        // if (!values.profile) {
        //     err.profile = "Please select an image file."
        // }


        if (!values.address) {
            err.address = "Address is required."
        }
        return err
    }

    return (
        <div style={{backgroundColor:"#f2f2f2", minHeight:"100vh"}}>
            <Navigation />
            <div className="container">
                <div className="row justify-content-center my-4">
                    <div className="col-md-7 col-lg-5 shadow p-3" style={{backgroundColor:"white"}}>
                        <div className="rounded w-100"
                            style={{ backgroundImage: `url(${auctionCover})`, height: "200px", backgroundSize: "140%", backgroundRepeat: "no-repeat" }}>
                        </div>
                        <div className="p-3">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4 h1">Sign Up</h3>
                                </div>
                            </div>
                            {sucessMessage.length !== 0 && <div className="alert alert-success">{sucessMessage}</div>}
                            <form onSubmit={handleSubmit} name="signup">
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">First Name</label>
                                    <input type="text"
                                        className={`form-control ${errors.firstName ? "is-invalid" : ""} `}
                                        name="firstName" value={values.firstName} onChange={handleChange} />
                                    {errors.firstName && <div className="alert-danger my-3 p-2">{errors.firstName}</div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Last Name</label>
                                    <input type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""} `}
                                        name="lastName" value={values.lastName} onChange={handleChange} />
                                    {errors.lastName && <div className="alert-danger my-3 p-2">{errors.lastName}</div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Email</label>
                                    <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        name="email" value={values.email} onChange={handleChange} />
                                    {errors.email && <div className="alert-danger my-3 p-2">{errors.email}</div>}
                                </div>

                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Password</label>
                                    <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        name="password" value={values.password} onChange={handleChange} />
                                    {errors.password && <div className="alert-danger my-3 p-2">{errors.password}</div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Confirm Password</label>
                                    <input type="password" className={`form-control ${errors.confirmPassword ? "is-invalid"
                                        : ""}`} name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                                    {errors.confirmPassword && <div className="alert-danger my-3 p-2">{errors.confirmPassword}
                                    </div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Phone Number</label>
                                    <input type="number" className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
                                        name="mobileNumber" value={values.mobileNumber} onChange={handleChange} />
                                    {errors.mobileNumber && <div className="alert-danger my-3 p-2">{errors.mobileNumber}</div>}
                                </div>

                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Date Of Birth</label>
                                    <input type="date" className={`form-control ${errors.dob ? "is-invalid"
                                        : ""}`} name="dob" value={values.dob} onChange={handleChange} />
                                    {errors.dob && <div className="alert-danger my-3 p-2">{errors.dob}
                                    </div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Aadhar Number</label>
                                    <input type="number" className={`form-control ${errors.aadharNumber ? "is-invalid"
                                        : ""}`} name="aadharNumber" value={values.aadharNumber} onChange={handleChange} />
                                    {errors.aadharNumber && <div className="alert-danger my-3 p-2">{errors.aadharNumber}
                                    </div>}
                                </div>
                                {/* <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Profile Photo</label>
                                    <input type="file" accept="image/png, image/jpg, image/jpeg" className={`form-control ${errors.profile ? "is-invalid"
                                        : ""}`} name="profile" value={values.profile} onChange={handleChange} />
                                    {errors.profile && <div className="alert-danger my-3 p-2">{errors.profile}
                                    </div>}
                                </div> */}
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Gender</label>
                                    <br />
                                    <label>Male</label>
                                    <input type="radio" className={`ms-2  `} name="gender" value="male" onChange={handleChange} checked={values.gender == "male"} />
                                    <label className='ms-3'>Female</label>
                                    <input type="radio" className={`ms-2  `} name="gender" value="female" onChange={handleChange} checked={values.gender == "female"} />
                                    {errors.gender && <div className="alert-danger my-3 p-2">{errors.gender}</div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder">Address</label>
                                    <textarea className={`form-control ${errors.address ? "is-invalid" : ""} `} name="address"
                                        value={values.address} onChange={handleChange} />
                                    {errors.address && <div className="alert-danger my-3 p-2">{errors.address}</div>}
                                </div>

                                <div className="form-group my-3">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
                                        Up</button>
                                </div>
                                <div className="form-group mt-5">
                                    <div className="w-100 text-center">
                                        <p>Not a member?
                                            {" "}<Link data-toggle="tab" to="/login">Sign In</Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register