import React from 'react';
import Navigation from '../Navigation';
import './Contactus.css'

const Contact = () => {

    return (
        <>
        <Navigation/>
        <div>
            <section className="heading">
                <h3>contact us</h3>
                <p>contact </p>
            </section>
            <section className="contact">
                <div className="icons-container">
                    <div className="icons">
                        <i className="fas fa-phone" />
                        <h3>our number</h3>
                        <p>+123-456-7890</p>
                        <p>+111-222-3333</p>
                    </div>
                    <div className="icons">
                        <i className="fas fa-envelope" />
                        <h3>our email</h3>
                        <p>onlineauction12@gmail.com</p>

                    </div>
                    <div className="icons">
                        <i className="fas fa-map-marker-alt" />
                        <h3>our address</h3>
                        <p>Gandhinagar, india - 400104</p>
                    </div>
                </div>
                <div className="row">
                    <form action className='col-lg-6 col-md-12'>
                        <h3>get in touch</h3>
                        <input type="text" placeholder="your name" className="box" required="true" />
                        <input type="number" placeholder="your number" className="box" required="true" />
                        <input type="email" placeholder="your email" className="box" required="true" />
                        <textarea name placeholder="your message" id cols={30} rows={10} defaultValue={""} required="true" />
                        <input type="submit" defaultValue="send message" className="btn btn-primary" />
                    </form>
                    <iframe className="map col-lg-6 col-md-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.89592087332!2d72.8319697277345!3d19.14167056419224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1635757298406!5m2!1sen!2sin" allowFullScreen loading="lazy" />
                </div>
            </section>
        </div>
        </>
    )

}

export default Contact

