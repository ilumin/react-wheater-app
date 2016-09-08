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

});
