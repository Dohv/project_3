import React, { Component } from 'react';
//import TodoModle from './TodoModle';
import WeatherModule from './WeatherModule';

class Header extends Component {
  render() {
    return (
      <header>
        {/*<TodoModle />*/}
        <WeatherModule cityData={this.props.cityData} />
      </header>
    );
  };
}

export default Header;