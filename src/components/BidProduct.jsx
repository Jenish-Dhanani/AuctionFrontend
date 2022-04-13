import React, { useEffect, useRef, useState } from 'react'



const BidProduct = (props) => {
  let {data} = props
  let bidInput = useRef()

  const [bidValue, setBidValue] = useState(data.minbid+1)
  const [formErrors, setFormErrors] = useState({})
  // const [isSubmit, setIsSubmit] = useState(false)

  function handleBid(event){
    event.preventDefault()
    if(Object.keys(formErrors).length === 0)
      {
        addrow()
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
    if(value <= data.minbid){
      errors.bidValue = "Bid value must be grater than minimum bid value"
      bidInput.current.focus()
    }
    return errors
  }

  return (
    <div className="row gy-5 my-3">
      <div className="col-xs-12 col-md-6 text-center">
        <img src="https://picsum.photos/600/500?random=1" alt="" className="img-fluid rounded-3 shadow" />
      </div>
      <div className="col-xs-12 col-md-6">
        <h1 className="fs-1">{data.productName}</h1>
        <p className="text-secondary fs-5">{data.productDescription}</p>
        <br />
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item d-flex flex-row">
            <div className="fw-bold flex-grow-1">Minimum Bid</div>
            <div className="flex-grow-1 text-end">{data.minbid+1}</div>
          </li>
          <li className="list-group-item d-flex flex-row">
            <div className="fw-bold flex-grow-1">Seller</div>
            <div className="flex-grow-1 text-end">{data.seller}</div>
          </li>
          <li className="list-group-item d-flex flex-row">
            <div className="fw-bold flex-grow-1">Time Left</div>
            <div className="flex-grow-1 text-end">{new Date().toLocaleString()}</div>
          </li>
        </ul>
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

