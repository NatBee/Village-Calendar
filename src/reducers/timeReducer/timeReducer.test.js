/* eslint-disable */
import { timeReducer } from './timeReducer';
import { mockData } from '../../mockData';
import * as actions from '../../actions';

describe('timeReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(timeReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with a new time', () => {
    const expected = mockData.time;
    expect(timeReducer(undefined, actions.setTimeAddEvent(mockData.time))).toEqual(expected);
  })
})