import React, { Component } from 'react';
import WeatherInput from './WeatherInput';
import Weather from './Weather';


class WeatherModule extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        zip: '' ,
        city: '',
        min_temp: '',
        max_temp: '',
        desc: '',
        curr_temp: '',
        apiDataLoaded: false
      } 
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
  }

submit() {
  console.log(this.state.zip);
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&units=imperial&appid=54885ece079c87bb919af1bdcdf3be16`)
  .then((response) => {
    console.log(response);
    return response.json();
  }).then((jsonResponse) => {
    console.log(jsonResponse);
    this.setState({
      city: jsonResponse.name,
      min_temp: Math.floor ((jsonResponse.main.temp_min )),
      max_temp: Math.floor  ((jsonResponse.main.temp_max )),
      curr_temp: Math.floor (( jsonResponse.main.temp)),
      desc: jsonResponse.weather[0].description,
      apiDataLoaded: true,
    })
  })
}


handleChange(e) {
  console.log('hi');
  this.setState({
    zip: e.target.value
  });
}

 handleSubmit(e) {
    e.preventDefault();
    this.submit();
  }

  showTemp() {
    console.log(this.state.apiDataLoaded);
    if(this.state.apiDataLoaded) {
      return <Weather
        city={this.state.city}
        min_temp={this.state.min_temp}
        max_temp={this.state.max_temp}
        curr_temp={this.state.curr_temp}
        desc={this.state.desc}
        />
    }
  }

  render() {
    console.log('render');
    return (
      <div className="App">
      
        <WeatherInput
        zip={this.state.zip}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        />
        {this.showTemp()}
      
      </div>
    );
  }
}

export default WeatherModule;