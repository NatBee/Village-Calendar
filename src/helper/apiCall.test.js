/* eslint-disable */
import { getUpcomingEvents, createNewCalendar, addUsersToCalendar, addEventToCalendar, deleteEventFromCalendar, editEventOnCalendar } from './apiCall';
import { mockData } from '../mockData';

global.localStorage = {
  getItem(keyword) {
    if (!global.localStorage[keyword]) {
      return null;
    }
    return JSON.stringify(global.localStorage[keyword]);
  },
  setItem(keyword, value) {
    global.localStorage[keyword] = value;
  }
};

describe('getUpcomingEvents', () => {
  let url;
  let init;
  let expected;

  beforeEach(() => {
    localStorage.setItem('ouath2-access-token', mockData.token);
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockData.event
      })
    }));
    url = 'https://www.googleapis.com/calendar/v3/calendars';
    init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      } 
    };
    expected = `${url}/${mockData.calendarID}/events?access_token=${mockData.token}`;
  })

  it('fetch is called with the correct params', () => {
    const call = getUpcomingEvents(mockData.calendarID);
    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(expected, init);
  })

  it.skip('should return events', async () => {
    expect(await getUpcomingEvents(mockData.calendarID)).toEqual(mockData.events)
  })

  it('should throw an error if fetch fails', () => {
    localStorage.setItem('ouath2-access-token', mockData.token);
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const url = 'https://www.googleapis.com/calendar/v3/calendars';
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      } 
    };
    const expected = `${url}/${mockData.calendarID}/events?access_token=${mockData.token}`;
    const call = getUpcomingEvents(mockData.calendarID);
    expect(call).rejects.toEqual(Error);
  })
})

describe('createNewCalendar', () => {
  let url;
  let init;
  let expected;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockData.newCalendarResult
      })
    }));
    url = 'https://www.googleapis.com/calendar/v3/calendars';
    init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      },
      body: JSON.stringify({
        summary: 'Village Calendar',
        id: ''
      })
    };
    expected = `${url}?fields=id%2Csummary&access_token=${mockData.token}`;
  })

  it('fetch is called with the correct params', () => {
    const call = createNewCalendar(mockData);
    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(expected, init);
  })

  it.skip('should return a calendar ID on successful creation', async () => {
    const expected = 'mi8gsoe0epv9k74l27q35u2rag@group.calendar.google.com'
    expect(await createNewCalendar(mockData.token)).toEqual({})
  })

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const call = createNewCalendar(mockData);
    expect(call).rejects.toEqual(Error);
  })
})

describe('addUsersToCalendar', () => {
  let url;
  let init;
  let expected;
  let email;
  let state;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockData.addUserResult
      })
    }));
    url = 'https://www.googleapis.com/calendar/v3/calendars';
    state = {email: 'nataliesmontoya@gmail.com'};
    init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      },
      body: JSON.stringify({
        role: 'writer',
        scope: {
          type: 'group',
          value: state.email
        }
      })
    };
    expected = `${url}/${mockData.calendarID}/acl?fields=etag%2Cid%2Ckind%2Crole%2Cscope&access_token=${mockData.token}`;
  })

  it('fetch is called with the correct params', () => {
    addUsersToCalendar(mockData, state);
    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(expected, init);
  })

  it('should return user to a village', async () => {
    const expected = {
      "results": 
        {
          "etag": "00001519430838224000", 
          "id": "user:nataliesbarron@gmail.com", 
          "kind": "calendar#aclRule", 
          "role": "writer", 
          "scope": 
            {
              "type": "user", 
              "value": "nataliesbarron@gmail.com"
            }
        }
    };
    const mockToken = {token: 'ya29.GlxpBSxcPM6wYT3djOnQ7SjuuiI9r3CZZlhqq0njhl3mVFNi59h3tJ20qwmOnpf5wNdRh1aBweKC0s3N5VPxYRioKTGir3EB5-Znpn0U7yyACYskQIqc9NAZbX2QhA'}
    expect(await addUsersToCalendar(mockData, state)).toEqual(expected)
  })

  it('should return an error message if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const mockToken = {token: 'ya29.GlxpBSxcPM6wYT3djOnQ7SjuuiI9r3CZZlhqq0njhl3mVFNi59h3tJ20qwmOnpf5wNdRh1aBweKC0s3N5VPxYRioKTGir3EB5-Znpn0U7yyACYskQIqc9NAZbX2QhA'}
    const call = addUsersToCalendar(mockToken, state);
    expect(call).rejects.toEqual(Error);
  })
})

