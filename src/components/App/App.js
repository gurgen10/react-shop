import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Header';
import Home from '../Home';
import Basket  from "../Basket";
import NotFound  from "../NotFound";



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
        <Header/>
            <Switch>
           
            <Route path="/" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/basket" component={Basket}/>
            <Route path="*" component={NotFound}/>
            </Switch>
        </Router>
        <Home />   
        
      </div>
    );
  }
}

export default App;
