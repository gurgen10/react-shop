import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    
    render() { 
        return ( 
          <>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-cintent-between">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
            <Nav.Item>
              <Nav.Link href="/basket"><h3><i className="icon-basket"></i></h3></Nav.Link>
            </Nav.Item>
            
          </Navbar.Collapse>
        </Navbar>
          </>
         );
    }
}
 
export default Header;