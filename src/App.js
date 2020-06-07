import React, { Component } from 'react'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Main/Sidenav';
import IndiaComp from './Components/India'
import Symtoms from './sympre/Symtoms'
import Prevention from './sympre/Prevention'
import Global from './Components/Global'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={IndiaComp} />
          <Route path="/global" component={Global} />
          <Route path="/symptoms" component={Symtoms} />
          <Route path="/prevention" component={Prevention} />
        </div>
      </Router>
    );
  }
}

export default App;


