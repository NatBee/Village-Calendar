/* eslint-disable */
import * as actions from './index';
import { mockData } from '../mockData';

describe('all actions', () => {
  let user = mockData.user;
  let events = mockData.events;
  let token = mockData.token;
  let calendarID = mockData.calendarID;
  let village = mockData.village;
  let time = mockData.time;
  let event = mockData.event;

  it('should return a type of LOG_IN_USER, with a user', () => {
    const expected = {
      type: 'LOG_IN_USER',
      user
    }
    expect(actions.logInUser(user)).toEqual(expected);
  })

  it('should return a type of LOG_OUT_USER', () => {
    const expected = {
      type: 'LOG_OUT_USER'
    }
    expect(actions.logOutUser()).toEqual(expected);
  })

  it('should return a type of LOAD_EVENTS, with events', () => {
    const expected = {
      type: 'LOAD_EVENTS',
      events
    }
    expect(actions.loadUpcomingEvents(events)).toEqual(expected);
  })

  it('should return a type of REMOVE_EVENTS', () => {
    const expected = {
      type: 'REMOVE_EVENTS'
    }
    expect(actions.removeAllEvents()).toEqual(expected);
  })

  it('should return a type of SET_TOKEN, with token', () => {
    const expected = {
      type: 'SET_TOKEN',
      token
    }
    expect(actions.setToken(token)).toEqual(expected);
  })

  it('should return a type of REMOVE_TOKEN', () => {
    const expected = {
      type: 'REMOVE_TOKEN'
    }
    expect(actions.removeToken()).toEqual(expected);
  })

  it('should return a type of SET_CALENDAR_ID, with a calendarID', () => {
    const expected = {
      type: 'SET_CALENDAR_ID',
      calendarID
    }
    expect(actions.setCalendarID(calendarID)).toEqual(expected);
  })

  it('should return a type of REMOVE_CALENDAR_ID', () => {
    const expected = {
      type: 'REMOVE_CALENDAR_ID'
    }
    expect(actions.removeCalendarID()).toEqual(expected);
  })

  it('should return a type of ADD_PEOPLE_TO_VILLAGE, with a village', () => {
    const expected = {
      type: 'ADD_PEOPLE_TO_VILLAGE',
      village
    }
    expect(actions.addPeopleToVillage(village)).toEqual(expected);
  })

  it('should return a type of REMOVE_VILLAGE_LIST', () => {
    const expected = {
      type: 'REMOVE_VILLAGE_LIST'
    }
    expect(actions.removeVillageList()).toEqual(expected);
  })

  it('should return a type of SET_TIME, with a time', () => {
    const expected = {
      type: 'SET_TIME',
      time
    }
    expect(actions.setTimeAddEvent(time)).toEqual(expected);
  })

  it('should return a type of SET_EVENT, with an event', () => {
    const expected ={
      type: 'SET_EVENT',
      event
    }
    expect(actions.setEvent(event)).toEqual(expected);
  })

  it('should return a type of REMOVE_EVENT', () => {
    const expected = {
      type: 'REMOVE_EVENT'
    }
    expect(actions.removeEvent()).toEqual(expected)
  })
})