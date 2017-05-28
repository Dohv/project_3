import React, { Component } from 'react';
import '../App.css';

class Logon extends Component {

  render () {
    return (
      <div id='login'>
        <div className='layer'>
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
      </div>
    )
  }
}



export default Logon;