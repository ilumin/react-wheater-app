import React, { Component } from 'react';
import './App.css';
import xhr from 'xhr';

class App extends Component {
  state = {
    location: ''
  };

  fetchData = (event) => {
    event.preventDefault();
    console.log('fetch data for', this.state.location);
  };

  changeLocation = (event) => {
    this.setState({
      location: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input
              placeholder={"City, Country"}
              type="text"
              value={this.state.location}
              onChange={this.changeLocation}
              />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
