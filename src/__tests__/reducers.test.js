import mainReducer from '../reducers';
import { fromJS } from 'immutable';

describe('mainReducer', () => {

  it('should return the init state', () => {
    expect(mainReducer(undefined, {})).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }));
  });

  it('should react to an action with the type CHANGE_LOCATION', () => {
    var location = 'Bangkok, Thailand';
    expect(mainReducer(undefined, {
      type: 'CHANGE_LOCATION',
      location: location
    })).toEqual(fromJS({
      location: location,
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }))
  });

  it('should react to an action with the type SET_DATES', () => {
    var dates = ['A', 'B'];
    expect(mainReducer(undefined, {
      type: 'SET_DATES',
      dates: dates
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: dates,
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }))
  });

  it('should react to an action with the type SET_DATA', () => {
    var data = ['A', 'B'];
    expect(mainReducer(undefined, {
      type: 'SET_DATA',
      data: data
    })).toEqual(fromJS({
      location: '',
      data: data,
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: null
      }
    }))
  });

  it('should react to an action with the type SET_TEMPS', () => {
    var temps = ['A', 'B'];
    expect(mainReducer(undefined, {
      type: 'SET_TEMPS',
      temps: temps
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: temps,
      selected: {
        date: '',
        temp: null
      }
    }))
  });

  it('should react to an action with the type SET_SELECTED_DATE', () => {
    var date = '2016-01-01';
    expect(mainReducer(undefined, {
      type: 'SET_SELECTED_DATE',
      date: date
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: date,
        temp: null
      }
    }))
  });

  it('should react to an action with the type SET_SELECTED_TEMP', () => {
    var temp = '31';
    expect(mainReducer(undefined, {
      type: 'SET_SELECTED_TEMP',
      temp: temp
    })).toEqual(fromJS({
      location: '',
      data: {},
      dates: [],
      temps: [],
      selected: {
        date: '',
        temp: temp
      }
    }))
  });

});
