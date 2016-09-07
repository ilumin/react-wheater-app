import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  fetchData = (event) => {
    event.preventDefault();
    console.log('fetch data!');
  };

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input placeholder={"City, Country"} type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
