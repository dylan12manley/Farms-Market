import React from 'react';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
import Error404 from './components/Error404';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketSchedule from './components/MarketSchedule';
// import MarketScheduleHome from './components/MarketScheduleHome';
import AvailableProducts from './components/AvailableProducts';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div id='bodyDiv'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/seasonal' component={AvailableProducts} />
        <Route path='/schedule' component={MarketSchedule} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;





// <div id='bodyDiv'>
// <Header/>
// <Container>
// <Row>
// <Col>
// <AvailableProducts/>
// </Col>
// <Col md={8}>
// <MarketSchedule/>
// </Col>
// </Row>
// </Container>
//
// </div>
