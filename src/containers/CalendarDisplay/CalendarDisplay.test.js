/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { CalendarDisplay, mapStateToProps, mapDispatchToProps } from './CalendarDisplay';
import { mockData } from '../../mockData';

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

describe('CalendarDisplay', () => {
  let wrapper;
  const DATE_TO_USE = new Date('2016');
  const _Date = Date;
  global.Date = jest.fn(() => DATE_TO_USE);
  global.Date.UTC = _Date.UTC;
  global.Date.parse = _Date.parse;
  global.Date.now = _Date.now;

  beforeEach(() => {
    localStorage.setItem('ouath2-access-token', mockData.token);
    wrapper = shallow(<CalendarDisplay events={ mockData.events } />);
  })

  it('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      events: mockData.events,
      time: mockData.time,
      calendarID: mockData.calendarID,
      event: mockData.event,
      token: mockData.token
    }
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  })

  it('should call the dispatch function when using a loadUpcomingEvents from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadUpcomingEvents();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using setTimeAddEvent function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.setTimeAddEvent();
    expect(mockDispatch).toHaveBeenCalled();
  })  

  it('should call the dispatch function when using setEvent function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.setEvent();
    expect(mockDispatch).toHaveBeenCalled();
  })  

  it('should call the dispatch function when using removeEvent function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeEvent();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should have a default state', () => {
    const expected = {
      eventCard: 'calendar'
    }
    expect(wrapper.state()).toEqual(expected);
  })
})