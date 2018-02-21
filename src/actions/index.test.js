/* eslint-disable */
import * as actions from './index';

describe('all actions', () => {
  let user;
  let events;

  beforeAll(() => {
    user = {user: 'Dk', credential: 'Xg', additionalUserInfo: 'Pg', operationType: "signIn"};
    events = [
      {
        start: "2018-02-09T09:00:00-07:00",
        end: "2018-02-09T10:00:00-07:00",
        title: "Booked: Natalie nataliesmontoya@gmail.com",
        description: "Booking made at 2/6/18 10:36 AM",
        eventID: "7js6e24fo0kin4qcotoegu37hg",
        location: 'Turing'
      }
    ]
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



})