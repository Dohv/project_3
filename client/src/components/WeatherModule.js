import React, { Component } from 'react';
import './App.css';
import Input from './components/WeatherInput';
import Data from './components/Weather';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    weatherData: null,
    city: null,
    apiLoaded: false,
  }
  this.fetchData = this.fetchData.bind(this);
  this.handleCity = this.handleCity.bind(this);
}

fetchData(e) {
  e.preventDefault();
  let key = '54885ece079c87bb919af1bdcdf3be16';
  let city = this.state.city;
  console.log('in fetch');
  console.log(city);
  fetch(`api.openweathermap.org/data/2.5/weather?q={city name},us&units=imperial&appid=${key}`)
  .then((api) => {
    api.json()
    .then((json) => {
      console.log(json);
      this.setState({
        weatherData: json,
        apiLoaded: true
      });
      console.log(this.state.weatherData);
    });
  });
};

handleCity(e){
  this.setState({city: e.target.value});
  console.log(this.state.city);
}

  render() {
    return (
      <div className="App">
        <div id='input-container'>
          <Input fetch={this.fetchData}
          handleCity={this.handleCity} 
          value={this.state.city}/>
        </div>
        <hr/>
        <div id='data-container'>
          <Data weatherData={this.state.weatherData} apiLoaded={this.state.apiLoaded}/>
        </div>
      </div>
    )
  }
}

export default App;