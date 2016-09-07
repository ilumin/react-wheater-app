import React, { Component } from 'react';
import './App.css';
import xhr from 'xhr';

class App extends Component {
  state = {
    location: '',
    data: {}
  };

  fetchData = (event) => {
    event.preventDefault();
    var location = encodeURIComponent(this.state.location);
    var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=093ff3b8482fa6f460bbf58e0544535a&units=metric';
    var url = urlPrefix + location + urlSuffix;

    xhr({
      url: url
    }, function (err, data) {
      self.setState({
        data: JSON.parse(data.body)
      });
    });
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
