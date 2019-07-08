import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { signInToggle: true };
        this.signIn = this.signIn.bind(this);
    }

    signIn() {
        this.setState(state => ({
            signInToggle: !state.signInToggle
        }));
      }
    

    render() {
        return (
            <div className='headerContent'>
                <div className='leftContent'>
                    Header is here
                </div>
                <div className='rightContent'>  
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about/">About</Link>
                        <Link to="/contact/">Contact</Link>                                 
                        <Link to="/sign_up/">SignUp</Link>
                        <Link to="/sign_in/">SignIn</Link>
                    </nav>            
                </header>          
                    <button onClick={this.signIn}>
                        {this.state.signInToggle ? 'Sign In' : 'Sign Out'}
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;