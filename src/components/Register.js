import Navigation from './Navigation';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import validator from 'validator'

const Register = () => {

const formInitialValue = {
fname:"",
lname:"",
email:"",
password:"",
confirmPassword:"",
pho:"",
dob:"",
aadhar:"",
profile:"",
gender:"",
address:""
}

const [values, setValues] = useState(formInitialValue)
const [sucessMessage, setMessage] = useState("")
const [errors, setErrors] = useState({})
const [dataIsCorrect, setDataIsCorrect] = useState(false)

const handleChange = (event)=>{
setValues({
...values,
[event.target.name]:event.target.value
})
}

function handleSubmit(event){
event.preventDefault()
setErrors(validateForm(values))
setDataIsCorrect(true)
}

useEffect(()=>{
if(Object.keys(errors).length ===0 && dataIsCorrect){

let data = {
fname:values.fname,
lname:values.lname,
email:values.email,
password:values.password,
pho:"",
dob:"",
aadhar:"",
profile:"",
gender:"",
address:""
}
}
},[errors])

const validateForm=(values)=>{
let err={}
if(!values.fname){
err.fname = "First name is required."
}
if(!values.lname){
err.lname = "Last name is required."
}
if(!values.email){
err.email = "Email is required."
}else if(!/\S+@\S+\.\S+/.test(values.email)){
err.email = "Email is invalid"
}

if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/.test(values.password)){
    err.password = `At least 1 Uppercase. At least 1 Lowercase. At least 1 Number. At least 1 Symbol. Min 8 chars and Max 12 chars`
}

if(!values.password){
err.password = "Password is required."
}
if(!values.confirmPassword){
err.confirmPassword = "Confirm password is required."
}
if(values.password !== values.confirmPassword){
err.confirmPassword = "Password and confirm password not matching."
}

if(values.pho.length!==10){
    err.pho = "Phone number must be of 10 digit."
}

if(!values.pho){
err.pho = "Phone number is required."
}

if(values.aadhar.length!==12){
    err.aadhar = "Aashar number must be of 12 digit."
}
if(!values.aadhar){
err.aadhar = "Aadhar number is required."
}

if(!values.gender){
err.gender = "Gender is required."
}

if(!validator.isDate(values.dob)){
    err.dob = "Invalid date."
}

if(!values.dob){
    err.dob = "Date Of Birth is required."
}

if(!values.profile.match(/\.(jpg|jpeg|png)$/)){
    err.profile = "Please select an image file only."
}

if(!values.profile){
    err.profile = "Please select an image file."
}


if(!values.address){
err.address = "Address is required."
}
return err
}

return (
<div>
    <Navigation />
    <div className="container">
        <div className="row justify-content-center my-4">
            <div className="col-md-7 col-lg-5 shadow p-3">
                <div className="rounded w-100"
                    style={{backgroundImage:`url("https://preview.colorlib.com/theme/bootstrap/login-form-15/images/xbg-1.jpg.pagespeed.ic.EtoN2PmO7Y.webp")`,height:"200px"}}>
                </div>
                <div className="p-3">
                    <div className="d-flex">
                        <div className="w-100">
                            <h3 className="mb-4">Sign Up</h3>
                        </div>
                    </div>
                    {sucessMessage.length!==0 && <div className="alert alert-success">{sucessMessage}</div>}
                    <form onSubmit={handleSubmit} name="signup">
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">First Name</label>
                            <input type="text" className={`form-control ${errors.fname? "is-invalid" :""} ` }
                                name="fname" value={values.fname} onChange={handleChange} />
                            {errors.fname &&<div className="alert-danger my-3 p-2">{errors.fname}</div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Last Name</label>
                            <input type="text" className={`form-control ${errors.lname? "is-invalid" :""} ` }
                                name="lname" value={values.lname} onChange={handleChange} />
                            {errors.lname &&<div className="alert-danger my-3 p-2">{errors.lname}</div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Email</label>
                            <input type="email" className={`form-control ${errors.email? "is-invalid" :""}`}
                                name="email" value={values.email} onChange={handleChange} />
                            {errors.email &&<div className="alert-danger my-3 p-2">{errors.email}</div>}
                        </div>

                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Password</label>
                            <input type="password" className={`form-control ${errors.password? "is-invalid" :""}`}
                                name="password" value={values.password} onChange={handleChange} />
                            {errors.password &&<div className="alert-danger my-3 p-2">{errors.password}</div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Confirm Password</label>
                            <input type="password" className={`form-control ${errors.confirmPassword? "is-invalid"
                                :""}`} name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                            {errors.confirmPassword &&<div className="alert-danger my-3 p-2">{errors.confirmPassword}
                            </div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Phone Number</label>
                            <input type="number" className={`form-control ${errors.pho? "is-invalid" :""}`}
                                name="pho" value={values.pho} onChange={handleChange} />
                            {errors.pho &&<div className="alert-danger my-3 p-2">{errors.pho}</div>}
                        </div>

                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Date Of Birth</label>
                            <input type="date" className={`form-control ${errors.dob? "is-invalid"
                                :""}`} name="dob" value={values.dob} onChange={handleChange} />
                            {errors.dob &&<div className="alert-danger my-3 p-2">{errors.dob}
                            </div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Aadhar Number</label>
                            <input type="number" className={`form-control ${errors.aadhar? "is-invalid"
                                :""}`} name="aadhar" value={values.aadhar} onChange={handleChange} />
                            {errors.aadhar &&<div className="alert-danger my-3 p-2">{errors.aadhar}
                            </div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Profile Photo</label>
                            <input type="file" accept="image/png, image/jpg, image/jpeg" className={`form-control ${errors.profile? "is-invalid"
                                :""}`} name="profile" value={values.profile} onChange={handleChange} />
                            {errors.profile &&<div className="alert-danger my-3 p-2">{errors.profile}
                            </div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Gender</label>
                            <br />
                            <label>Male</label>
                            <input type="radio" className={`ms-2  ` } name="gender" value="male" onChange={handleChange} checked={values.gender=="male"} />
                            <label className='ms-3'>Female</label>
                            <input type="radio" className={`ms-2  ` } name="gender"  value="female" onChange={handleChange} checked={values.gender=="female"} />
                            {errors.gender &&<div className="alert-danger my-3 p-2">{errors.gender}</div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder">Address</label>
                            <textarea className={`form-control ${errors.address? "is-invalid" :""} ` } name="address"
                                value={values.address} onChange={handleChange} />
                            {errors.address &&<div className="alert-danger my-3 p-2">{errors.address}</div>}
                    </div>

                    <div className="form-group my-3">
                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
                            Up</button>
                    </div>
                    <div className="form-group mt-5">
						<div className="w-100 text-end">
							<p>Not a member?
								{" "}<Link data-toggle="tab" to="/sign-in">SignIn</Link>
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