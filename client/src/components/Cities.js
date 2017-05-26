import React, { Component } from 'react';

class Cities extends Component {
  render () {
    return (
      <div>
        <select >
          <option name='city'>Select City</option>
          {this.props.cities.map((city) => {
            return (
              <option value={city.name} key={city.id}>
                {city.name}
              </option>
            )
          })}
        </select>
      </div>
      
    )
  }
}

export default Cities;