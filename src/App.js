import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Routing from './router';
class App extends Component {
  render() {
    return (
      <div>        
          <Header /> <Routing />                  
      </div>
    );
  }
}

export default App;

