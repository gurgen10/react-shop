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
          <Navbar.Brand ><NavLink exact to="/">Shop</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-cintent-between">
            <Nav className="mr-auto">
              <NavLink exact to="/home">Home</NavLink>
            </Nav>
            <Nav.Item>
              <NavLink exact to="/basket">
                <h3 className="basket-icon-nav-container">
                  <i className="icon-basket"></i>
                  <i className="count-indicator">{ this.props.count > 0 ? this.props.count : '' }</i>
                </h3>
              </NavLink>
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
