import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

export const Registration = () => {

  const [fstName, setfirstName] = useState("")
  const [lstName, setlastName] = useState("")
  const [dob, setDOB] = useState("")
  const [email, setEmail] = useState("")
  const [mobNo, setmobileNumber] = useState("")
  const [passwd, setPassword] = useState("")
  //const [cnfrmPassw, setConfirmPassword] = useState("")
  const [address, setaddress] = useState("")
  const [gender, setgender] = useState("")
  const [AdhaarNo, setaadharNumber] = useState("")


  async function signUp(){
    let item = {fstName, lstName, dob, email, mobNo, passwd, AdhaarNo, address, gender}
    console.warn(item)

    let result = await fetch("http://localhost:4000/user/register", {
        method: 'POST',
        body:JSON.stringify(item),
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        }
    })

    result = await result.json()
    console.warn("result", result)
}

  // const handleFormChange = (event) => {
  //   const { name, value } = event.target;
  //   setValue({
  //     ...values,
  //     [name]: value
  //   })
  // }

  // const [submitted, setSubmitted] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(values);
  //   setSubmitted(true);
  // }

  return (
    <>
      <Navigation />
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
                      <input value={fstName} onChange={(e) => setfirstName(e.target.value)} name="fstName" 
                      type="text" id="fstName" className="form-control" placeholder="First name" 
                     />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input value={lstName} name="lstName" type="text" id="lstName" className="form-control" 
                      placeholder="Last name" onChange={(e) => setlastName(e.target.value)} />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input value={email} name="email" type="email" id="emailAdd"
                   className="form-control" placeholder="Email address" 
                   onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-outline mb-4">
                  <input value={mobNo} name="mobNo" type="number" id="Contact" 
                  className="form-control" placeholder="Contact No." 
                  onChange={(e) => setmobileNumber(e.target.value)} />
                </div>

                <div id="date-picker-example" className="md-form md-outline datepicker" inline="true">
                  <input value={dob} name="dob" placeholder="Select date" type="date" 
                  id="dob" className="form-control" 
                  onChange={(e) => setDOB(e.target.value)} />
                </div>

                <div className="row mb-4 ml-2 mt-3">
                  <div className="col">
                    <div className="form-outline">
                      <input className="form-check-input" 
                      value="Female" type="radio" name="gender" 
                      id="flexRadioDefault1" onChange={(e) => setgender(e.target.value)} />
                      <label className="form-check-label" htmlFor="flexRadioDefault1"> Female </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input className="form-check-input" value="Male" type="radio" 
                      name="gender" id="flexRadioDefault2" onChange={(e) => setgender(e.target.value)} />
                      <label className="form-check-label" htmlFor="flexRadioDefault1"> Male </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input value={AdhaarNo} name="AdhaarNo" 
                  type="number" id="adhaarNo" className="form-control" 
                  placeholder="Adhaar No." onChange={(e) => setaadharNumber(e.target.value)} />
                </div>

                <div className="form-outline mb-4">
                  <input value={address} name="address" type="text" id="form7Example4" 
                  className="form-control" placeholder="Address" onChange={(e) => setaddress(e.target.value)} />
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input value={passwd} name="passwd" type="password" id="passwd" 
                      className="form-control" placeholder="Enter Password" 
                      onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input value={passwd} name="cnfrmPasswd" 
                      type="password" id="cnfrmPasswd" className="form-control" 
                      placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                </div>


                <button type="submit" onClick={signUp} className="btn btn-primary btn-block mb-4">Sign up</button>

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