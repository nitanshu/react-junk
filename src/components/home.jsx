import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    state = {}
    render() {
        return (
            <div class="home">
                <div class="card w-25 p-3">
                    <img class="card-img-top" src="/home/nitanshu/Downloads/small_1550288890-artwork.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Request</h5>
                        <p class="card-text">This world is full of request don't make any more request.</p>
                        <Link class="nav-link" to="/location/">Raise Request</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;