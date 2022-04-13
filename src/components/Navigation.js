import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';

const Navigation = () => {
return (

<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#"> Auction </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/*<a className="nav-link active" aria-current="page" href="#">Home</a>*/}
            <Link className='nav-link active' to="/"> Home </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/aboutus"> About us </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/createauction"> Create Auction </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/login"> Login </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/register"> Registration </Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link active' to="/wallet"> Wallet </Link>
          </li>
        </ul>
        <form className="d-flex input-group w-auto">
          <input type="search" className="form-control" placeholder="Enter category" aria-label="Search" />
          <button className="btn btn-light btn-outline-dark" type="button" data-mdb-ripple-color="dark">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</>

)
}

export default Navigation