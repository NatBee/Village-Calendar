/* eslint-disable */
import { eventReducer } from './eventReducer';
import { mockData } from '../../mockData';
import * as actions from '../../actions';

describe('eventReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(eventReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with an event', () => {
    const expected = mockData.event;
    expect(eventReducer(undefined, actions.setEvent(mockData.event))).toEqual(expected);
  })

  it('should return the state with an event removed', () => {
    const expected = {};
    expect(eventReducer(undefined, actions.removeEvent(mockData.event))).toEqual(expected);
  })
})