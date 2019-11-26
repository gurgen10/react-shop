import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from '../Header';
import Home from '../Home';
import Basket from '../Basket';
import NotFound from '../NotFound';

// https://medium.com/js-imaginea/best-practices-with-react-and-redux-application-1e94a6f214a0
/**
 * Class representing App component
 * @extends Component
 */
class App extends Component {
  /**
   * Rendering App component
   * @returns {void}
   */
  render() {
    // todo: change Header component
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/basket" component={Basket}/>
            <Route path="/*" component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
