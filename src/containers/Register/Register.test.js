/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { Register, mapStateToProps, mapDispatchToProps } from './Register';
import { mockData } from '../../mockData';

describe('Register', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<Register/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      calendarID: mockData.calendarID,
      village: mockData.village,
      token: mockData.token  
    }
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  })

  it('should call the dispatch function when using setCalendarID function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.setCalendarID();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should call the dispatch function when using addPeopleToVillage function from mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addPeopleToVillage();
    expect(mockDispatch).toHaveBeenCalled();
  })

  it('should have a default state', () => {
    const wrapper = shallow(<Register/>);
    const expected = {
      name: '',
      email: '',
      newCalendar: false
    }
    expect(wrapper.state()).toEqual(expected);
  })
})