import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MarketSchedule from './MarketSchedule';
import AvailableProducts from './AvailableProducts'

function Home(){
  return (

  <div id='home'>
    <Container>
      <Row>
        <Col>
          <AvailableProducts/>
        </Col>
        <Col md={8}>
          <MarketSchedule/>
        </Col>
      </Row>
    </Container>
  </div>
  );
}


export default Home;
