import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductCard = () => {
  return (
    <div className='d-flex bg-light overflow-hidden justify-content-center align-items-center flex-column shadow ' style={{ width: '20rem' }}>
        {/* image */}
        <div className="d-flex w-100 justify-content-center align-items-center">
            <img className='img-fluid' src={`https://picsum.photos/500/500?random=${Math.random()*10}`} style={{width:"20rem", height:"15rem", objectFit:"cover"}} />
        </div>
        {/* Title */}
        <div className='d-flex align-items-center text-capitalize w-100 p-3 fw-bold text-break'>
            <span>Sample product name</span>
        </div>
        {/* body */}
        <div className='w-100 p-3 d-flex flex-row justify-content-between align-items-center'>
            {/* time left */}
            <div className="d-flex flex-column">
              <span>Time Left</span>
              <span className='fw-bold'>00: 00: 00: 00</span>
              <span className='text-uppercase text-secondary' style={{fontSize:"0.7em"}}>days hrs min sec</span>
            </div>
            {/* amount */}
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div className='d-flex flex-row fs-4'>
                <span className='fw-bold'>₹</span>
                <span className='ms-2'>5000</span>
              </div>
            </div>
        </div>
        {/* action */}
        <div className="w-100 px-3 my-1 mb-3 d-flex flex-row justify-content-between align-items-center" >
              <span className='btn btn-sm fs-4'>❤️</span>
              <button className='btn btn-primary w-50' data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">Bid Now</button>
        </div>

        {/* Modal */}
        <div
        class="modal fade"
        id="staticBackdrop"
        data-mdb-backdrop="static"
        data-mdb-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProductCard}