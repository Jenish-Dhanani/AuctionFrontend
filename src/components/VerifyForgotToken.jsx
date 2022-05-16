import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const VerifyForgotToken = ({notify})=>{

    let navigate = useNavigate()
    let {token,uid} = useParams()
    let [isValidToken,setIsValidToken] = useState()
    const [values, setValues] = useState({password:"",confirmPassword:""})
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        if(token){
            //verify token from backend
            setIsValidToken(true)
        }else{
            setIsValidToken(false)
        }
    },[])

    const validateForm=(values)=>{
        let err={}
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
        return err
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setValues({...values, [name]:value})
    }

    const handleSubmit = async (e)=>{
        //save updated password
        e.preventDefault();
        let errs = validateForm(values)
        setErrors(validateForm(values))

        if(Object.keys(errs).length===0){
            //call backend api
            let item = { newpassword:values.password };
            let result = await fetch(`https://auctionpointbackend.herokuapp.com/user/reset-password/${token}/${uid}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            if(result === 'password changed successfully'){
                notify('password changed successfully')
                navigate('/login')
            }
        }else{
            console.log(errs)
        }
    }

    return (<>
    <div className='container'>
        <div className="w-100 d-flex justify-content-center p-5">
            {
                isValidToken?<div className="col-lg-5 col-md-10 d-flex flex-column justify-content-center align-items-center shadow p-5">
                <img src="https://usa.afsglobal.org/SSO/SelfPasswordRecovery/images/send_reset_password.svg?v=3" alt="" />
                <h1 className="mt-3 text-primary">Forgot Password?</h1>
                <p>Set new password here</p>
                <form onSubmit={handleSubmit} name="verifyforgotpassword" className="w-100">
                    <div className="form-group my-3 text-start w-100">
                            <label className="form-control-placeholder" htmlFor="password">Password</label>
                            <input type="password" className={`form-control ${errors.password? "is-invalid" :""}`}
                                name="password" value={values.password} onChange={handleChange} />
                            {
                                errors.password &&<div className="alert-danger my-3 p-2">
                                    {errors.password}
                                </div>
                            }
                    </div>
                    <div className="form-group my-3 text-start w-100">
                            <label className="form-control-placeholder" htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className={`form-control ${errors.confirmPassword? "is-invalid" :""}`}
                                name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                            {errors.confirmPassword &&<div className="alert-danger my-3 p-2">{errors.confirmPassword}</div>}
                    </div>
                    <button className='btn btn-primary w-100'>Set Password</button>
                </form>
            </div>:<div className="col-lg-6 col-md-10 d-flex flex-column justify-content-center align-items-center shadow p-5">
            <img src="https://usa.afsglobal.org/SSO/SelfPasswordRecovery/images/send_reset_password.svg?v=3" alt="" />
                <h1 className="mt-3">Invalid Link or Link is expired.</h1>
            </div>
            }
        </div>
    </div>
    </>)
}

export default VerifyForgotToken