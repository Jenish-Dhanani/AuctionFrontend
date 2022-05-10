import React from 'react';
import './Aboutus.css';
import Navigation from '../Navigation';
import Footer from '../Footer';


const Aboutus = () => {

    return (
        <div>
            <Navigation />
            <div className="text-center bg-primary p-5 text-white">
                <h1>About Us</h1>
            </div>
            {/* Container (About Section) */}
            <div id="about" className="container-fluid bg-light py-5">
                <div className="row px-5">
                    <div className="col-sm-8">
                        <h2>About Online Auction</h2><br />
                        <h4>An online auction also known as electronic auction or e-auction or eAuction is an auction
                            which is held over the internet.Like auctions in general,
                            online auctions come in a variety of types like ascending English auctions, descending
                            Dutch auctions, first-price sealed-bid, Vickrey auctions and others,
                            which are sometimes not mutually exclusive.</h4><br />
                        <p>Online auctions have greatly increased the variety of goods and services that
                            can be bought and sold using auction mechanisms along with expanding the
                            possibilities for the ways auctions can be conducted and in general created
                            new uses for auctions. In the current web environment there are hundreds,
                            if not thousands, of websites dedicated to online auction practices.</p>
                        <br />
                    </div>
                    <div className="col-sm-4 display-flex justify-content-center">
                        <img src="https://qph.cf2.quoracdn.net/main-qimg-3e1b1533e444c415486fe706f28f5180" className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-grey py-5">
                <div className="row px-5">
                    <div className="col-sm-4 d-flex flex-column justify-content-center">

                        <img src="https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?w=2000" className='img-fluid' />
                    </div>
                    <div className="col-sm-8">
                        <h2>About-Company</h2><br />
                        <p><strong>
                            About OnlineAuction.com
                            Welcome to AuctionManagement.com, one of the best online auction shopping venues on the Net!
                            This website is owned and
                            operated by AuctionManagement Corporation, an Indian enterprise founded by a group of seasoned
                            investors; successful business
                            persons from west region of India. We are specializing in import-export of bulk electronics
                            products, e-commerce,
                            entertainment shopping and premium brands distribution. We are operating from Ahmedabad (India).
                            Since then we are proudly India's No-1 Online Auctioneer with 20k+ Registered Members
                            We are also operating india's first online TV Shop TVDEAL.
                            IN You can buy Electronics , Artifactes at ever lowest prices in india.
                            OnlineAuction has introduced a completely new and funny way of online shopping.
                            Why spending a fortune for a brand new product if you can get it with a huge discount?
                            We give you the chance to get the products you dream about at amazing prices!
                            AuctionManagement.com is a new exciting auction website where you can win branded factory sealed
                            new products at
                            huge discounts up to 77% off. Look at our homepage to see what products are up for auction right
                            now,
                            and if something seems interesting, why not bid for it! Bidderboy gives an opportunity to those
                            people
                            who can't afford to purchase costly branded products, they can try our risk free auctions to win
                            their
                            desired products like Cars, Bikes, Smartphones, Laptop, Tablets &amp; branded watches.
                            If you don’t win an auction, you will never have to walk away empty handed from OnlineAuction
                            because you can buy the product for a discount price using the Buy Now option. You'll never have
                            to pay more than the Value Price (MRP) for any products on Bidderboy
                            We will do our very best to provide you with great merchandise at the best possible price.
                            We think you will find that mixing online auction competition into the "joy of shopping" makes
                            it all even more fun at bidderboy.
                        </strong></p>
                    </div>
                </div>
            </div>
            {/* Container (Services Section) */}
            <div id="services" className="container-fluid text-center bg-light py-5">
                <h2>SERVICES</h2>
                <h4 className='fs-6'>What we offer</h4>
                <br />
                <div className="row">
                    <div className="col-sm-4 bg-dark text-white p-5">
                        <span className="glyphicon glyphicon-off logo-small" />
                        <h4>Buy Products</h4>
                        <p>A Buyer can buy the product at 24*7 depending on the availability of the product</p>
                    </div>
                    <div className="col-sm-4 bg-secondary text-white p-5">
                        <span className="glyphicon glyphicon-heart logo-small" />
                        <h4>Sell Products</h4>
                        <p>Any client can become a seller and sell his/her products</p>
                    </div>
                    <div className="col-sm-4 bg-dark text-white p-5">
                        <span className="glyphicon glyphicon-lock logo-small" />
                        <h4>Many More ...</h4>
                        <p></p>
                    </div>
                    
                </div>
                <br /><br />
            </div>
            <br></br>
            <div className="bg-dark text-white p-5">

                <h3><b> Our Values :</b></h3>
                <ul>
                    <li>Our main goal is giving An ethical bidding environment for our customers</li>
                    <li>Accurate product and pricing information</li>
                    <li>Quick responses to customer inquiries and problems</li>
                    <li>Constant innovation and development of new features</li>
                    <li>Long-term relationship with our suppliers and partners</li>
                    <li>Dignity and respect among all the members of our team</li>
                 
                </ul>


            </div>

            <Footer />

        </div>
    );
}


export default Aboutus