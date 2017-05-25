import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import TodoModle from './components/TodoModle';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <TodoModle />
      </div>
    );
  }
}

export default App;
