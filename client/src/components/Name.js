import React, { Component } from 'react';

class Name extends Component {
  
  render() {
    console.log('hello');
    return (
      <div>
        <input 
        type='text' 
        name='name' 
        placeholder='Name'
        className='name'
        onSubmit={() => {this.props.handleNameChange}} />
      </div>
    )
  }
}


export default Name;



