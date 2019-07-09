import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Map from './google_map';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            latitude: 27,
            longitude: 22,
        }
        this.getMyLocation = this.getMyLocation.bind(this)
    }


    componentDidMount() {
        this.getMyLocation()
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
            })
        }

    }

    render() {
        const { latitude, longitude } = this.state;
        return (
            <div class="home">
                <div style={{ margin: '100px' }}>
                    <div>
                        Current latitude <input type="text" value={latitude} />
                        Current longitude <input type="text" value={longitude} />
                    </div>                
                    <Map
                        google={this.props.google}
                        center={{ lat: latitude, lng: longitude }}
                        height='300px'
                        zoom={15}
                    />
                </div>
            </div>
        );
    }
}

export default Home;