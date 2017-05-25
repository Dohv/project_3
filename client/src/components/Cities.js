import React, { Component } from 'react';

class Cities extends Component {
  render () {
    return (
      <div>
      <select>
        <option>Select City</option>
        {this.props.cities.map((city) => {
          return (
            <option value='cityName' key={city.id}>
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