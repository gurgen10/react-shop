import React, {Component} from 'react';
import './App.css';

import Header from '../Header';
import Search from '../Search';
import ListItems from '../ItemList';



class App extends Component {
  searchTextCallBack = (searchText) => {
    this.searchText = searchText;
    console.log("MainContainer: " + this.searchText);
  
  }
  render() {
    return (
      <div className="App">
         <Header/>
          <Search searchTextCallBack={this.searchTextCallBack}/>
          <ListItems searchText={this.searchText}/>
   
        
      </div>
    );
  }
}

export default App;
