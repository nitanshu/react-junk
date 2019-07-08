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
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                    <Link class="navbar-brand" to="/">ReactJunk</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sign_up/">Sign Up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/sign_in/">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <button onClick={this.signIn}>
                        {this.state.signInToggle ? 'Sign In' : 'Sign Out'}
                    </button> */}
            </div>

        );
    }
}

export default Header;