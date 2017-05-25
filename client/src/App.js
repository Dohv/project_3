import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Logon from './components/Logon';
=======
import TodoModle from './components/TodoModle';
>>>>>>> 367925b662f44487549feb9c5a7f04116ab436f6

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        
        <Logon />
=======
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoModle />
>>>>>>> 367925b662f44487549feb9c5a7f04116ab436f6
      </div>
    );
  }
}

export default App;
