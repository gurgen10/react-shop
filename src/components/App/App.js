import React, {Component} from 'react';
import './App.css';

import Header from '../Header';
import Search from '../Search';
import ListItems from '../ItemList';



class App extends Component {
  
  render() {
    return (
      <div className="App">
         <Header/>
          <Search />
          <ListItems />
   
        
      </div>
    );
  }
}

export default App;
