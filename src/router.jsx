import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import SignUp from './components/signUp';
import SignIn from './components/signIn';

const Routing = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/sign_up' component={SignUp}/>
        <Route path='/sign_in' component={SignIn}/>
      </Switch>
    </main>
  )

export default Routing;