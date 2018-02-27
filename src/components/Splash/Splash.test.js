/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import { shallow } from 'enzyme';

describe('splash', () => {
  it('should match snapshot', () => {
    const DATE_TO_USE = new Date('2016');
    const _Date = Date;
    global.Date = jest.fn(() => DATE_TO_USE);
    global.Date.UTC = _Date.UTC;
    global.Date.parse = _Date.parse;
    global.Date.now = _Date.now;

    const mockLocation = {
      pathname: '/'
    }
    const wrapper = shallow(<Splash location={ mockLocation }/>);
    expect(wrapper).toMatchSnapshot();
  })
}) 