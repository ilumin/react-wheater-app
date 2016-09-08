import React from 'react';
import { connect } from 'react-redux';

import {
  changeLocation,
  setSelectedTemp,
  setSelectedDate,
  fetchData,
} from './actions';

import './App.css';

import Plot from './Plot.js';

export class App extends React.Component {
  fetchData = (event) => {
    event.preventDefault();
    var location = encodeURIComponent(this.props.redux.get('location'));
    var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=093ff3b8482fa6f460bbf58e0544535a&units=metric';
    var url = urlPrefix + location + urlSuffix;
    this.props.dispatch(fetchData(url));
  }

  changeLocation = (event) => {
    this.props.dispatch(changeLocation(event.target.value));
  };

  onPlotClick = (data) => {
    if (data.points) {
      self.props.dispatch(setSelectedDate(data.points[0].x));
      self.props.dispatch(setSelectedTemp(data.points[0].y));
    }
  };

  render() {
    var currentTemp = 'not loaded yet';
    if (this.props.redux.getIn(['data', 'list'])) {
      currentTemp = this.props.redux.getIn(['data', 'list', '0', 'main', 'temp']);
    }

    return (
      <div>
        <h1>Weather</h1>
        <form onSubmit={this.fetchData}>
          <label>I want to know the weather for
            <input
              placeholder={"City, Country"}
              type="text"
              value={this.props.redux.get('location')}
              onChange={this.changeLocation}
              />
          </label>
        </form>
        {(this.props.redux.getIn(['data', 'list'])) ? (
          <div className="wrapper">
            <p className="temp-wrapper">
              <span className="temp">{ this.props.redux.getIn(['selected', 'temp']) ? this.props.redux.getIn(['selected', 'temp']) : currentTemp }</span>
              <span className="temp-symbol">°C</span>
              <span className="temp-date">
                { this.props.redux.getIn(['selected', 'temp']) ? this.props.redux.getIn(['selected', 'date']) : ''}
              </span>
            </p>
            <h2>Forecast</h2>
            <Plot
              xData={this.props.redux.get('dates')}
              yData={this.props.redux.get('temps')}
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
    redux: state,
  }
}

export default connect(mapStateToProps)(App);
