import React, { Component } from 'react';
import '../App.css';
import Cities from './Cities';

class Logon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
    }
  }

componentDidMount() {
  fetch('http://localhost:3001/api/city')
    .then((response) => {
      console.log(response);
      return response.json()
    }).then((responseJson) => {
      console.log(responseJson.data.cities);
      this.setState({
        city: responseJson.data.cities
      })
    });
} 

  
  render () {
    return (
      <div id='login'>
        <form id='login-form'>
          <input type='text' name='name' id='name' placeholder='Name'>{this.props.name}</input>
          <br /><br />
          <Cities cities={this.state.city}/>
        </form>
      </div>
    )
  }
}



export default Logon;