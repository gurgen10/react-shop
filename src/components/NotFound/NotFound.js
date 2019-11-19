import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
class NotFound extends Component {
  render() {
    return (
      <div className="App">

        <h2>NotFound</h2>
        <Nav.Item>
          <Nav.Link href="/home"><h3>Go To Home</h3></Nav.Link>
        </Nav.Item>
      </div>
    );
  }
}

export default NotFound;
