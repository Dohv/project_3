import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Logon from './components/Logon';
import TodoModle from './components/TodoModle';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Logon 
          
        />
        <br />
=======
       
>>>>>>> 25e898aac9c5d5911ce1933775cbe754a86368d8
        <TodoModle />
      </div>
    );
  }
}

export default App;