import React, { Component } from 'react';
import '../App.css';
import Cities from './Cities';
import Name from './Name';

class Logon extends Component {

  render () {
    return (
      <div id='login'>
        <form id='login-form'>
         <Name handleNameChange={this.props.handleNameChange}/>
          <br /><br />
          <Cities cities={this.props.cities}/>
        </form>
      </div>
    )
  }
}



export default Logon;