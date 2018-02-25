/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { EventCard, mapStateToProps } from './EventCard';
import { mockData } from '../../mockData';

describe('EventCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<EventCard event={mockData.event}/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should map the store correctly', () => {
    const mockStore = {
      time: mockData.time,
      calendarID: mockData.calendarID,
      user: mockData.user,
      token: mockData.token  
    }
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  })

  it('should have a default state', () => {
    const wrapper = shallow(<EventCard event={mockData.event}/>);
    const expected = {
      title: '',
      summary: '',
      location: ''
    }
    expect(wrapper.state()).toEqual(expected);
  })
})