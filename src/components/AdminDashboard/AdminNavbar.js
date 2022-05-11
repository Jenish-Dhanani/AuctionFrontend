import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const AdminNavbar = () => {

    const navigate = useNavigate()

    const LogOut = ()=>{
        sessionStorage.removeItem("user")
        navigate("/login")
      }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Admin Dashboard
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
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/dropUser">
                    Fraud Detection
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dropUser">
                    Drop User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dropProduct">
                    Drop Auction
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="btn btn-danger" onClick={LogOut}>
                    Log Out
                  </div>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default AdminNavbar