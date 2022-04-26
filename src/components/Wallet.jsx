import React from 'react'
import Navigation from './Navigation'
const Wallet = () => {
return (
    <div>
        <Navigation />
        <div className='container'>
    <div className="row mt-4">
        <div className="col-12 bg-danger text-center text-light">
            <span className='fs-1 fw-bold'>₹ 15000</span>
        </div>
    </div>
    <div className="row">
        <div className="col-12 bg-secondary text-light p-4 text-center">
            <h1>Transaction History</h1>
            <ul className="list-group">
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </div>
    </div>
    <div className="row">
        <div className="col-12 bg-sucess bg-secondary text-light p-4 d-flex justify-content-evenly">
            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#AddMoney">
                Add Money
            </button>
            <button className="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#WithdrawMoney">
                Withdraw Money
            </button>
        </div>
    </div>

    {/* Add money */}
    <div className="modal fade" id="AddMoney" tabIndex="-1" aria-labelledby="AddMoneyLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="AddMoneyLabel">Add money to wallet</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="amount" className='w-50'>Enter Amount :</label>
                        <input id="amount" type="number" className="form-input" />
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="card-number" className='w-50'>Enter card number :</label>
                            <input id="card-number" type="number" className="idm-input" />
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="cvv" className='w-50'>cvv :</label>
                            <input id="cvv" type="number" className="form-input" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    {/* withdraw */}
    <div className="modal fade" id="WithdrawMoney" tabIndex="-1" aria-labelledby="WithdrawMoneyLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="WithdrawMoneyLabel">Add money to wallet</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                        <label htmlFor="amount" className='w-50'>Enter Amount :</label>
                        <input id="amount" type="number" className="form-input" />
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center my-3'>
                            <label htmlFor="AccountNumber" className='w-50'>Bank Account Number :</label>
                            <input id="AccountNumber" type="number" className="form-input" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</div>
    </div>
)
}

export default Wallet