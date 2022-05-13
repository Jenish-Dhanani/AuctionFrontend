import { useEffect, useState } from "react";
import Navigation from "./Navigation";
function Forgotpassword({notify}) {
    document.title = "Forgot Password - AuctionPoint.com"

    const [values, setValues] = useState({email:""})
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value
        })
    }

	const validateForm=(values)=>{
        let err={}
        if(!values.email){
            err.email = "Email is required."
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
            err.email = "Email is invalid"
        }
        return err
    }

    async function handleSubmit(event){
        event.preventDefault()
        setErrors(validateForm(values))
        let errs = validateForm(values)
        setErrors(errs)

        // setDataIsCorrect(true)
        if(Object.keys(errs).length ===0 ){
            setIsLoading(true)
            let data = {
                email:values.email
            }
            let result = await fetch("https://auctionpointbackend.herokuapp.com/user/forgot-password", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
            });
            result = await result.json();

            if(result==='user not found'){
                notify("Account not found")
            }else if(result === 'Mail Sent!'){
                notify("Reset password mail Sent!")
            }
            setIsLoading(false)
        }
    }

  return (
    <div>
        <Navigation/>
        {isLoading?<div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary"></div>
        </div>
        :<div className='container'>
            <div className="w-100 d-flex justify-content-center p-5">
                <div className="col-lg-5 col-md-10 d-flex flex-column justify-content-center align-items-center shadow p-5">
                    <img src="https://usa.afsglobal.org/SSO/SelfPasswordRecovery/images/send_reset_password.svg?v=3" alt="" />
                    <h1 className="mt-3 text-primary">Forgot Password?</h1>
                    <p>You can reset password here.</p>
                    <form onSubmit={handleSubmit} name="forgotpassword" className="w-100">
                        <div className="form-group my-3 text-start w-100">
                                <label className="form-control-placeholder" htmlFor="email">Email</label>
                                <input type="email" className={`form-control ${errors.email? "is-invalid" :""}`}
                                    name="email" value={values.email} onChange={handleChange} />
                                {errors.email &&<div className="alert-danger my-3 p-2">{errors.email}</div>}
                        </div>
                        <button className='btn btn-primary w-100'>Reset Password</button>
                    </form>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Forgotpassword