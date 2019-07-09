import React, { Component } from 'react';
import Map from './google_map';
class AddressFetcher extends Component {
    constructor() {
        super()

        this.state = {
            latitude: 15,
            longitude: 15,
            isMapRender: false
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
                    isMapRender: true,
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
                    {this.state.isMapRender ? <Map 
                        google={this.props.google}
                        center={{ lat: latitude, lng: longitude }}
                        height='300px'
                        zoom={15}
                    /> : null}
                </div>
            </div>
        );
    }
}
 
export default AddressFetcher;