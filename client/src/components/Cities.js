import React, { Component } from 'react';
import Logon from './components/Logon';

class Cities extends Component {
  render () {
    return (
      <div>
        {this.props.cities.map((city) => {
          return (
            <Logon 
              key={city.id}
              city={city.name}
            />
          )
        })}
      </div>
    )
  }
}

export default Cities;