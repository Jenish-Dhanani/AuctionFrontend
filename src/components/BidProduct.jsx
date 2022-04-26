import React, { useEffect, useRef, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const BidProduct = (props) => {
  let {product} = props
  console.log(product)
  let bidInput = useRef()

  const [bidValue, setBidValue] = useState(product?.minbid+1)
  const [formErrors, setFormErrors] = useState({})
  // const [isSubmit, setIsSubmit] = useState(false)

  function handleBid(event){
    event.preventDefault()
    if(Object.keys(formErrors).length === 0)
      {
        addrow()
      }
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide:1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 567 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

  const [recentBidder, setRecentBidder] = useState([
    {
      "name":"name1",
      "amount":100
    },
    {
      "name":"name2",
      "amount":200
    }
  ])

  useEffect(()=>{
    setFormErrors(validate(bidValue))
  },[])

  function handleOnChangeBid(event){
    setFormErrors(validate(event.target.value))
    setBidValue(event.target.value)
  }

  function addrow(){
    recentBidder.push({"name":"jenish", "amount": parseInt(bidValue)});
    setRecentBidder([...recentBidder])
    console.log(recentBidder)
  }

  function validate(value){
    const errors={}
    if(value <= product.minbid){
      errors.bidValue = "Bid value must be grater than minimum bid value"
      bidInput.current.focus()
    }
    return errors
  }

  return (
    <div className="row gy-5 my-3">
      <div className="col-xs-12 col-md-6 text-center">

        {product.productImage?.length>0 ?
          <>{product.productImage.length > 1?
            <Carousel
              responsive={responsive}
              sliderClass='align-items-center'
              containerClass='border border-1'
            >
              {product.productImage.map((item,index)=>{
                return <img src={"http://localhost:4000/uploads/"+item} key={index} alt="" className="img-fluid rounded-3" />
              })}
            </Carousel>
            :
            <img src={"http://localhost:4000/uploads/"+product.productImage[0]} alt="" className="img-fluid rounded-3 shadow" />
          }</>:
          <img src="https://picsum.photos/600/500?random=1" alt="" className="img-fluid rounded-3 shadow" />
        }
      </div>
      <div className="col-xs-12 col-md-6">
        <h1 className="fs-1">{product.productName}</h1>
        <p className="text-secondary fs-5">{product.productDescription}</p>
        <br />
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item d-flex flex-row">
            <div className="fw-bold flex-grow-1">Minimum Bid</div>
            <div className="flex-grow-1 text-end">{product.Bid+1}</div>
          </li>
          <li className="list-group-item d-flex flex-row">
            <div className="fw-bold flex-grow-1">Seller</div>
            <div className="flex-grow-1 text-end">{product.userId}</div>
          </li>
          <li className="list-group-item d-flex flex-row">
            <div className="fw-bold flex-grow-1">Time Left</div>
            <div className="flex-grow-1 text-end">{new Date(product.endDate).toLocaleString().substring(0,10) + " " + product.endTime}</div>
          </li>
        </ul>


      {
            sessionStorage.getItem("user") != product.userId &&
            <>
            <br />
            <br />
            <div>
            <form action="" onSubmit={handleBid}>
            <div className="row g-3">
                <div className="col-xs-12 col-md-8">
                  <input
                  type="number"
                  ref={bidInput}
                  className="w-100 fs-5"
                  name=""
                  id=""
                  placeholder='Bid Amount'
                  value={bidValue}
                  onChange={handleOnChangeBid}
                  required="required"
                  onKeyDown={(event)=>{ (event.keyCode === 69 || event.keyCode === 190 ) && event.preventDefault()}} />
                  {Object.keys(formErrors).length !== 0  &&
                    <div className="alert-danger rounded p-3 fs-5 mt-4">{formErrors.bidValue}</div>
                  }
                </div>
                <div className='col-xs-12 col-md-4'>
                  <button className="btn btn-primary w-100" type='submit'>Bid-now</button>
                </div>
            </div>
          </form>
        </div>

          </>
      }

        <hr />
        <div className="mt-4">
          <h1 className="fs-3">Recent Bids</h1>
          <div className="table-responsive mt-3">
          <table className="table table-striped">
              <thead >
                  <tr>
                    <th className='w-50'>Bidder</th>
                    <th>Bid amount</th>
                  </tr>
              </thead>
              <tbody>
                {
                  recentBidder.sort((a,b)=>{return b.amount-a.amount}).slice(0,5).map((item,index)=>{
                    return <tr key={index}>
                      <td>
                        {item.name}
                      </td>
                      <td>
                      {item.amount}
                      </td>
                    </tr>
                  })
                }
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export {BidProduct}

