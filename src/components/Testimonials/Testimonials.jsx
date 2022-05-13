import peril from "../../images/peril.jpeg"
import jenish from '../../images/jenish.jpeg'
import shail from '../../images/shail.jpeg'

const Testimonials= ()=> {

    return (
    <>
        <section>
  <div className="row d-flex justify-content-center">
    <div className="col-md-10 col-xl-8 text-center">
      <h3 className="mb-4 h1">Testimonials</h3>
    </div>
  </div>

  <div className="row text-center">
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={peril}
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3">Peril Talaviya</h5>
      <h6 className="text-primary mb-3">Web Developer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>An online auction also known as electronic auction or e-auction or eAuction is an auction which is held over the internet.
      </p>

    </div>
    <div className="col-md-4 mb-5 mb-md-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={jenish}
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3">Jenish Dhanani</h5>
      <h6 className="text-primary mb-3">Web Designer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i>Auctionpoint has introduced a completely new and best way of online auction.
      </p>

    </div>
    <div className="col-md-4 mb-0">
      <div className="d-flex justify-content-center mb-4">
        <img src={shail}
          className="rounded-circle shadow-1-strong" width="150" height="150" />
      </div>
      <h5 className="mb-3">Shail Parekh</h5>
      <h6 className="text-primary mb-3">Web Designer</h6>
      <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2"></i> Auctionpoint.com is a new exciting auction website where you can win branded factory sealed new products.
      </p>

    </div>
  </div>
</section>
    </>
    );
}

export default Testimonials