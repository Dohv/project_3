import React, { Component } from 'react';
//import TodoModle from './TodoModle';
import WeatherModule from './WeatherModule';

class Header extends Component {
  render() {
    return (
      <header>
        {/*<TodoModle todoData={this.props.todoData} />*/}
        <WeatherModule cityData={this.props.cities} />
      </header>
    );
  };
}

export default Header;