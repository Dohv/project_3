import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Redirect} from 'react-router';

class Logon extends Component {

  componentDidMount() {
    const loginDiv = document.getElementById('login-form');
    loginDiv.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        console.log('yay');
        this.props.searchResult();
       
        //window.location.href = `/${this.props.currCity}`;
          // return(<Router>
          //         <Route path={`/${this.props.currCity}`}/>
          //       </Router>)
      }
    });
  }

  render () {
    if(this.props.loginStatus) {
      return(<Redirect to={`/${this.props.currCity}`} />)
    }else {
    return (
      <div id='login'>
        <div className='layer'>
          <div id='login-form'>
            <select name='city' onChange={this.props.handleCityChange}>
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
            onChange={this.props.handleNameChange}
            />
          </div>
        </div>
      </div>
    )
    }
  }
}



export default Logon;
            
            