import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  console.log(product)
  const navigate = useNavigate()

  const handleProductClick = (pid)=>{
    console.log(pid)
    navigate(`/product/${pid}`)
  }

  return (
    <div className='d-flex bg-light overflow-hidden justify-content-center align-items-center flex-column shadow ' style={{ width: '20rem' }}>
        {/* image */}
        <div className="d-flex w-100 justify-content-center align-items-center">
            <img className='img-fluid' src={`https://picsum.photos/500/500?random=${Math.random()*10}`} style={{width:"20rem", height:"15rem", objectFit:"cover"}} />
        </div>
        {/* Title */}
        <div className='d-flex align-items-center text-capitalize w-100 p-3 fw-bold text-break' style={{height:"80px"}}>
            {/* {product?<span>{product?.productName}</span>:<span>Sample product name</span> } */}
            {product?(product.productName.length > 60? product.productName.substring(0,60)+"..." :product.productName):"Sample product name"}

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
                {/* <span className='ms-2'>5000</span> */}
                {product?<span className='ms-2'>{product?.productBasePrice}</span>:<span className='ms-2'>5000</span>}
              </div>
            </div>
        </div>
        {/* action */}
        <div className="w-100 px-3 my-1 mb-3 d-flex flex-row justify-content-between align-items-center" >
              <span className='btn btn-sm fs-4'>❤️</span>
              <button className='btn btn-primary w-50' onClick={()=>{handleProductClick(product._id)}}>Bid Now</button>
        </div>

    </div>
  )
}

export {ProductCard}