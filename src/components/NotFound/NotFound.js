import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

/**
 * Class representing Not Found component
 * @extends Component
 */
class NotFound extends Component {
  /**
   * Rendering Basket Not Found component
   * @returns {void}
   */
  render() {
    return (
      <div>
        <h2>404 error</h2>
        <h3>This page is not exists</h3>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/home" ><h3>Go To Home</h3></Nav.Link>
        </Nav.Item>
      </div>
    );
  }
}

export default NotFound;
