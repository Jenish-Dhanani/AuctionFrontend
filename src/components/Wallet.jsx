
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import coupon from '../../src/images/coupon.png'
import withdraw from '../../src/images/money-withdrawal.png'
import purse from '../../src/images/purse.png'
const Wallet = () => {


  useEffect(async () => {
    await fetch(`http://localhost:4000/wallet/${userid}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setWallet(json.amount);
      });
  }, []);

  const addMoney = async () => {
    //add money
    if (parseInt(document.getElementById("add-amount").value) < 0) {
      notify("Invalid amount");
    }
    let amount = wallet + parseInt(document.getElementById("add-amount").value);
    let result = await fetch(
      `http://localhost:4000/wallet/updateWallet/${userid}`,
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
    if (amt > wallet) {
      notify("Insufficient Balance.");
    } else {
      let amount = wallet - amt;
      let result = await fetch(
        `http://localhost:4000/wallet/updateWallet/${userid}`,
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
        <div className='container'>
        <div class="card my-5">
            <h5 class="card-header">Your Wallet</h5>
            <div class="card-body">
                <h5 class="card-title h1" style={{fontSize:"5rem"}}>₹5,250</h5>
                <p class="card-text">This reflects your current balance of AuctionPoint wallet.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                    <div class="card my-1">
                    <h5 class="card-header">Add Money</h5>
                    <div class="card-body">
                        <h5 class="card-title h1" style={{fontSize:"5rem"}}>
                        <img src={purse} alt="" height={100} />
                        </h5>
                        <p class="card-text">Add money to your wallet to start bidding on items you love.</p>
                        <a href="#" class="btn btn-primary">Add Money</a>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                    <div class="card my-1">
                    <h5 class="card-header">Withdraw Money</h5>
                    <div class="card-body">
                        <h5 class="card-title h1" style={{fontSize:"5rem"}}>
                        <img src={withdraw} alt="" height={100} />
                        </h5>
                        <p class="card-text">Withdraw money from your AuctionPoint wallet quickly and hassle-free. </p>
                        <a href="#" class="btn btn-primary">Withdraw Money</a>
                    </div>
                </div>
            </div>
            {/* <div className="col-sm">
                    
            </div> */}
        </div>
    <div className="row mt-4">
        <div className="col-12 bg-danger text-center text-light">
            <span className='fs-1 fw-bold'>₹ {wallet}</span>

        </div>
        <div className="row">
          <div className="col-12 bg-sucess bg-secondary text-light p-4 d-flex justify-content-evenly">
            <button
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#AddMoney"
            >
              Add Money
            </button>
            <button
              className="btn btn-warning"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#WithdrawMoney"
            >
              Withdraw Money
            </button>
          </div>
        </div>

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
                  <input id="add-amount" type="number" className="form-input" />
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
                  <label htmlFor="withdraw-amount" className="w-50">
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
      </div>
    </div>
  );
};

export default Wallet;
