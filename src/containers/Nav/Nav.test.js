/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav';
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

describe('Nav', () => {

  it('should match the snapshot', () => {
    localStorage.setItem('ouath2-access-token', mockData.token);
    const wrapper = shallow(<Nav setToken={jest.fn()}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      user: mockData.user,
      events: mockData.events,
      token: mockData.token,
      calendarID: mockData.calendarID,
      village: mockData.village
    }
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  })

  it('should call the dispatch function when using logOutUser function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logOutUser();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using removeAllEvents function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeAllEvents();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using removeToken function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeToken();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using logInUser function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.logInUser();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using setToken function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.setToken();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using removeCalendarID function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeCalendarID();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using removeVillageList function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.removeVillageList();
    expect(mockDispatch).toHaveBeenCalled();
  })
})