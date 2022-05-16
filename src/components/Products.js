import { React, useState, useEffect } from "react";
import Navigation from "./Navigation";
import "./Products.css";
import "./CountdownTimer";
import Footer from "./Footer";
import { CardGroup } from "./CardGroup";

const Products = ({ notify }) => {
  document.title = "Auctions - AuctionPoint.com"

  const [isLoading, setIsLoading] = useState(true);
  const [myAuctions, setMyAuctions] = useState([]);
  const [upComingAuctions, setUpComingAuctions] = useState([]);
  const [onGoingAuctions, setOngoingAuctions] = useState([]);
  const [endedAuctions, setEndedAuctions] = useState([]);

  function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  useEffect(() => {
    async function fetchData() {
      await fetch("https://auctionpointbackend.herokuapp.com/auction/all")
        .then((res) => res.json())
        .then((json) => {
          if (json === undefined) {
            json = [];
          }
          return json;
        }).then(productsArray=>{
            let MyArr = [];
            let UpComing = [];
            let Ongoing = [];
            let ended = [];
            productsArray.filter((obj) => {
              let userId = sessionStorage.getItem("user");
              if (obj.userId == userId) {
                MyArr.push(obj);
              }
              if (
                getNumberOfDays(
                  obj.startDate,
                  new Date().toISOString().substr(0, 10)
                ) < 0 &&
                obj.userId === userId
              ) {
                UpComing.push(obj);
              } else if (
                getNumberOfDays(
                  obj.endDate,
                  new Date().toISOString().substr(0, 10)
                ) < 0 &&
                obj.userId === userId
              ) {
                Ongoing.push(obj);
              } else if (new Date(obj.endDate) < new Date() && obj.userId === userId && obj.status !=="completed") {
                ended.push(obj);
              }
            });
            setMyAuctions(MyArr);
            setUpComingAuctions(UpComing);
            setOngoingAuctions(Ongoing);
            setEndedAuctions(ended);
            setIsLoading(false)
        });
    }
    fetchData()
  }, []);

  const handleOnDeleteBtnClick = async(product) => {
    if (new Date(product.startDate) < new Date()) {
        alert("You can not delete this.");
    } else {
        setMyAuctions(myAuctions.filter((value) => value._id != product._id));
        await fetch(`https://auctionpointbackend.herokuapp.com/auction/deleteAuction/${product._id}`,{
            method: 'DELETE',
            headers: {
                "Accept": "application/json"
            },
        })
    }
  };

  return (
    <div>
      <Navigation />

      {isLoading ?
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"><div className="spinner-border text-primary"></div></div>
      :
      <div>
        <div className="bg-light p-5 text-center">
            <div>
                <h1 className="text-center my-4">My Auctions</h1>
                {   myAuctions.length ===0
                    ? <p className="text-muted">No products</p>
                    :<CardGroup
                        products={myAuctions}
                        handleOnDeleteBtnClick={handleOnDeleteBtnClick}
                        role="myAuction"
                    />
                }
                <hr className="w-50 d-inline-block"></hr>
            </div>

            <div>
                <h1 className="text-center my-4">Upcoming Auctions</h1>
                {
                    upComingAuctions.length ===0
                    ?<p className="text-muted">No products</p>
                    :<CardGroup products={upComingAuctions} role="upComingAuctions" />
                }
                <hr className="w-50 d-inline-block"></hr>
            </div>

            <div>
                <h1 className="text-center my-4">Ongoing Auctions</h1>
                {
                    onGoingAuctions.length ===0
                    ? <p className="text-muted">No products</p>
                    :<CardGroup products={onGoingAuctions} role="onGoingAuctions" />
                }
                <hr className="w-50 d-inline-block"></hr>
            </div>

            <div>
                <h1 className="text-center my-4">Ended Auctions</h1>
                {
                    endedAuctions.length===0
                    ?<p className="text-muted">No products</p>
                    :<CardGroup products={endedAuctions} notify={notify} role="endedAuctions" />
                }
                <hr className="w-50 d-inline-block"></hr>
            </div>
        </div>
        <Footer />
      </div>
      }
    </div>
  );
};

export default Products;
