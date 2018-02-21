/* eslint-disable */
import { logInReducer } from './logInReducer';
import { mockData } from '../../mockData';
import * as actions from '../../actions';

describe('logInReducer', () => {
  it('should return a default state', () => {
    const expected = {};
    expect(logInReducer(undefined, {})).toEqual(expected);
  })

  it('should return a state with user logged in', () => {
    const expected = mockData.user;
    expect(logInReducer(undefined, actions.logInUser(mockData.user))).toEqual(expected);
  })

  it('should return a state with the user logged out', () => {
    const expected = {};
    expect(logInReducer(undefined, actions.logOutUser(mockData.user))).toEqual(expected);
  })
})