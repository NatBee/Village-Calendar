/* eslint-disable */
import { tokenReducer } from './tokenReducer';
import { mockData } from '../../mockData';
import * as actions from '../../actions';

describe('tokenReducer', () => {
  it('should return a default state', () => {
    const expected = '';
    expect(tokenReducer(undefined, {})).toEqual(expected);
  })

  it('should return a state with a token', () => {
    const expected = mockData.token;
    expect(tokenReducer(undefined, actions.setToken(mockData.token))).toEqual(expected);
  })

  it('should return a state with token removed', () => {
    const expected = '';
    expect(tokenReducer(undefined, actions.removeToken(mockData.token))).toEqual(expected);
  })
})