import React from 'react';
import Card  from 'react-bootstrap/Card';
// import '../App.css';
import '../styles/Schedule.css'
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

function  MarketSchedule(){
  return (
    <>
    <h2 className="marketHeader">Market Schedy</h2>
    <div id='scheduleBody'>
    {marketSchedule.map((market, index) =>
    <Card className="text-white cardClass">
    <Card.Img className="cardImg" src={market.image} alt="an image of a market" />
    <Card.ImgOverlay>
      <Card.Title>{market.day}s at {market.location}</Card.Title>
      <Card.Text>
        <p>{market.hours} at booth {market.booth}</p>
      </Card.Text>
    </Card.ImgOverlay>
    </Card>
  )};
    </div>
    </>
    );
}

export default MarketSchedule;
