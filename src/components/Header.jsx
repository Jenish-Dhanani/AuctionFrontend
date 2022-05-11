import React from 'react'
import home2 from '../images/home2.jpg';
import home4 from '../images/home4.png';
import home5 from '../images/home5.png';

const Header = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" style={{maxHeight:"50vh"}}>
                <div className="carousel-item active" style={{maxHeight:"50vh"}}>
                    <img src={home2} className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item" style={{maxHeight:"50vh"}}>
                    <img src={home4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" style={{maxHeight:"50vh"}}>
                    <img src={home5} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Header