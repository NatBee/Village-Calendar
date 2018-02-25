/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { EditEventCard, mapStateToProps} from './EditEventCard';
import { mockData } from '../../mockData';

describe('EditEventCard', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<EditEventCard event={ mockData.event }/>);
    expect(wrapper).toMatchSnapshot();
  })

  it('should map to the store correctly', () => {
    const mockStore = {
      event: mockData.event,
      calendarID: mockData.calendarID,
      token: mockData.token
    }
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  })

  it('should have a default state of event data', () => {
    const wrapper = shallow(<EditEventCard event={ mockData.event }/>);
    const expected = {
      title: mockData.event.title,
      start: mockData.event.start,
      end: mockData.event.end,
      description: mockData.event.description,
      location: mockData.event.location
    }
    expect(wrapper.state()).toEqual(expected);
  })

})