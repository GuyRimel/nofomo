import React, { Component } from 'react';
// VARS and FUNCS //////////
import { mockData } from './mock-data';
import { extractLocations } from './api';

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    const locations = extractLocations(mockData);
    const suggestions = locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion
    });
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <h3>Find a city:</h3>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked('all')} >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
