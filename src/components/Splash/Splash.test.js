/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';
import { shallow } from 'enzyme';

describe('splash', () => {
  let mockLocation;
  let wrapper;

  beforeEach(() => {
    mockLocation = {
      pathname: '/'
    };
    wrapper = shallow(<Splash location={ mockLocation } />);
    
  })

  it('should match snapshot', () => {
    const DATE_TO_USE = new Date('2016');
    const _Date = Date;
    global.Date = jest.fn(() => DATE_TO_USE);
    global.Date.UTC = _Date.UTC;
    global.Date.parse = _Date.parse;
    global.Date.now = _Date.now;
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a default state', () => {
    const expected = {clicked: false};
    expect(wrapper.state()).toEqual(expected);
  })

  it('should change state when the handleClick function is called', () => {
    expect(wrapper.state().clicked).toEqual(false)
    wrapper.instance().handleClick();
    expect(wrapper.state().clicked).toEqual(true)
  })

  it('should call the loginAlert function', () => {
    const spy = jest.spyOn(wrapper.instance(), 'loginAlert');
    wrapper.update();
    wrapper.instance().loginAlert()
    expect(spy).toHaveBeenCalled();
  })
}) 