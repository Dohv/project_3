import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className='navBar'>
        <ul className='navList'>
          <li><Link to="/Newyork">New York</Link></li>
          <li><Link to="/Miami">Miami</Link></li>
          <li><Link to="/Chicago">Chicago</Link></li>
          <li><Link to="/Denver">Denver</Link></li>
          <li><Link to="/Sanfrancisco">San Francisco</Link></li>
        </ul>
      </nav>
    );
  };
}

export default Nav;