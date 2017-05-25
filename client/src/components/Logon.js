import React, { Component } from 'react';
import '../App.css';

class Logon extends Component {
  render () {
    return (
      <div id='login'>
        <form id='login-form'>
          <input type='text' name='name' id='name' placeholder='Name'>{this.props.name}</input>
          <br /><br />
          <select className='cities' name='cities'>
            <option value='select a city'>Please Select A City</option>
            <option value='New York'>New York</option>
            <option value='Chicago'>Chicago</option>
            <option value='Denver'>Denver</option>
            <option value='Miami'>Miami</option>
            <option value='San Francisco'>San Francisco</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Logon;