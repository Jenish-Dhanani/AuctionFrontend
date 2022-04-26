import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { BidProduct } from "./BidProduct"
import Navigation from "./Navigation"

function BidPage(){
    const params = useParams()
    const [bidProduct,setBidProduct] = useState([])
    console.log(params)

    useEffect(()=>{
        if(params){
            async function fetchData(){
                await fetch(
                  `http://localhost:4000/Auction/${params.id}`)
                  .then((res) => res.json())
                    .then((json) => {
                    setBidProduct(json)
                })
            }
            fetchData()
        }
    },[params])

    return <div>
        <Navigation/>
        <div className="container"><BidProduct product={bidProduct}  /></div>
    </div>
}

export {BidPage}