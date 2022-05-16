import React,{useState, useEffect} from 'react';
import Navigation from './Navigation';
import { CardGroup } from "./CardGroup";
import { ItemSlider } from "./ItemSlider";
import Wallet from "./Wallet";
import Header from "./Header";
import Footer from "./Footer"
import Testimonials from './Testimonials/Testimonials';



const Home = () => {
  document.title = "AuctionPoint.com"
  const [isLoading, setIsLoading] = useState(true);
  const [onGoingAuctions, setOngoingAuctions] = useState([]);
  const [upcomingAuctions, setUpcomingAuctions] = useState([]);

  // console.log("cardGroup",cardGroups)

  useEffect(() => {
    async function fetchData() {
      await fetch("https://auctionpointbackend.herokuapp.com/auction/all")
        .then((res) => res.json())
        .then((json) => {
          if (json === undefined) {
            json = [];
          }
          return json;
        }).then(productsArray=>{

            let Ongoing = [];
            let upComing =[];
            productsArray.filter((obj) => {
              if ( new Date(obj.startDate) <= new Date() && new Date(obj.endDate) >= new Date()) {
                Ongoing.push(obj);
              }else if(new Date(obj.startDate) > new Date() && new Date(obj.endDate) >= new Date()){
                upComing.push(obj)
              }
            });
            // console.log(new Date().toISOString().substr(0, 10));

            setOngoingAuctions(Ongoing)
            setUpcomingAuctions(upComing)
            // console.log("Ongoing", Ongoing);
            setIsLoading(false)
        });
    }
    fetchData()
  }, [])

  function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }


  return (
    <div>
      <Navigation />
      <Header/>
      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}

      <h1 className="text-center my-4" id="on-going-section">
        On Going Auctions
      </h1>
      <ItemSlider products={onGoingAuctions} role="onGoingAuctions"/>

      <h1 className="text-center my-4">
        Upcoming Auctions
      </h1>
      <ItemSlider products={upcomingAuctions} role="upComingAuctions"/>
      {/* <CardGroup products={onGoingAuctions.length >5 ? onGoingAuctions.slice(5,onGoingAuctions.length):onGoingAuctions} role="onGoingAuctions" /> */}
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home