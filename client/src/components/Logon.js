import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Logon extends Component {


  render () {
    return (
      <div id='login'>
        <div className='layer'>
          <form id='login-form' onSubmit={this.props.handleFormChange} >
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
            <input 
            type='text' 
            name='name' 
            placeholder='Name'
            className='name'
            />
          </form>
          <Link className='go' to={`/${this.props.currCity}`}>-></Link>
        </div>
      </div>
    )
  }
}



export default Logon;
            
            