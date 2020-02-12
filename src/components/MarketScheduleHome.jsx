import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
// import '../App.css';
import '../styles/Carousel.css'
import beets from '../assets/images/beets-1378705_640.jpg';
import pineapples from '../assets/images/pineapples-373769_640.jpg';
import woman from '../assets/images/woman-981797_640.jpg';
import hipster from '../assets/images/market-4749215_640.jpg';
import squash from '../assets/images/farmers-market-1213097_640.jpg';
import spices from '../assets/images/spices-1626385_640.jpg';
import watermelon from '../assets/images/watermelon-4783500_640.jpg';


const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00 am to 2:00 pm",
    booth: "4A",
    image: beets
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00 am to 2:00 pm",
    booth: "7C",
    image: pineapples
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00 pm to 8:30 pm",
    booth: "1F",
    image: woman
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00 am to 2:00 pm",
    booth: "3E",
    image: watermelon
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00 pm to 6:00 pm",
    booth: "6D",
    image: hipster
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00 am to 1:30 pm",
    booth: "9G",
    image: spices
 }
];

function  MarketScheduleHome(){
  return (
    <>
    <div id='carouselBody'>
    <Carousel>
    {marketSchedule.map((market, index) =>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={market.image}
          alt="an image of a market"
        />
        <Carousel.Caption>
          <h3>{market.day}s at {market.location}</h3>
          <p>{market.hours} at booth {market.booth}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )};

    </Carousel>
    </div>
    </>
  );
}
export default MarketScheduleHome;
