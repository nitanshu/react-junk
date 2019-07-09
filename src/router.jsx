import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import MapContainer from './components/map';
import AddressFetcher from './components/addressFetcher';

const Routing = () => (
    <div class="container-fluid">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/sign_up' component={SignUp}/>
        <Route path='/sign_in' component={SignIn}/>
        <Route path='/location' component={MapContainer}/>
        <Route path='/address' component={AddressFetcher}/>
      </Switch>
    </div>
  )

export default Routing;