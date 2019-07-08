import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Routing from './router';
import SimpleMap from './components/map';
class App extends Component {
  render() {
    return (
      <div>        
          <Header />
          <Routing />          
          <SimpleMap />
      </div>
    );
  }
}

export default App;

