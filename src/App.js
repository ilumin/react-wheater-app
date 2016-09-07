import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather</h1>
        <form>
          <label>I want to know the weather for
            <input placeholder={"City, Country"} type="text" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
