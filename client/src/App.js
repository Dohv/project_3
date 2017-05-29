import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Redirect,
} from 'react-router-dom';
import './App.css';
import Logon from './components/Logon';



import NY from './components/NY';
import SF from './components/SF';
import DE from './components/DE';
import CI from './components/CI';
import MI from './components/MI';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      name: '',
      currCity: '',
      todoData: [],
    }
     this.handleFormChange = this.handleFormChange.bind(this);
     this.setState = this.setState.bind(this);
     this.selectCityRoute = this.selectCityRoute.bind(this);
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
          name: '',
          
        })
      });
  }


   handleFormChange(event) {
     console.log(event.target.name.value);
     console.log(event.target.city.value);
     event.preventDefault();
    this.setState({
      name: event.target.name.value,
      currCity: event.target.city.value,
    })
  }

  seeState() {
    console.log(this.state.name);
   console.log(this.state.currCity);
   
  }

  selectCityRoute() {
    if (this.state.currCity === 'New York')
    <Link to='/Newyork'>Go</Link>
  }



   

  
  render() {
    return (
       <Router>
          <div className="App">
            {/*
            <Logon 
              handleFormChange={this.handleFormChange} 
              cities={this.state.cityData}
            />
              
          */}
                <Route exact path="/" render={() => <Logon handleFormChange={this.handleFormChange} cities={this.state.cityData}  currtCity={this.state.currCity}  seestate={this.seeState} route={this.selectCityRoute} />} /> 
              <main>
                <Route  path="/New york" render={() => <NY cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} />} />
                <Route  path="/San Francisco" render={() => <SF cities={this.state.cityData} todos={this.state.todoData} name={this.state.name} />} />
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
