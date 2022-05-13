import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import navLogo from "../../src/images/letter-a.png";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const LogOut = () => {
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 px-5 sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={navLogo}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-text-top mx-3"
            />
            AuctionPoint
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
            {sessionStorage.getItem('user') && location.pathname !== "/login" && location.pathname !== "/register" ? (
              <ul className="navbar-nav ms-auto">
                {/* {(!isLogin || pathname=='/sign-in' || pathname=='/sign-up') &&<> */}
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/home">
                    Auctions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/wallet">
                    Wallet
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/createauction">
                    Create Auction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="btn btn-primary px-3" onClick={LogOut}>
                    Log Out
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link px-4" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-4" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-4" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light px-5" to="/login">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary px-5 mx-3" to="/register">
                    Sign Up
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
