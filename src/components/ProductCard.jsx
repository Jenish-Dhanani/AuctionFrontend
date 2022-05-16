import React,{useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product,role, handleOnDeleteBtnClick,notify}) => {
  // console.log(product)
  const userId = sessionStorage.getItem('user')
  const navigate = useNavigate()

  const handleProductClick = (pid)=>{
    // console.log(pid)
    navigate(`/product/${pid}`)
  }

  const handleUpdateBtnClick = (pid)=>{
    if(new Date(product.startDate) < new Date() ){
      alert("You can not update product after auction start.")
    }else
      navigate(`/product/update/${pid}`)
  }


  // let interval = useRef();

  // const [timerDays, setTimerDays] = useState('00');
  // const [timerHours, setTimerHours] = useState('00');
  // const [timerMinutes, setTimerMinutes] = useState('00');
  // const [timerSeconds, setTimerSeconds] = useState('00');

  // const startTimer = () =>{
  //   const coundownDate = new Date(product?.endDate).getTime();

  //   interval = setInterval(()=>{
  //     const now = new Date.getTime();
  //     const distance = coundownDate - now;
  //     console.log(distance)
  //   }, 1000)
  // }

  const ProceedTransaction = async (auction)=>{
    //bidderid //sellerid amount date auction id
    const {_id:auctionId, highestBid:amount, userId:sellerId} = auction;
    // const bid = auction.Bid.bidInfo[auction.Bid.bidInfo.length-1].Amount;
    const bidderId = auction.Bid.bidInfo[auction.Bid.bidInfo.length-1].bidderId;

    let data = {
      bidderId,
      sellerId,
      date:new Date(),
      auctionId,
      amount
    }

    let result = await fetch("https://auctionpointbackend.herokuapp.com/transaction/add_transaction", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    });
    result = await result.json();
    navigate('/feedback');
    notify("Transaction Done.")
    // window.location.reload()
  }

  return (
    <div className='d-flex bg-light overflow-hidden justify-content-center align-items-center flex-column shadow bg-white' style={{ width: '20rem' }}>
        {/* image */}
        {/* {startTimer} */}
        <div className="d-flex w-100 justify-content-center align-items-center">
            {/* <img className='img-fluid' src={`https://picsum.photos/500/500?random=${Math.random()*10}`} style={{width:"20rem", height:"15rem", objectFit:"cover"}} /> */}
            <img className='img-fluid' src={ product?.productImage[0]?"https://auctionpointbackend.herokuapp.com/uploads/"+product?.productImage[0]:`https://picsum.photos/500/500?random=${Math.random()*10}`} style={{width:"20rem", height:"15rem", objectFit:"cover"}} />
        </div>
        {/* Title */}
        <div className='d-flex align-items-center text-capitalize w-100 px-3 h4 fw-bold text-break' style={{height:"80px"}}>
            {/* {product?<span>{product?.productName}</span>:<span>Sample product name</span> } */}
            {product?(product.productName.length > 60? product.productName.substring(0,60)+"..." :product.productName):"Sample product name"}
        </div>
        <div className='d-flex align-items-center text-capitalize w-100 px-3 fw-lighter text-break' style={{height:"80px"}}>
            <span>{product?(product.productDescription.length > 60? product.productDescription.substring(0,60)+"..." :product.productDescription):"Sample product name"}</span>
        </div>
        {/* body */}
        <div className='w-100 p-3 d-flex flex-row justify-content-between align-items-center'>
            {/* time left */}
            <div className="d-flex flex-column">
              <span>End Date</span>
              <span className='fw-bold'>{(product?.endDate.substring(0,10))}</span>
              {/* <span className='text-uppercase text-secondary' style={{fontSize:"0.7em"}}>days hrs min sec</span> */}
            </div>
            {/* amount */}
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div className='d-flex flex-row fs-4'>
                <span className='fw-bold'>₹</span>
                {/* <span className='ms-2'>5000</span> */}
                {product?<span className='ms-2'>{product?.highestBid}</span>:<span className='ms-2'>5000</span>}
              </div>
            </div>
        </div>
        {/* action */}
        {role==="onGoingAuctions" && <div className="w-100 px-3 my-1 mb-3 d-flex flex-row justify-content-between align-items-center" >
              <button className='btn btn-primary w-100' onClick={()=>{handleProductClick(product._id)}}>Bid Now</button>
        </div>}
        {role==="myAuction" && <div className="w-100 px-3 my-1 mb-3 d-flex flex-row justify-content-between align-items-center" >
              <button className='btn btn-danger' onClick={()=>handleOnDeleteBtnClick(product)}>Delete</button>
              <button className='btn btn-primary' onClick={()=>{handleUpdateBtnClick(product._id)}}>Update</button>
              <button className='btn btn-primary' onClick={()=>{handleProductClick(product._id)}}>View</button>
        </div>}
        {(role==="upComingAuctions" || role==="endedAuctions" )&& <div className="w-100 px-3 my-1 mb-3 d-flex flex-column justify-content-center align-items-center" >
              <button className='btn btn-primary w-100' onClick={()=>{handleProductClick(product._id)}}>View</button>
              {new Date(product.endDate) < new Date() && product.userId === userId && <button className='mt-4 btn btn-primary w-100' onClick={()=>ProceedTransaction(product)}>Proceed Transaction</button>}
        </div>}

    </div>
  )
}

export {ProductCard}