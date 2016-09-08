import {
  changeLocation,
  setSelectedDate,
  setSelectedTemp,
  setData,
  setDates,
  setTemps,
} from '../actions';

describe('actions', () => {

  describe('changeLocation', () => {
    it('should have a type of "CHANGE_LOCATION"', () => {
      expect(changeLocation().type).toEqual('CHANGE_LOCATION');
    });

    it('should pass on the location we pass in', () => {
      var location = 'Bangkok, Thailand';
      expect(changeLocation(location).location).toEqual(location);
    });
  });

  describe('setSelectedDate', () => {
    it('should have a type of SET_SELECTED_DATE', () => {
      expect(setSelectedDate().type).toEqual('SET_SELECTED_DATE');
    });
    it('should pass on the date we pass in', () => {
      var date = '2016-01-01';
      expect(setSelectedDate(date).date).toEqual(date);
    });
  });

  describe('setSelectedTemp', () => {
    it('should have a type of SET_SELECTED_TEMP', () => {
      expect(setSelectedTemp().type).toEqual('SET_SELECTED_TEMP');
    });
    it('should pass on the temp we pass in', () => {
      var temp = '31';
      expect(setSelectedTemp(temp).temp).toEqual(temp);
    });
  });

  describe('setData', () => {
    it('should have a type of SET_DATA', () => {
      expect(setData().type).toEqual('SET_DATA');
    });
    it('should pass on the data we pass in', () => {
      var data = 'Yikes';
      expect(setData(data).data).toEqual(data);
    });
  });

  describe('setDates', () => {
    it('should have a type of SET_DATES', () => {
      expect(setDates().type).toEqual('SET_DATES');
    });
    it('should pass on the dates we pass in', () => {
      var dates = ['2016-01-01', '2016-01-02', '2016-01-03'];
      expect(setDates(dates).dates).toEqual(dates);
    });
  });

  describe('setTemps', () => {
    it('should have a type of SET_TEMPS', () => {
      expect(setTemps().type).toEqual('SET_TEMPS');
    });
    it('should pass on the temps we pass in', () => {
      var temps = ['25', '26', '27'];
      expect(setTemps(temps).temps).toEqual(temps);
    });
  });

});
