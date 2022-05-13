import React from 'react'
import headerImage from '../../src/images/creditcard1.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-10 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={headerImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"  />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Your one stop for selling and bidding on products you love.</h1>
          <p className="lead">AuctionPoint allows you to quickly and hassle free search and bid on products you like, be it vintage collectibles or a jersey signed by your favourite cricket player.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="#on-going-section" className='text-white'><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">View Auctions</button></a>
            <Link to="/register"><button type="button" className="btn btn-outline-secondary btn-lg px-4">  Register Now </button></Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Header