import React, { Component } from 'react';


class Data extends Component {
  render() {
    if (this.props.apiLoaded === true) {
      return (
        <div id='data-div'>
          <p id='city-name'>{this.props.weatherData.name}</p>
          <p id='main-temp'>{Math.floor(this.props.weatherData.main.temp)}°</p>
          <p id='conditions'>{this.props.weatherData.weather[0].description}</p>
          <div id='min-max'>
            <p id='min-temp'>Min: {Math.floor(this.props.weatherData.main.temp_min)}°</p>
            <p id='max-temp'>Max: {Math.floor(this.props.weatherData.main.temp_max)}°</p>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Data;