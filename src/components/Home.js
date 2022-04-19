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

  useEffect(() => {
    async function fetchData(){
      await fetch(
        "http://localhost:5000/product/all")
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
      <h1 className="text-center my-4">
        On Going Auctions
      </h1>
      <ItemSlider/>
      <h1 className="text-center mt-4">
        Current Auctions
      </h1>
      <CardGroup products={cardGroups}/>

      <h1 className="text-center mt-4">
        Daily Auctions
      </h1>
      <CardGroup products={cardGroups}/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home