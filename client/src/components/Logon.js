import React, { Component } from 'react';
import '../App.css';
//import Cities from './Cities';
//import Name from './Name';

class Logon extends Component {

  render () {
    console.log(this.props);
    return (
      <div id='login'>
        <form id='login-form' onSubmit={this.props.handleFormChange}>
          <input 
          type='text' 
          name='name' 
          placeholder='Name'
          className='name'
          />
           
          <br /><br />
          <select name='city'>
          <option>Select City</option>
          {this.props.cities.map((city) => {
            return (
              <option value={city.name} key={city.id}>
                {city.name}
              </option>
            )
          })}
        </select>
        </form>
      </div>
    )
  }
}



export default Logon;