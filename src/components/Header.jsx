import React from 'react'

const Header = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" style={{maxHeight:"50vh"}}>
                <div className="carousel-item active" style={{maxHeight:"50vh"}}>
                    <img src={`https://picsum.photos/1000/450?random=${Math.random()*10}`} className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item" style={{maxHeight:"50vh"}}>
                    <img src={`https://picsum.photos/1000/450?random=${Math.random()*10}`} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" style={{maxHeight:"50vh"}}>
                    <img src={`https://picsum.photos/1000/450?random=${Math.random()*10}`}className="d-block w-100" alt="..." />
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