import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a className="me-4 text-reset" href="https://www.facebook.com/">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="me-4 text-reset" href="https://twitter.com/">
              <i className="fab fa-twitter" />
            </a>
            <a className="me-4 text-reset" href="https://www.google.com/">
              <i className="fab fa-google" />
            </a>
            <a className="me-4 text-reset" href="https://www.instagram.com/">
              <i className="fab fa-instagram" />
            </a>
            <a className="me-4 text-reset" href="https://www.linkedin.com/">
              <i className="fab fa-linkedin" />
            </a>
            <a className="me-4 text-reset" href="https://github.com/">
              <i className="fab fa-github" />
            </a>
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
                  <a className="text-reset" href="./Feedback">FeedBack</a>
                </p>
                <p>
                  <a className="text-reset" href="./Contactus">Contact Us</a>
                </p>
                <p>
                  <a className="text-reset" href="./Aboutus">About Us</a>
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
          <a className="text-reset fw-bold">OnlineAuction.com</a>
        </div>
      </footer>





    </div>
  )
}

export default Footer