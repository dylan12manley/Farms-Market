import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MarketScheduleHome from './MarketScheduleHome';
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
          <MarketScheduleHome/>
        </Col>
      </Row>
    </Container>
  </div>
  );
}


export default Home;
