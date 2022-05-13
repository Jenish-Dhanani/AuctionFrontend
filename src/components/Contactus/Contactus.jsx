import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import './Contactus.css'

const Contact = () => {
    document.title = "ContactUs - AuctionPoint.com"

    return (
        <>
        <Navigation/>
        <div>
            <section className="heading">
                <h3>Contact us</h3>
                <p>Contact</p>
            </section>
            <section className="contact">
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-phone" />
                        <h3>Our number</h3>
                        <p>+123-456-7890</p>
                        <p>+111-222-3333</p>
                    </div>
                    <div className="icons">
                        <i className="fas fa-envelope" />
                        <h3>Our email</h3>
                        <p>onlineauction12@gmail.com</p>

                    </div>
                    <div className="icons">
                        <i className="fas fa-map-marker-alt" />
                        <h3>Our address</h3>
                        <p>Gandhinagar, india - 400104</p>
                    </div>
                </div>
                <div className="row">
                    <form action="https://formspree.io/f/xeqnvapo" method="POST" className='col-lg-6 col-md-12'>
                        <h3>Get in touch</h3>
                        <input type="email" name="email" placeholder="your email" className="box" required={true} />
                        <textarea name="message" placeholder="your message" cols={30} rows={10} defaultValue={""} required={true} />
                        <input type="submit" defaultValue="send message" className="btn btn-primary" />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
        </>
    )

}

export default Contact