import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeLocation,
  setSelectedTemp,
  setSelectedDate,
  fetchData,
} from './actions';

import './App.css';

import Plot from './Plot.js';

class App extends Component {
  state = {
    data: {},
    dates: [],
    temps: [],
  };

  fetchData = (event) => {
    console.log("FETCH DATA");
    event.preventDefault();
    var location = encodeURIComponent(this.props.location);
    var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=093ff3b8482fa6f460bbf58e0544535a&units=metric';
    var url = urlPrefix + location + urlSuffix;
    this.props.dispatch(fetchData(url));
  };

  changeLocation = (event) => {
    console.log("CHANGE LOCATION");
    this.props.dispatch(changeLocation(event.target.value));
  };

  onPlotClick = (data) => {
    console.log("PLOT CLICK");
    if (data.points) {
      self.props.dispatch(setSelectedDate(data.points[0].x));
      self.props.dispatch(setSelectedTemp(data.points[0].y));
    }
  };

  render() {
    var currentTemp = 'not loaded yet';
    console.log("PROPS:", this.props);
    if (this.props.data.list) {
      currentTemp = this.props.data.list[0].main.temp;
    }

    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input
              placeholder={"City, Country"}
              type="text"
              value={this.props.location}
              onChange={this.changeLocation}
              />
          </label>
        </form>
        {(this.props.data.list) ? (
          <div className="wrapper">
            <p className="temp-wrapper">
              <span className="temp">{ this.props.selected.temp ? this.props.selected.temp : currentTemp }</span>
              <span className="temp-symbol">°C</span>
              <span className="temp-date">
                { this.props.selected.temp ? this.props.selected.date : ''}
              </span>
            </p>
            <h2>Forecast</h2>
            <Plot
              xData={this.props.dates}
              yData={this.props.temps}
              onPlotClick={this.onPlotClick}
              type="scatter"
            />
          </div>
        ): null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location,
    selected: state.selected,
    data: state.data,
    dates: state.dates,
    temps: state.temps,
  }
}

export default connect(mapStateToProps)(App);
