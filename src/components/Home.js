import React from 'react';
import Navigation from './Navigation';
import { CardGroup } from "./CardGroup";
import { ItemSlider } from "./ItemSlider";
import Wallet from "./Wallet";
import Header from "./Header";
import Footer from "./Footer"

const Home = () => {
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
      <CardGroup/>

      <h1 className="text-center mt-4">
        Daily Auctions
      </h1>
      <CardGroup/>
      <Footer/>
    </div>
  )
}

export default Home