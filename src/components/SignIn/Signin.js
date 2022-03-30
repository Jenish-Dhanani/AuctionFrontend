import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

const Login = () => {
    const [values, setValue] = useState({
        email: "",
        password: ""
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
    <Navigation />
    <div className="row d-flex justify-content-center mt-5">

      <div className="col-md-6">
      <div className="card">
        <div className="card-body">
            {submitted ? <div className="alert-success"> Successful Login </div> : null}
        <h5 className="card-title mt-2">Login</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input name="email" value={values.email} type="email" id="form1Example1" className="form-control" placeholder="Email address" onChange={handleFormChange}/>
        </div>

        <div className="form-outline mb-4">
          <input name="password" value={values.password} type="password" id="form1Example2" className="form-control" placeholder="Password" onChange={handleFormChange}/>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3"/>
              <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      </form>
      <div className="text-center mt-3">
        <p>Not a member? <Link to="/register">Register</Link></p>
       </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login