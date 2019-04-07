import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
