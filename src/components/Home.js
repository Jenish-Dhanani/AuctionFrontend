import React,{useState, useEffect} from 'react';
import Navigation from './Navigation';
import { CardGroup } from "./CardGroup";
import { ItemSlider } from "./ItemSlider";
import Wallet from "./Wallet";
import Header from "./Header";
import Footer from "./Footer"
import Testimonials from './Testimonials/Testimonials';



const Home = () => {

  const [cardGroups, setCardGroups] = useState([])
  // console.log("cardGroup",cardGroups)

  useEffect(() => {
    async function fetchData(){
      await fetch(
        "http://localhost:4000/auction/all")
        .then((res) => res.json())
        .then((json) => {
          setCardGroups(json)
        })
    }
    fetchData()
  }, [])

  return (
    <div>
      <Navigation />
      <Header/>
      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
     
      <h1 className="text-center my-4">
        On Going Auctions
      </h1>
      <ItemSlider products={cardGroups} role="onGoingAuctions"/>
      {/* <CardGroup  /> */}
      
      {/* <h1 className="text-center mt-4">
        Current Auctions
      </h1>
      <CardGroup products={cardGroups} role="onGoingAuctions" />
      
      <h1 className="text-center mt-4">
        Daily Auctions
      </h1>
      <CardGroup products={cardGroups} role="onGoingAuctions"/> */}
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home