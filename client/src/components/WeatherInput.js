import React, { Component } from 'react';

class WeatherInput extends Component {
 render(){
    return(
      <form className='info' onSubmit={this.props.handleSubmit}>
        <label>Enter City
          <input 
          type='text'
          name='city' 
          className='city' 
          value={this.props.city}
          onChange={this.props.handleChange}
          />
        <button className='button'>SUBMIT</button>
      </label>
    </form>
    )
  }
}


export default WeatherInput;