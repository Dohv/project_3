import React, { Component } from 'react';
import '../App.css';
import Cities from './Cities';
//import Name from './Name';

class Logon extends Component {

  render () {
    return (
      <div id='login'>
        <form id='login-form' onSubmit={this.props.handleNameChange}>
          <input 
          type='text' 
          name='name' 
          placeholder='Name'
          className='name'
          />
           
          <br /><br />
          <Cities cities={this.props.cities}/>
        </form>
      </div>
    )
  }
}



export default Logon;