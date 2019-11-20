import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={NavLink} to="/" className="nav-link">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} exact to="/home" className="nav-link">Home</Nav.Link>
            </Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} exact to="/basket" className="nav-link">
                <h3 className="basket-icon-nav-container">
                  <i className="icon-basket"></i>
                  <i className="count-indicator">{ this.props.count > 0 ? this.props.count : '' }</i>
                </h3>
              </Nav.Link>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

Header.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    count: state.common.basketItemCount
  };
};

export default connect(mapStateToProps)(Header);
