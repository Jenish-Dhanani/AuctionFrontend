import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const [isLoggedIn,setIsLoggedIn] = useState()
  const [pathName,setPathName] = useState()

  useEffect(()=>{
    console.log(location.pathname);
    setPathName(location.pathname)
    setTimeout(()=>{
      if(sessionStorage.getItem("user")){
        setIsLoggedIn(true)
      }
    },0)
  },[])

  const LogOut = ()=>{
    sessionStorage.removeItem("user")
    navigate("/login")
  }

    return (

      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarNav">
            {
              isLoggedIn && pathName!=='/login' && pathName !== '/register'?
                <ul className="navbar-nav ms-auto">
                {/* {(!isLogin || pathname=='/sign-in' || pathname=='/sign-up') &&<> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Auctions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/wallet">
                    Wallet
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/createauction">
                    Create Auction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="btn btn-danger" onClick={LogOut}>
                    Log Out
                  </div>
                </li>
              </ul>
              :
              <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Signup
                </Link>
              </li>
            </ul>

          }
          </div>
        </div>
      </nav>
    </>

    )
}

export default Navigation