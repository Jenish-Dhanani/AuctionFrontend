import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import withdraw from "../../src/images/money-withdrawal.png";
import purse from "../../src/images/purse.png";
import Footer from "./Footer"
const Wallet = ({ notify }) => {

    document.title = "Wallet - AuctionPoint.com"

    const [wallet, setWallet] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const userid = sessionStorage.getItem("user");

    useEffect(async () => {
        await fetch(`https://auctionpointbackend.herokuapp.com/wallet/${userid}`)
            .then((res) => res.json())
            .then((json) => {
                setWallet(json.amount);
                setIsLoading(false);
            });
    }, []);

    const addMoney = async () => {
      //add money
      if (parseInt(document.getElementById("add-amount").value) < 0 || parseInt(document.getElementById("add-amount").value) === 0) {
        notify("Invalid amount");
        return;
      }
      let amount = wallet + parseInt(document.getElementById("add-amount").value);
      let result = await fetch(
        `https://auctionpointbackend.herokuapp.com/wallet/updateWallet/${userid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ amount: amount }),
        }
      );
      result = await result.json();
      // console.log(result);
      setWallet(result.amount)
      document.getElementsByClassName('btn-close')[0].click();
    };

    const withdrawMoney = async () => {
      let amt = parseInt(document.getElementById("withdraw-amount").value);
      if (amt < 0 || amt === 0) {
        notify("Invalid amount");
        return;
      }
      if (amt > wallet) {
        notify("Insufficient Balance.");
      } else {
        let amount = wallet - amt;
        let result = await fetch(
          `https://auctionpointbackend.herokuapp.com/wallet/updateWallet/${userid}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ amount: amount }),
          }
        );
        result = await result.json();
      //   console.log(result);
          setWallet(result.amount)
        document.getElementById('withdraw-close').click();
      }
    };

    return (
        <div>
            <Navigation />
            {isLoading ? (
                <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary"></div>
                </div>
            ) : (
                <div className="container">
                    <div className="card my-5">
                        <h5 className="card-header">Your Wallet</h5>
                        <div className="card-body">
                            <h5
                                className="card-title h1"
                                style={{ fontSize: "5rem" }}
                            >
                                ₹ {wallet}
                            </h5>
                            <p className="card-text">
                                This reflects your current balance of
                                AuctionPoint wallet.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card my-1">
                                <h5 className="card-header">Add Money</h5>
                                <div className="card-body">
                                    <h5
                                        className="card-title h1"
                                        style={{ fontSize: "5rem" }}
                                    >
                                        <img src={purse} alt="" height={100} />
                                    </h5>
                                    <p className="card-text">
                                        Add money to your wallet to start
                                        bidding on items you love.
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#AddMoney"
                                    >
                                        Add Money
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card my-1">
                                <h5 className="card-header">Withdraw Money</h5>
                                <div className="card-body">
                                    <h5
                                        className="card-title h1"
                                        style={{ fontSize: "5rem" }}
                                    >
                                        <img
                                            src={withdraw}
                                            alt=""
                                            height={100}
                                        />
                                    </h5>
                                    <p className="card-text">
                                        Withdraw money from your AuctionPoint
                                        wallet quickly and hassle-free.{" "}
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#WithdrawMoney"
                                    >
                                        Withdraw Money
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm">

            </div> */}
                    </div>
                </div>
            )}

            {/*  */}
            {/* Add money */}
            <div
                className="modal fade"
                id="AddMoney"
                tabIndex="-1"
                aria-labelledby="AddMoneyLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="AddMoneyLabel">
                                Add money to wallet
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-evenly align-items-center my-3">
                                <label htmlFor="add-amount" className="w-50">
                                    Enter Amount :
                                </label>
                                <input
                                    id="add-amount"
                                    type="number"
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={addMoney}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* withdraw */}
            <div
                className="modal fade"
                id="WithdrawMoney"
                tabIndex="-1"
                aria-labelledby="WithdrawMoneyLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="WithdrawMoneyLabel">
                                Add money to wallet
                            </h5>
                            <button
                                id="withdraw-close"
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-evenly align-items-center my-3">
                                <label
                                    htmlFor="withdraw-amount"
                                    className="w-50"
                                >
                                    Enter Amount :
                                </label>
                                <input
                                    id="withdraw-amount"
                                    type="number"
                                    className="form-input"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={withdrawMoney}
                            >
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Wallet;
