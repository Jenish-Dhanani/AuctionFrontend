import React from 'react'
import { CardGroup } from './CardGroup'
import { ProductCard } from './ProductCard'

const ItemSlider = () => {
    return (
        <div id="ItemSliderMain" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    {/* <img src={`https://picsum.photos/1000/1000?random=${Math.random()*10}`} className="d-block w-100" alt="..." /> */}
                    <div className="container d-flex justify-content-center align-items-center flex-wrap pt-3 mb-4 gap-5">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
                <div className="carousel-item" >
                    {/* <img src={`https://picsum.photos/1000/1000?random=${Math.random()*10}`} className="d-block w-100" alt="..." /> */}
                    <div className="container d-flex justify-content-center align-items-center flex-wrap pt-3 mb-4 gap-5">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
                <div className="carousel-item" >
                    {/* <img src={`https://picsum.photos/1000/1000?random=${Math.random()*10}`}className="d-block w-100" alt="..." /> */}
                    <div className="container d-flex justify-content-center align-items-center flex-wrap pt-3 mb-4 gap-5">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#ItemSliderMain" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#ItemSliderMain" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export {ItemSlider}