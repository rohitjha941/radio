import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import BaseRouter from "./main";
export default class App extends Component {


  render() {
    return (
             <Router>
          
              <BaseRouter />

        </Router>
 
    );
  }
}
