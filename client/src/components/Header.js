import React, { Component } from 'react';
import TodoModle from './TodoModle';

class Header extends Component {
  render() {
    return (
      <header>
        <TodoModle todoData={this.props.todoData} />
          {this.props.city}
          {this.props.min}
          {this.props.max}
          {this.props.temp}
          {this.props.desc}

      </header>
    );
  };
}

export default Header;