import React from 'react';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketSchedule from './components/MarketSchedule';
import AvailableProducts from './components/AvailableProducts'

function App() {
  return (
    <div id='bodyDiv'>

    <Header/>
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

export default App;
