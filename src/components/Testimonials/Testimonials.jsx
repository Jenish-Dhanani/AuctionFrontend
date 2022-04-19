const Testimonials= ()=> {

    return (
    <>
        <div className="bg-light p-5">
        <h1 className="h-1 text-center mb-4"> Testimonials </h1>
        <div id="Testimonial" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container d-flex flex-column text-white justify-content-center align-items-center py-4 gap-3 text-center">
                    <img src={'https://picsum.photos/200/200?random='+Math.random()*10} style={{"width":"140px"}} className="rounded-3" />
                        <h3>Shail Parekh</h3>
                        <p>
                        A nice and genuine platform where one can logically play against others to win
                        the auction. I don't think luck has a major role here.
                        I will definitely recommend everyone checkout OnlineAuction and to have the spirit of
                        bidding.
                        </p>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container d-flex flex-column text-white justify-content-center align-items-center py-4 gap-3 text-center">
                        <img src={'https://picsum.photos/200/200?random='+Math.random()*10} style={{"width":"140px"}} className="rounded-3" />

                            <h3>Jenish Dhanani</h3>
                            <p>
                            OnlineAuction is a really unique platform to fulfill your dream. You can get what u want.
                            With simple effort in less price.
                            My strategy was just bided unique amount at the last moment so that no one can defeat u.
                            </p>

                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container d-flex flex-column text-white justify-content-center align-items-center py-4 gap-3 text-center">
                    <img src={'https://picsum.photos/200/200?random='+Math.random()*10} style={{"width":"140px"}} className="rounded-3" />
                        <h3>Urja Gandhi</h3>
                        <p>
                        The best auction website I have never seen before
                        Just buy bids bid wisely maximum at last few minutes.
                        </p>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container d-flex flex-column text-white justify-content-center align-items-center py-4 gap-3 text-center">
                    <img src={'https://picsum.photos/200/200?random='+Math.random()*10} style={{"width":"140px"}} className="rounded-3" />
                        <h3>Richa Parikh</h3>
                        <p>
                        I played first time and won by luckly. Now I got it how it work. So simple and easy website.
                        </p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#Testimonial" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#Testimonial" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </>
    );
}

export default Testimonials