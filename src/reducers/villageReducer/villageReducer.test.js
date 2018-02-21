/* eslint-disable */
import { villageReducer } from './villageReducer';
import { mockData } from '../../mockData';
import * as actions from '../../actions';

describe('villageReducer', () => {
  it('should return a default state', () => {
    const expected = [];
    expect(villageReducer(undefined, {})).toEqual(expected);
  })

  it('should return a state with people added to village', () => {
    const expected = [mockData.village];
    expect(villageReducer(undefined, actions.addPeopleToVillage(mockData.village))).toEqual(expected);
  })

  it('should return a state with people removed from village', () => {
    const expected = [];
    expect(villageReducer(undefined, actions.removeVillageList(mockData.village))).toEqual(expected);
  })
})