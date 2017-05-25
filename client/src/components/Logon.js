import React, { Component } from 'react';
import '../App.css';
import Cities from './components/Cities';

class Logon extends Component {
  render () {
    return (
      <div id='login'>
        <form id='login-form'>
          <input type='text' name='name' id='name' placeholder='Name'>{this.props.name}</input>
          <br /><br />
          <select className='cities' name='city'>
            <option value='{this.props.city.name}'>{this.props.city.name}</option>
          </select>
        </form>
      </div>
    )
  }
}

componentDidMount() {
  fetch('http://localhost:3001/api/todo')
    .then((response) => {
      console.log(response);
      return response.json()
    })
    .then((responseJson) => {
      return {
        city: responseJson.cities,
      }
    });
} 


export default Logon;