import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';

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
      lat: 40.5556 ,
      lng: 74.3456
    }
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>  
        </div>
        <div className="map">
            <GoogleMapReact
              center={center}
              zoom={11}
            >
            </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
