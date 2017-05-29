import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class NY extends Component {
  

  render() {
    return (
      <div className='ny'>
      <Header  cities={this.props.cities}/>
       <p>Welcome to New York</p>
       <Footer />
      </div>
    );
  };
}

export default NY;