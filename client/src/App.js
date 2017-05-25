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

        <Logon

        />
        <br />
        <TodoModle />
      </div>
    );
  }
}

export default App;
