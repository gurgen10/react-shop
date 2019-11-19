import React, { Component } from 'react';

import Search from '../Search';
import ItemList from '../ItemList';

class Home extends Component {
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
