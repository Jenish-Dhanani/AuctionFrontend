import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <Link className="me-4 text-reset" to="https://www.facebook.com/">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="me-4 text-reset" to="https://twitter.com/">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="me-4 text-reset" to="https://www.google.com/">
              <i className="fab fa-google" />
            </Link>
            <Link className="me-4 text-reset" to="https://www.instagram.com/">
              <i className="fab fa-instagram" />
            </Link>
            <Link className="me-4 text-reset" to="https://www.linkedin.com/">
              <i className="fab fa-linkedin" />
            </Link>
            <Link className="me-4 text-reset" to="https://github.com/">
              <i className="fab fa-github" />
            </Link>
          </div>
        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                      {"Secure & Safe Online Bidding With Fun Shopping"}
                </h6>
                <p>

                {`OnlineAuction.com is secured by 256 bit SSL encryption,
                has earned the McAfee SECURE certification. Your privacy is highly protected.
                We process payments using RBI approved payment gateway - CCAvenue & PayPal -
                a trusted international payment gateway.`}
                </p>
              </div>
               
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
        
                <p>
                  <Link className="text-reset" to="/Feedback">FeedBack</Link>
                </p>
                <p>
                  <Link className="text-reset" to="/Contactus">Contact Us</Link>
                </p>
                <p>
                  <Link className="text-reset" to="/Aboutus">About Us</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                </h6>
                <p><i className="fas fa-home me-3" />INDIA, IN</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  onlineauction12@gmail.com
                </p>
                <p><i className="fas fa-phone me-3" /> +91 999 888 7777</p>
                <p><i className="fas fa-print me-3" /> +91 955 555 6666</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 25, 0.05)'}}>
          © 2021 Copyright:
          <Link className="text-reset fw-bold" to="/">OnlineAuction.com</Link>
        </div>
      </footer>





    </div>
  )
}

export default Footer