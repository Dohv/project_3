import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link,
} from 'react-router-dom';
import './App.css';
import Logon from './components/Logon';

//import Header from './components/Header';
import Footer from './components/Footer';
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
      // todoData: [],
    }
     this.handleFormChange = this.handleFormChange.bind(this);
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
    });
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
              <Header cityData={this.state.cityData} />
          */}
              <main>
                {/*<Route path="/" component={Logon} />*/}
                <Route exact path="/" render={() => <Logon handleFormChange={this.handleFormChange} cities={this.state.cityData}  />} />
                <Route exact path="/Newyork" component={NY} />
                <Route exact path="/Sanfrancisco" component={SF} />
                <Route exact path="/Chicago" component={CI} />
                <Route exact path="/Miami" component={MI} />
                <Route exact path="/Denver" component={DE} />
              </main>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
