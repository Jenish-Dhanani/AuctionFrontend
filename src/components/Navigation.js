import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';

const Navigation = () => {
    return (

        <>
            {/* <Navbar bg="dark" variant="dark" expand="lg" style={{height:"100px"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Auction</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/createauction">Create Auction</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/wallet">wallet</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ms-auto" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {/* {(!isLogin || pathname=='/sign-in' || pathname=='/sign-up') &&<> */}
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">Signup</Link>
            </li>
            {/* </> */}
          {/* } */}
          {/* {(isLogin && pathname!=='/sign-in' && pathname!=='/sign-up') &&(<li className="nav-item">
            <Link className="nav-link" to="/sign-up" onClick={()=>handleLogout()}>Logout</Link>
          </li>)} */}
        </ul>
      </div>
    </div>
    </nav>
        </>

    )
}

export default Navigation