import Navigation from './Navigation';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import auctionCover from '../../src/images/auction-cover.jpeg'


const Login = ({notify}) => {

    document.title = "Login - AuctionPoint.com"
    const navigate = useNavigate();
    // useEffect(() => {
    // 	if (isAuthenticated()) {
    // 	  navigate("/sign-in");
    // 	}
    // }, [isLogin, navigate]);
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/")
    //     }
    // }, [])

    const location = useLocation();//to redirect page which user want

    const formInitialValue = {
        email: "",
        password: "",
    }
    const [values, setValues] = useState(formInitialValue)
    const [errors, setErrors] = useState({})
    const [dataIsCorrect, setDataIsCorrect] = useState(false)
    const [messageBox, setMessageBox] = useState("")

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const validateForm = (values) => {
        let err = {}
        if (!values.email) {
            err.email = "Email is required."
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            err.email = "Email is invalid"
        }
        if (!values.password) {
            err.password = "Password is required."
        }
        return err
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setErrors(validateForm(values))
        setDataIsCorrect(true)

        const email = event.target.email.value;
        const password = event.target.password.value;

        let item = { email, password };
        let result = await fetch("https://auctionpointbackend.herokuapp.com/user/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        if(result.error)
        {
            if(result.error === "No user found"){
                /*setErrors({"email":"No email Found."})
                notify("No email Found.")*/
                let result2 = await fetch("https://auctionpointbackend.herokuapp.com/admin/admin_login", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(item)
                });
                result2 = await result2.json();
                if(result2.error)
                {
                    if(result2.error === "No user found"){
                        setErrors({"email":"No user Found."})
                        notify("No email Found.")
                    }else if(result2.error === "Password is incorrect"){
                        setErrors({"password":"Password is incorrect"})
                        notify("Password is incorrect")
                    }
                }
                else{
                    sessionStorage.setItem("user", result._id);
                    //To check if user is admin or not
                    sessionStorage.setItem("email", "Admin");
                    notify("Login successfully.")
                    navigate("/admin")
                }
            }else if(result.error === "Password is incorrect"){
                setErrors({"password":"Password is incorrect"})
                notify("Password is incorrect")
            }else if(result.error  === "Please Verify Your Account Before Logging In." || result ==="Please Verify Your Account Before Logging In."){
                notify("Please Verify Your Account Before Logging In.")
            }else if(result.error  === "Please Verify Your Account Before Logging In."){
                let result2 = await fetch("https://auctionpointbackend.herokuapp.com/admin/admin_login", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(item)
                });
                result2 = await result2.json();
                if(result2.error)
                {
                    if(result2.error === "No user found"){
                        setErrors({"email":"No Admin Found."})
                        notify("No admin email Found.")
                    }else if(result2.error === "Password is incorrect"){
                        setErrors({"password":"Admin Password is incorrect"})
                        notify("Admin Password is incorrect")
                    }
                }
                else{
                    sessionStorage.setItem("user", result._id);
                    //To check if user is admin or not
                    sessionStorage.setItem("email", "Admin");
                    notify("Login successfully.")
                    navigate("/admin")
                }
            }
        }
        else{
            sessionStorage.setItem("user", result._id);
            //To check if user is admin or not
            sessionStorage.setItem("email", item.email);
            // window.location.href = "/";
            notify("Login successfully.")
            // navigate("/home")
            if(location.state){
                navigate(location.state.from.pathname)
            }else{
                navigate("/home")
            }
        }
        //history.push("/");
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            if (!errors.email && !errors.password) {

                let data = {
                    email: values.email,
                    password: values.password,
                }

            }
        }
    }, [errors])



    return (
        <div style={{backgroundColor:"#f2f2f2", minHeight:"100vh"}}>
            <Navigation />
            <div className="container">
                <div className="row justify-content-center mt-4">
                    <div className="col-md-7 col-lg-5 shadow p-3" style={{backgroundColor:"white"}}>
                        <div className="rounded w-100"
                            style={{ backgroundImage: `url(${auctionCover})`, height: "200px", backgroundSize: "140%", backgroundRepeat: "no-repeat" }}>
                        </div>
                        <div className="p-3">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-2 h1">Sign In</h3>
                                </div>
                            </div>
                            {messageBox.length != 0 && <div className="alert alert-danger">{messageBox}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder" htmlFor="username">Email</label>
                                    <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        name="email" value={values.email} onChange={handleChange} />
                                    {errors.email && <div className="alert-danger my-3 p-2">{errors.email}</div>}
                                </div>
                                <div className="form-group my-3 text-start">
                                    <label className="form-control-placeholder" htmlFor="password">Password</label>
                                    <input type="password" name="password" value={values.password} className={`form-control
                                ${errors.password ? "is-invalid" : ""}`} onChange={handleChange} />
                                    {errors.password && <div className="alert-danger my-3 p-2">{errors.password}</div>}
                                </div>
                                <div className="form-group my-3 ">
                                    <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
                                        In</button>
                                </div>
                                <div className="form-group mt-2">
                                    <p className="w-100 text-center">
                                        <Link to="/forgotpassword">Forgot Password</Link>
                                    </p>
                                    <div className="w-100 text-center">
                                        <p>Not a member?
                                            {" "}
                                            <Link data-toggle="tab" to="/register">Sign Up</Link>
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