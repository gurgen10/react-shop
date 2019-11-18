import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../Header';
import Home from '../Home';
import Basket  from "../Basket";
import NotFound  from "../NotFound";



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/basket" component={Basket}/>
            <Route path="##" component={NotFound}/>
          </div>
        </BrowserRouter>
        <Home />   
        
      </div>
    );
  }
}

export default App;
