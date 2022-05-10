import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navigation from "./Navigation";

const BidProduct = () => {

  const params = useParams();
  const [bidProduct, setBidProduct] = useState([]);
  const [seller, setSeller] = useState([]);
  const [bidValue, setBidValue] = useState(0);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (params) {
      let userId;
      async function fetchData() {
        await fetch(`http://localhost:4000/Auction/${params.id}`)
          .then((res) => res.json())
          .then((json) => {
            userId = json.userId;
            setBidProduct(json);
            setBidValue(json.highestBid+1)
          });
        // console.log(bidProduct?.userId);
        await fetch(`http://localhost:4000/user/${userId}`)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setSeller(json.firstName + " " + json.lastName);
          });
      }
      fetchData();
    }
  }, [params]);


  async function handleBid(event) {
    event.preventDefault();
    setFormErrors(await validate(bidValue));
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

  async function validate(value) {
    const errors = {};
    if (value <= bidProduct.highestBid) {
      errors.bidValue = "Bid value must be grater than minimum bid value";
    }

    await fetch(`http://localhost:4000/wallet/6239ff4111bd7ce927abcf57`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if(json.amount < bidValue){
        errors.balance="Insufficent balance!";
      }
    });
    return errors;
  }

  return (
    <div className="container">
      <Navigation />
      {bidProduct && <div className="row gy-5 my-3">
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
                        src={"http://localhost:4000/uploads/" + item}
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
                    "http://localhost:4000/uploads/" +
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
          <h1 className="h1" style={{fontSize:"5rem"}}>{bidProduct.productName}</h1>
          <p className="text-secondary fs-5">{bidProduct.productDescription}</p>
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
              <div className="fw-bold flex-grow-1">Time Left</div>
              <div className="flex-grow-1 text-end">
                {new Date(bidProduct.endDate)
                  .toLocaleString()
                  .substring(0, 10) +
                  " " +
                  bidProduct.endTime}
              </div>
            </li>
          </ul>

          {sessionStorage.getItem("user") != bidProduct.userId &&
            bidProduct.status != "upcoming" && (
              <>
                <br />
                <br />
                <div>
                  <form action="" onSubmit={handleBid}>
                    <div className="row g-3">
                      <div className="col-xs-12 col-md-8">
                        <input
                          type="number"
                          className="w-100 fs-5"
                          name="bidValue"
                          id="bidValue"
                          placeholder="Bid Amount"
                          onChange={handleOnChangeBid}
                          value={bidValue}
                          required="required"
                          onKeyDown={(event) => {
                            (event.keyCode === 69 || event.keyCode === 190) &&
                              event.preventDefault();
                          }}
                        />
                        {Object.keys(formErrors).length !== 0 && (
                          <div className="alert-danger rounded p-3 fs-5 mt-4">
                            {formErrors.bidValue}
                            {formErrors.balance}
                          </div>
                        )}
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <button className="btn btn-primary w-100" type="submit">
                          Bid-now
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
            <div class="card">
  <div class="card-header h4">
    Top Bids
  </div>
  <div class="card-body">
  <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="w-50">Bidder</th>
                    <th>Bid amount</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    // recentBidder.sort((a,b)=>{return b.amount-a.amount}).slice(0,5).map((item,index)=>{
                    //   return <tr key={index}>
                    //     <td>
                    //       {item.name}
                    //     </td>
                    //     <td>
                    //     {item.amount}
                    //     </td>
                    //   </tr>
                    // })
                  }
                </tbody>
              </table>
            </div>
  </div>
</div>
            
          </div>
        </div>
        {console.log(formErrors)}
      </div>}
    </div>
  );
};

export { BidProduct };
