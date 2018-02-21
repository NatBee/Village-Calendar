/* eslint-disable */
import { calendarIDReducer } from './calendarIDReducer';
import { mockData } from '../../mockData';
import * as actions from '../../actions';

describe('calendarIDReducer', () => {
  it('should return the default state', () => {
    const expected = 'primary';
    expect(calendarIDReducer(undefined, {})).toEqual(expected);
  })

  it('should return the state with a new calendarID', () => {
    const expected = mockData.calendarID;
    expect(calendarIDReducer(undefined, actions.setCalendarID(mockData.calendarID))).toEqual(expected);
  })

  it('should return the state with calendarID removed', () => {
    const expected = 'primary';
    expect(calendarIDReducer(undefined, actions.removeCalendarID(mockData.calendarID))).toEqual(expected);
  })
})