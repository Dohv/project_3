import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form id='input-form' onSubmit={this.props.fetch}>
        <input id='city-input' 
        type='text' 
        value={this.props.city}
        placeholder='City Name'
        onChange={this.props.handleCity} />
        <input id='submit-btn' 
        type='submit'/>
      </form>
    )
  }
}

export default Input;