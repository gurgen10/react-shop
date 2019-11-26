import React, { Component } from 'react';
import Search from '../Search';
import ItemList from '../ItemList';

/**
 * Class representing Home component
 * @extends Component
 */
class Home extends Component {
  /**
   * Rendering Home component
   * @returns {void}
   */
  render() {
    return (
      <>
        <Search/>
        <ItemList/>
      </>
    );
  }
}

export default Home;
