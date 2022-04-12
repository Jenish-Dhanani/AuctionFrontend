import Navigation from './Navigation';
import { Link,useLocation,useNavigate  } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {

    const navigate = useNavigate();
	// useEffect(() => {
	// 	if (isAuthenticated()) {
	// 	  navigate("/sign-in");
	// 	}
	// }, [isLogin, navigate]);

	const location = useLocation();//to redirect page which user want

	const formInitialValue = {
        email:"",
        password:"",
    }
	const [values, setValues] = useState(formInitialValue)
    const [errors, setErrors] = useState({})
	const [dataIsCorrect, setDataIsCorrect] = useState(false)
	const [messageBox, setMessageBox] = useState("")

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
        if(!values.password){
            err.password = "Password is required."
        }
        return err
    }

    function handleSubmit(event){
        event.preventDefault()
        setErrors(validateForm(values))
		setDataIsCorrect(true)
    }

	useEffect(()=>{
		if(Object.keys(errors).length===0 && dataIsCorrect){
			if(!errors.email && !errors.password){

				let data = {
					email:values.email,
					password:values.password,
				}

			}
		}
	},[errors])



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
                            <h3 className="mb-4">Sign In</h3>
                        </div>
                    </div>
                    {messageBox.length!=0 && <div className="alert alert-danger">{messageBox}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder" htmlFor="username">Email</label>
                            <input type="email" className={`form-control ${errors.email? "is-invalid" :""}`}
                                name="email" value={values.email} onChange={handleChange} />
                            {errors.email &&<div className="alert-danger my-3 p-2">{errors.email}</div>}
                        </div>
                        <div className="form-group my-3 text-start">
                            <label className="form-control-placeholder" htmlFor="password">Password</label>
                            <input type="password" name="password" value={values.password} className={`form-control
                                ${errors.password? "is-invalid" :""}`} onChange={handleChange} />
                            {errors.password &&<div className="alert-danger my-3 p-2">{errors.password}</div>}
                        </div>
                        <div className="form-group my-3">
                            <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
                                In</button>
                        </div>
                        <div className="form-group mt-5">
                            <p className="w-100 text-end">
                                <Link to="/">Forgot Password</Link>
                            </p>
                            <div className="w-100 text-end">
                                <p>Not a member?
                                    {" "}
                                    <Link data-toggle="tab" to="/sign-up">Sign Up</Link>
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

export default Login