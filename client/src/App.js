import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';
import './App.css';
import Logon from './components/Logon.js';



import NY from './components/NY';
import SF from './components/SF';
import DE from './components/DE';
import CI from './components/CI';
import MI from './components/MI';


class App extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      cityData: [],
      name: '',
      currCity: '',
      todoData: [],
      loggedIn: false,
    }
     this.handleCityChange = this.handleCityChange.bind(this);
     this.handleNameChange = this.handleNameChange.bind(this);
     this.searchResult = this.searchResult.bind(this);
  }

  componentDidMount() {
    this.fetchAllCities();
    this.fetchAllTodos();
    
  }

  fetchAllTodos() {
    fetch('http://localhost:3001/api/todo')
      .then((res) => {
        return res.json()
      }).then((resJson) => {
        this.setState({
          todoData: resJson.data.cities,
          
        })
      });
  }

  fetchAllCities() {
    fetch('http://localhost:3001/api/city')
      .then((res) => {
        return res.json()
      }).then((resJson) => {
        this.setState({
          cityData: resJson.data.cities,
          
        })
      });
  }


   handleCityChange(event) {
     console.log(event.target.value);
    this.setState({
      currCity: event.target.value,
    });
  }

  handleNameChange(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  }

 searchResult(event) {
  this.setState({
      loggedIn: true,
    });
  };



  // componentDidUpdate() {
  //   console.log(this.state);
  //  // window.location.href = `/${this.state.currCity}`;
  // }

  

  seeState() {
    console.log(this.state.name);
   console.log(this.state.currCity);
   
  }
  
  render() {
    return (
       <Router>
          <div className="App">
                <Route exact path="/" render={() => <Logon handleCityChange={this.handleCityChange} handleNameChange={this.handleNameChange} searchResult={this.searchResult} cities={this.state.cityData}  currCity={this.state.currCity} name={this.state.name} route={this.selectCityRoute} loginStatus={this.state.loggedIn}/>} /> 
              <main>
                <Route  path="/NewYork" render={() => <NY cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} currCity={this.state.currCity}  />} />
                <Route  path="/SanFrancisco" render={() => <SF cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} />} />
                <Route  path="/Chicago" render={() => <CI cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} />} />
                <Route  path="/Miami" render={() => <MI cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} />} />
                <Route  path="/Denver" render={() => <DE cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} />} />
              </main>
          
        </div>
      </Router>
    );
  }
}

export default App;
