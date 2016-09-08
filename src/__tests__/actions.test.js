import {
  changeLocation
} from '../actions';

describe('actions', () => {

  describe('changeLocation', () => {
    it('should have a type of "CHANGE_LOCATION"', () => {
      expect(changeLocation().type).toEqual('CHANGE_LOCATION');
    });
  });

});
