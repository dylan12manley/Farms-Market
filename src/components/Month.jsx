import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection'
import { Card, ListGroup, Accordion } from 'react-bootstrap';
import '../styles/Month.css'

function Month(props){
  return (
    <div>
    <Accordion >
      <Card className="wholeCard" style={{ width: '18rem' }}>
        <Accordion.Toggle as={Card.Header} eventKey="0" className="cardHeader">
        {props.month}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <ListGroup variant="flush">
          <ListGroup.Item>{props.selection.map((sel, i) => <li key={i}>{sel}</li>)}</ListGroup.Item>
        </ListGroup>
        </Accordion.Collapse>
      </Card>
      </Accordion>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired

};

export default Month;
