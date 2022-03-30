import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

export const Registration = () => {

        const [values, setValue] = useState({
            fstName: "",
            lstName: "",
            dob: "",
            email: "",
            mobNo: "",
            passwd: "",
            cnfrmPasswd: "",
            address: "",
            gender: "",
            AdhaarNo: ""
        });

        const handleFormChange = (event) => {
          const { name, value } = event.target;
          setValue({
            ...values,
            [name]: value
          })
        }

       const [submitted, setSubmitted] = useState(false);

       const handleSubmit = (event) => {
           event.preventDefault();
           console.log(values);
           setSubmitted(true);
       }

  return (
      <>
      <Navigation/>
<div className="row d-flex justify-content-center mt-5">

<div className="col-md-6">
<div className="card">
  <div className="card-body">
  {submitted ? <div className="alert-success"> Successfully registered </div> : null}
    <h5 className="card-title mt-2"> Registration </h5>
    <form onSubmit={handleSubmit}>

    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
          <input value={values.fstName} name="fstName" type="text" id="fstName" className="form-control" placeholder="First name" onChange={handleFormChange}/>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
          <input value={values.lstName} name="lstName" type="text" id="lstName" className="form-control" placeholder="Last name" onChange={handleFormChange}/>
        </div>
      </div>
    </div>

    <div className="form-outline mb-4">
      <input value={values.email} name="email" type="email" id="emailAdd" className="form-control" placeholder="Email address" onChange={handleFormChange}/>
    </div>

    <div className="form-outline mb-4">
    <input value={values.mobNo} name="mobNo" type="number" id="Contact" className="form-control" placeholder="Contact No." onChange={handleFormChange}/>
    </div>

    <div id="date-picker-example" className="md-form md-outline datepicker" inline="true">
        <input value={values.dob} name="dob" placeholder="Select date" type="date" id="dob" className="form-control" onChange={handleFormChange}/>
    </div>

    <div className="row mb-4 ml-2 mt-3">
      <div className="col">
        <div className="form-outline">
        <input className="form-check-input" value="Female" type="radio" name="gender" id="flexRadioDefault1" onChange={handleFormChange}/>
        <label className="form-check-label" htmlFor="flexRadioDefault1"> Female </label>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
        <input className="form-check-input" value="Male" type="radio" name="gender" id="flexRadioDefault2" onChange={handleFormChange}/>
        <label className="form-check-label" htmlFor="flexRadioDefault1"> Male </label>
        </div>
      </div>
    </div>

    <div className="form-outline mb-4">
      <input value={values.AdhaarNo} name="AdhaarNo" type="number" id="adhaarNo" className="form-control" placeholder="Adhaar No." onChange={handleFormChange}/>
    </div>

    <div className="form-outline mb-4">
        <input value={values.address} name="address" type="text" id="form7Example4" className="form-control" placeholder="Address" onChange={handleFormChange} />
    </div>

    <div className="row mb-4">
      <div className="col">
        <div className="form-outline">
         <input value={values.passwd} name="passwd" type="password" id="passwd" className="form-control" placeholder="Enter Password" onChange={handleFormChange}/>
        </div>
      </div>
      <div className="col">
        <div className="form-outline">
         <input value={values.cnfrmPasswd} name="cnfrmPasswd" type="password" id="cnfrmPasswd" className="form-control" placeholder="Confirm Password" onChange={handleFormChange}/>
        </div>
      </div>
    </div>


    <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

  </form>
  <div className="text-center mt-3">
        <p>Already a member? <Link to="/signin"> Sign in </Link></p>
      </div>
  </div>
  </div>
  </div>
  </div>
  </>
  )
}

export default Registration