describe('addEventToCalendar', () => {
  let url;
  let state;
  let props;
  let expected;
  let init;
  let event = mockData.event

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(event)
    }));
    url = 'https://www.googleapis.com/calendar/v3/calendars';
    props = mockData;
    state = {
      title: "Super Fun Party",
      summary: "Fun with friends",
      location: 'Mi Casa'
    };
    init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      },
      body: JSON.stringify({
        description: state.summary,
        end: {
          dateTime: props.time.endTime
        },
        start: {
          dateTime: props.time.startTime
        },
        summary: state.title,
        location: state.location,
        reminders: {
          useDefault: false,
          overrides: [
            {method: 'email', 'minutes': 24 * 60},
            {method: 'popup', 'minutes': 10}
          ]
        }
      })
    };
    expected = `${url}/${mockData.calendarID}/events?fields=description%2Cend%2Clocation%2Creminders%2Cstart%2Csummary&access_token=${mockData.token}`;
  })

  it('fetch is called with correct params', () => {
    addEventToCalendar(props, state);
    expect(window.fetch).toHaveBeenCalled()
    expect(window.fetch).toHaveBeenCalledWith(expected, init)
  })

  it('should return a event object', async () => {
    expect(await addEventToCalendar(props, state)).toEqual(mockData.event)
  })

  it('should return an error message if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const mockToken = {token: 'ya29.GlxpBSxcPM6wYT3djOnQ7SjuuiI9r3CZZlhqq0njhl3mVFNi59h3tJ20qwmOnpf5wNdRh1aBweKC0s3N5VPxYRioKTGir3EB5-Znpn0U7yyACYskQIqc9NAZbX2QhA'}
    const call = addEventToCalendar(props, state);
    expect(call).rejects.toEqual(Error);
  })
})

describe('deleteEventFromCalendar', () => {
  let url;
  let props;
  let expected;
  let init;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(event)
    }));
    url = 'https://www.googleapis.com/calendar/v3/calendars';
    props = mockData;
    init = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      }
    };
    expected = `${url}/${mockData.calendarID}/events/${props.event.eventID}?access_token=${mockData.token}`;
  })

  it('fetch is called with correct params', () => {
    deleteEventFromCalendar(props);
    expect(window.fetch).toHaveBeenCalled()
    expect(window.fetch).toHaveBeenCalledWith(expected, init)
  })

  it('should return an error message if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const mockToken = {token: 'ya29.GlxpBSxcPM6wYT3djOnQ7SjuuiI9r3CZZlhqq0njhl3mVFNi59h3tJ20qwmOnpf5wNdRh1aBweKC0s3N5VPxYRioKTGir3EB5-Znpn0U7yyACYskQIqc9NAZbX2QhA'}
    const call = deleteEventFromCalendar(props);
    expect(call).rejects.toEqual(Error);
  })
})

describe('editEventOnCalendar', () => {
  let url;
  let state;
  let props;
  let expected;
  let init;
  let event = mockData.event

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(event)
    }));
    url = 'https://www.googleapis.com/calendar/v3/calendars';
    props = mockData;
    state = {
      title: "Super Fun Party",
      description: "Fun with friends",
      location: 'Mi Casa',
      start: "2018-02-09T09:00:00-07:00",
      end: "2018-02-09T10:00:00-07:00"
    };
    init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token'
      },
      body: JSON.stringify({
        description: state.description,
          end: {
            dateTime: state.end
          },
          start: {
            dateTime: state.start
          },
          summary: state.title,
          location: state.location,
          reminders: {
            useDefault: false,
            overrides: [
              {method: 'email', 'minutes': 24 * 60},
              {method: 'popup', 'minutes': 10}
            ]
          }
      })
    };
    expected = `${url}/${mockData.calendarID}/events/${props.event.eventID}?fields=description%2Cend%2Clocation%2Creminders%2Cstart%2Csummary&access_token=${mockData.token}`;
  })

  it('fetch is called with correct params', () => {
    editEventOnCalendar(props, state);
    expect(window.fetch).toHaveBeenCalled()
    expect(window.fetch).toHaveBeenCalledWith(expected, init)
  })

  it('should return a event object', async () => {
    expect(await editEventOnCalendar(props, state)).toEqual(mockData.event)
  })

  it('should return an error message if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));
    const mockToken = {token: 'ya29.GlxpBSxcPM6wYT3djOnQ7SjuuiI9r3CZZlhqq0njhl3mVFNi59h3tJ20qwmOnpf5wNdRh1aBweKC0s3N5VPxYRioKTGir3EB5-Znpn0U7yyACYskQIqc9NAZbX2QhA'}
    const call = editEventOnCalendar(props, state);
    expect(call).rejects.toEqual(Error);
  })
})

