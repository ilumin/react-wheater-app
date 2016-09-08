import React, { Component } from 'react';
import { connect } from 'react-redux';
import xhr from 'xhr';

import {
  changeLocation,
  setSelectedTemp,
  setSelectedDate,
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
    event.preventDefault();
    var location = encodeURIComponent(this.props.location);
    var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=093ff3b8482fa6f460bbf58e0544535a&units=metric';
    var url = urlPrefix + location + urlSuffix;
    var self = this;

    xhr({
      url: url
    }, function (err, data) {
      var body = JSON.parse(data.body);
      var list = body.list;
      var dates = [];
      var temps = [];
      for (var i = 0; i < list.length; i++) {
        dates.push(list[i].dt_txt);
        temps.push(list[i].main.temp);
      }

      self.setState({
        data: body,
        dates: dates,
        temps: temps,
      });

      self.props.dispatch(setSelectedDate(''));
      self.props.dispatch(setSelectedTemp(null));
    });
  };

  changeLocation = (event) => {
    this.props.dispatch(changeLocation(event.target.value));
  };

  onPlotClick = (data) => {
    if (data.points) {
      var number = data.points[0].pointNumber;
      self.props.dispatch(setSelectedDate(data.points[0].x));
      self.props.dispatch(setSelectedTemp(data.points[0].y));
    }
  };

  render() {
    var currentTemp = 'not loaded yet';
    if (this.state.data.list) {
      currentTemp = this.state.data.list[0].main.temp;
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
        {(this.state.data.list) ? (
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
              xData={this.state.dates}
              yData={this.state.temps}
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
    selected: state.selected
  }
}

export default connect(mapStateToProps)(App);
