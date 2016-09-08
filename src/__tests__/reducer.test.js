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

});
