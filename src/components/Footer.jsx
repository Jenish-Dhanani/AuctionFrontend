import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

        </section>
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                      {"Secure & Safe Online Bidding With Fun Shopping"}
                </h6>
                <p>

                {`An online auction also known as electronic auction or e-auction or eAuction is an auction
                            which is held over the internet.Like auctions in general,
                            online auctions come in a variety of types like ascending English auctions, descending
                            Dutch auctions, first-price sealed-bid, Vickrey auctions and others,
                            which are sometimes not mutually exclusive.`}
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

                <h6 className="text-uppercase fw-bold mb-4">
                  Services
                </h6>

                <p>
                  <Link className="text-reset" to="/register">Register</Link>
                </p>
                <p>
                  <Link className="text-reset" to="/login">Login</Link>
                </p>
                <p>
                  <Link className="text-reset" to="/createauction">Submit a Bid</Link>
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
          <Link className="text-reset fw-bold" to="/">AuctionPoint.com</Link>
        </div>
      </footer>





    </div>
  )
}

export default Footer