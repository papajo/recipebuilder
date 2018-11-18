import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount(){
    const url = "https://raw.githubusercontent.com/papajo/recipebuilder/master/flats-assets/flats.json";
    fetch(url)    //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        })
      })
  }

  render() {
    const center = {
      lat: 40.7128 ,
      lng: 74.0060
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat key={flat.name} flat={flat} />
            })}
          </div>  
        </div>
        <div className="map">
            <GoogleMapReact
              center={center}
              zoom={14}
            >
            {this.state.flats.map((flat) => {
              return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} />
            })}
            </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
