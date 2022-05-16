import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navigation from "./Navigation";
import Footer from "./Footer"

const BidProduct = ({ notify }) => {
  const params = useParams();
  const [bidProduct, setBidProduct] = useState([]);
  const [seller, setSeller] = useState([]);
  const [user, setUser] = useState({});
  const [bidValue, setBidValue] = useState(0);
  const [balance, setBalance] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const uid = sessionStorage.getItem("user");

  useEffect(() => {
    if (params) {
      let userId;
      async function fetchData() {
        await fetch(`https://auctionpointbackend.herokuapp.com/Auction/getBid/${params.id}`)
          .then((res) => res.json())
          .then((json) => {
            userId = json.userId;
            setBidProduct(json);
            // if( bidValue < json.highestBid ){
            //   setBidValue(json.highestBid + 1)
            // }
          });
        // console.log(bidProduct?.userId);
        await fetch(`https://auctionpointbackend.herokuapp.com/user/${userId}`)
          .then((res) => res.json())
          .then((json) => {
            setSeller(json.firstName + " " + json.lastName);
          });

        await fetch(`https://auctionpointbackend.herokuapp.com/user/${uid}`)
          .then((res) => res.json())
          .then((json) => {
            setUser(json);
          });

        await fetch(`https://auctionpointbackend.herokuapp.com/wallet/${uid}`)
          .then((res) => res.json())
          .then((json) => {
            setBalance(json.amount);
          });
        setIsLoading(false);
      }
      setInterval(()=>{
        fetchData();
      },3000)
    }

      document.title =  bidProduct.productName || "Auction - AuctionPoint"

  }, [params]);

  async function handleBid(event) {
    event.preventDefault();
    let errs = validate(bidValue);
    setFormErrors(errs);

    if (Object.keys(errs).length === 0) {
      ///bidProduct/:id
      let result = await fetch(
        `https://auctionpointbackend.herokuapp.com/auction/bidProduct/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: user.firstName + " " + user.lastName,
            bidderId: user._id,
            amount: bidValue,
          }),
        }
      );
      result = await result.json();
      setBidProduct(result);
    }
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 567 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // useEffect(async ()=>{
  //   setBidValue(bidProduct.highestBid+1)
  //   setFormErrors(validate(bidValue))
  // },[])

  function handleOnChangeBid(event) {
    setBidValue(event.target.value);
  }

  function validate(value) {
    const errors = {};

    if (balance < value) {
      errors.balance = "Insufficent balance!";
      notify("Insufficent balance! Please add some balance to wallet");
    }
    else if(bidProduct.Bid.bidInfo[0] &&bidProduct?.Bid?.bidInfo[0]?.bidderId === uid){
      errors.bidValue = "You already own the highest bid."
      notify("You already own the highest bid.")
    }
    else if (value <= bidProduct.highestBid) {
      errors.bidValue = "Bid value must be greater than minimum bid value";
      notify("Bid value must be grater than minimum bid value");
    }
    return errors;
  }

  return (

    <div>
      <Navigation />
      {isLoading?
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary"></div>
      </div>
      :<div className="container">
        {bidProduct && (
          <div className="row gy-5 my-3">
            <div className="col-xs-12 col-md-6 text-center">
              {bidProduct.productImage?.length > 0 ? (
                <>
                  {bidProduct.productImage.length > 1 ? (
                    <Carousel
                      responsive={responsive}
                      sliderClass="align-items-center"
                      containerClass="border border-1"
                    >
                      {bidProduct.productImage.map((item, index) => {
                        return (
                          <img
                            src={"https://auctionpointbackend.herokuapp.com/uploads/" + item}
                            key={index}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        );
                      })}
                    </Carousel>
                  ) : (
                    <img
                      src={
                        "https://auctionpointbackend.herokuapp.com/uploads/" +
                        bidProduct.productImage[0]
                      }
                      alt=""
                      className="img-fluid rounded-3 shadow"
                    />
                  )}
                </>
              ) : (
                <img
                  src="https://picsum.photos/600/500?random=1"
                  alt=""
                  className="img-fluid rounded-3 shadow"
                />
              )}
            </div>
            <div className="col-xs-12 col-md-6">
              <h1 className="h1" style={{ fontSize: "4rem" }}>
                {bidProduct.productName}
              </h1>
              <p className="text-secondary fs-5">
                {bidProduct.productDescription}
              </p>
              <br />
              <ul className="list-group list-group-flush fs-5">
                <li className="list-group-item d-flex flex-row">
                  <div className="fw-bold flex-grow-1">Minimum Bid</div>
                  <div className="flex-grow-1 text-end">
                    {bidProduct.highestBid}
                  </div>
                </li>
                <li className="list-group-item d-flex flex-row">
                  <div className="fw-bold flex-grow-1">Seller</div>
                  <div className="flex-grow-1 text-end">{seller}</div>
                </li>
                <li className="list-group-item d-flex flex-row">
                  <div className="fw-bold flex-grow-1">Start Date</div>
                  <div className="flex-grow-1 text-end">
                    {new Date(bidProduct.startDate)
                      .toLocaleString()
                      .substring(0, 10)}
                  </div>
                </li>
                <li className="list-group-item d-flex flex-row">
                  <div className="fw-bold flex-grow-1">End Date</div>
                  <div className="flex-grow-1 text-end">
                    {new Date(bidProduct.endDate)
                      .toLocaleString()
                      .substring(0, 10)}
                  </div>
                </li>
              </ul>
              {sessionStorage.getItem("user") != bidProduct.userId &&
                // bidProduct.status != "upcoming" && (
                // bidProduct.startDate <= new Date &&
                new Date(bidProduct.startDate) <= new Date() && new Date(bidProduct.endDate) >= new Date() &&
                 (
                  <>
                    <br />
                    <br />
                    <div>
                      <form action="" onSubmit={handleBid}>
                        <div className="row g-3">
                          <div className="col-xs-12 col-md-12">
                            <div className="input-group mb-3">
                              <span className="input-group-text" id="basic-addon1">
                                ₹
                              </span>
                              <input
                                type="number"
                                className="form-control"
                                name="bidValue"
                                id="bidValue"
                                placeholder="Bid Amount"
                                onChange={handleOnChangeBid}
                                value={bidValue}
                                required="required"
                                onKeyDown={(event) => {
                                  (event.keyCode === 69 ||
                                    event.keyCode === 190) &&
                                    event.preventDefault();
                                }}
                              />
                            </div>

                            {Object.keys(formErrors).length !== 0 && (
                              <div className="alert-danger rounded p-3 fs-5 mt-4">
                                {formErrors.bidValue}
                                {formErrors.balance}
                              </div>
                            )}
                          </div>
                          <div className="col-xs-12 col-md-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Bid Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              <hr />
              <div className="mt-4">
                {/* <h1 className="fs-3">Recent Bids</h1> */}
                <div className="card">
                  <div className="card-header h4">Top Bids</div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className="w-50">Bidder</th>
                            <th>Bid amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {bidProduct.Bid &&
                            bidProduct.Bid.bidInfo
                              .sort((a, b) => {
                                return b.Amount - a.Amount;
                              })
                              .slice(0, 5)
                              .map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{item.Bidder}</td>
                                    <td>{item.Amount}</td>
                                  </tr>
                                );
                              })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>}
      <Footer/>
    </div>
  );
};

export { BidProduct };
