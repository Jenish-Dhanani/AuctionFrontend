import { useEffect, useState } from "react";
function Forgotpassword() {

    const [values, setValues] = useState({email:""})
    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

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

    function handleSubmit(event){
        event.preventDefault()
        setErrors(validateForm(values))
        setDataIsCorrect(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length ===0 && dataIsCorrect){

            let data = {
                email:values.email
            }
        }
    },[errors])


  return (
    <div className='container'>
        <div className="w-100 d-flex justify-content-center p-5">
            <div className="col-lg-5 col-md-10 d-flex flex-column justify-content-center align-items-center shadow p-5">
                <img src="https://usa.afsglobal.org/SSO/SelfPasswordRecovery/images/send_reset_password.svg?v=3" alt="" srcset="" />
                <h1 className="mt-3">Forgot Password?</h1>
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
    </div>
  )
}

export default Forgotpassword