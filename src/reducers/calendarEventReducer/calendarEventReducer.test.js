/* eslint-disable */
import { calendarEventReducer } from './calendarEventReducer';
import * as actions from '../../actions';
import { mockData } from '../../mockData';

describe('calendarEventReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(calendarEventReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with events loaded', () => {
    const expected = mockData.events;
    expect(calendarEventReducer(undefined, actions.loadUpcomingEvents(mockData.events))).toEqual(expected);
  })

  it('should return the state with events removed', () => {
    const expected = [];
    expect(calendarEventReducer(undefined, actions.removeAllEvents(mockData.events))).toEqual(expected)
  })
})