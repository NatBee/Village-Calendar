/* eslint-disable */
import * as actions from './index';

describe('all actions', () => {
  let user;
  let events;
  let token;
  let calendarID;
  let village;
  let time;
  let event;

  beforeAll(() => {
    user = {
      user: 'Dk', 
      credential: 'Xg', 
      additionalUserInfo: 'Pg', 
      operationType: "signIn"
    };
    events = [
      {
        start: "2018-02-09T09:00:00-07:00",
        end: "2018-02-09T10:00:00-07:00",
        title: "Super Fun Party",
        description: "Fun with friends",
        eventID: "7js6e24fo0kin4qcotoegu37hg",
        location: 'Mi Casa'
      }
    ];
    token = 'token_number';
    calendarID = 'calendarID';
    village = [{natalie: 'nataliesmontoya@gmail.com'}];
    time = {
      startTime: "2018-02-28T19:00:00.000Z", 
      endTime: "2018-02-28T20:00:00.000Z"
    };
    event = {
        start: "2018-02-09T09:00:00-07:00",
        end: "2018-02-09T10:00:00-07:00",
        title: "Super Fun Party",
        description: "Fun with friends",
        eventID: "7js6e24fo0kin4qcotoegu37hg",
        location: 'Mi Casa'
      }
  })

  it('should return a type of LOG_IN_USER, with a user', () => {
    const expected = {
      type: 'LOG_IN_USER',
      user
    }
    expect(actions.logInUser(user)).toEqual(expected);
  })

  it('should return a type of LOG_OUT_USER, with a user', () => {
    const expected = {
      type: 'LOG_OUT_USER',
      user
    }
    expect(actions.logOutUser(user)).toEqual(expected);
  })

  it('should return a type of LOAD_EVENTS, with events', () => {
    const expected = {
      type: 'LOAD_EVENTS',
      events
    }
    expect(actions.loadUpcomingEvents(events)).toEqual(expected);
  })

  it('should return a type of REMOVE_EVENTS, with events', () => {
    const expected = {
      type: 'REMOVE_EVENTS',
      events
    }
    expect(actions.removeAllEvents(events)).toEqual(expected);
  })

  it('should return a type of SET_TOKEN, with token', () => {
    const expected = {
      type: 'SET_TOKEN',
      token
    }
    expect(actions.setToken(token)).toEqual(expected);
  })

  it('should return a type of REMOVE_TOKEN, with token', () => {
    const expected = {
      type: 'REMOVE_TOKEN',
      token
    }
    expect(actions.removeToken(token)).toEqual(expected);
  })

  it('should return a type of SET_CALENDAR_ID, with a calendarID', () => {
    const expected = {
      type: 'SET_CALENDAR_ID',
      calendarID
    }
    expect(actions.setCalendarID(calendarID)).toEqual(expected);
  })

  it('should return a type of REMOVE_CALENDAR_ID, with a calendarID', () => {
    const expected = {
      type: 'REMOVE_CALENDAR_ID',
      calendarID
    }
    expect(actions.removeCalendarID(calendarID)).toEqual(expected);
  })

  it('should return a type of ADD_PEOPLE_TO_VILLAGE, with a village', () => {
    const expected = {
      type: 'ADD_PEOPLE_TO_VILLAGE',
      village
    }
    expect(actions.addPeopleToVillage(village)).toEqual(expected);
  })

  it('should return a type of REMOVE_VILLAGE_LIST, with a village', () => {
    const expected = {
      type: 'REMOVE_VILLAGE_LIST',
      village
    }
    expect(actions.removeVillageList(village)).toEqual(expected);
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

  it('should return a type of REMOVE_EVENT, with an event', () => {
    const expected = {
      type: 'REMOVE_EVENT',
      event
    }
    expect(actions.removeEvent(event)).toEqual(expected)
  })
})