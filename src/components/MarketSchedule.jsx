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


function  MarketSchedule(){
  return (
    <>
    <div id='carouselBody'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={beets}
          alt="Beets"
        />
        <Carousel.Caption>
          <h3>Sundays at Lents International</h3>
          <p>9 am to 2 pm at booth 4A</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={pineapples}
          alt="Pineapples"
        />

        <Carousel.Caption>
          <h3>Mondays at Pioneer Courthouse Square</h3>
          <p>10 am to 2 pm at booth 7C</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={woman}
          alt="Woman at fruit stand"
        />

        <Carousel.Caption>
          <h3>Tuesdays at Hillsboro</h3>
          <p>5 pm to 8:30 pm at booth 3E</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={watermelon}
          alt="Watermelons"
        />

        <Carousel.Caption>
          <h3>Wednesdays at Shemanski Park</h3>
          <p>10 am to 2 pm at booth 3E</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={hipster}
          alt="Two people at produce stands"
        />

        <Carousel.Caption>
          <h3>Thursdays at Northwest Portland</h3>
          <p>2 pm to 6 pm at booth 6D</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={spices}
          alt="Bags of bulk spices"
        />

        <Carousel.Caption>
          <h3>Fridays at Cully</h3>
          <p>10 am to 2 pm at booth 3B</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src={squash}
          alt="Squash"
        />

        <Carousel.Caption>
          <h3>Saturdays at Beaverton</h3>
          <p>10 am to 1:30 pm at booth 9G</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
    );
}

export default MarketSchedule;
