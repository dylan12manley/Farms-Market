import React from "react";
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';
import "../styles/Header.css"


function Header(){
  return (
    <>
  <Navbar bg="dark" variant="dark">
  <div id="header">
  <Navbar.Brand className="companyName" href="#home">Avery's Organics</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#schedule">Schedule</Nav.Link>
      <Nav.Link href="#seasonal">Seasonal Produce</Nav.Link>
    </Nav>
    </div>
  </Navbar>
  </>
  );
}

export default Header;
