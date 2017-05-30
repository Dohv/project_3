import React, { Component } from 'react';
import TodoModle from './TodoModle';

class Header extends Component {
  render() {
    return (
      <header className='todoModle'>
        <TodoModle todoData={this.props.todoData} />
          <nav className='weather'>
            <p>{this.props.city}</p>
            <br />
            <p>Current Temp: {this.props.temp}</p>
            <br />
            <p>Today's Low: {this.props.min}</p>
            <br />
            <p>Today's high: {this.props.max}</p>
            <br />
            <p>Weather ourside: {this.props.desc}</p>
          </nav>

      </header>
    );
  };
}

export default Header;