import React from 'react';
import renderer from 'react-test-renderer';
import { fromJS } from 'immutable';
import { App } from '../App';

describe('components', () => {

  describe('<App />', () => {
    it('renders correctly', () => {
      var tree = renderer.create(<App redux={fromJS({})} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

});
