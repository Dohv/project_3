import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Logon from './components/Logon';

//import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      name: '',
      // todoData: [],
    }
     this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    this.fetchAllCities();
    // this.fetchAllTodos();
  }

  fetchAllCities() {
    fetch('http://localhost:3001/api/city')
      .then((res) => {
        return res.json()
      }).then((resJson) => {
        console.log(resJson.data.cities);
        this.setState({
          cityData: resJson.data.cities,
          name: '',
        })
      });
  }

   handleNameChange(event) {
     event.preventDefault();
     console.log(this.state.name);
    this.setState({
      name: event.target.value,
    });
   }

  
  render() {
    return (
      <div className="App">

        <Logon 
          handleNameChange={this.handleNameChange} 
          cities={this.state.cityData}
          
        />
        {/*
        <NY name={this.name}/>
        <SF name={this.name}/>
        <CI name={this.name}/>
        <DE name={this.name}/>
        <MI name={this.name}/>
        <Header cityData={this.state.cityData} />
      */}
      </div>
    );
  }
}

export default App;
