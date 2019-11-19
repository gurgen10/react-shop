import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
    
    render() { 
      console.log('Count', this.props.count);

        return ( 
        <>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand ><Link to="/">Shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-cintent-between">
            <Nav className="mr-auto">
              <Link to="/home">Home</Link>
            </Nav>
            <Nav.Item>
            
              <Link to="/basket">
                <h3 className="basket-icon-nav-container">
                  <i className="icon-basket"></i>
                  <i className="count-indicator">{ this.props.count > 0 ?this.props.count: '' }</i>
                  </h3></Link>
            </Nav.Item>
          </Navbar.Collapse>
          </Navbar>
        </>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    count: state.common.basketItemCount
  }
}
 
export default connect(mapStateToProps)(Header);