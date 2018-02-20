const rootUrl = 'https://www.googleapis.com/calendar/v3/calendars';

export const getUpcomingEvents = async (id) => {
  const calendarId = id;
  const token = JSON.parse(localStorage.getItem('ouath2-access-token'));
  const url = `${rootUrl}/${calendarId}/events?access_token=${token}`;
  if(token) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token'
        }
      });
      const eventList = await response.json();
      const events = [];
      eventList.items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
          description: event.description,
          eventID: event.id,
          location: event.location
        })
        
      })
      return events;
    } catch (error) {
      throw Error;
    }
  }
}

export const createNewCalendar = async (props) => {
  const token = props.token;
  const url = `${rootUrl}?fields=id%2Csummary&access_token=${token}`;

  if(token) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token'
        },
        body: JSON.stringify({
          summary: 'Village App Calendar',
          id: ''
        })
      });
      const calendarResponse = await response.json();
      const calendarID = calendarResponse.id;
      return calendarID
    } catch (error) {
      throw Error;
    }
  }
}

export const addUsersToCalendar = async (props, state) => {
  const token = props.token;
  const url = `${rootUrl}/${props.calendarID}/acl?fields=etag%2Cid%2Ckind%2Crole%2Cscope&access_token=${token}`;

  if(token) {
    try {
      const response = await fetch(url, {
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
      });
      const result = await response.json();
      return result
    } catch (error) {
      throw Error;
    }
  }
}

export const addEventToCalendar = async (props, state) => {
  const calendarID = props.calendarID;
  const token = props.token;
  const time = props.time;
  const url = `${rootUrl}/${calendarID}/events?fields=email%2Cdescription%2Cend%2Clocation%2Creminders%2Cstart%2Csummary&access_token=${token}`;
  if(token) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token'
        },
        body: JSON.stringify({
          description: state.summary,
          end: {
            dateTime: time.endTime
          },
          start: {
            dateTime: time.startTime
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
      });
      const result = await response.json();
      return result
    } catch (error) {
      throw Error;
    }
  }
} 


export const deleteEventFromCalendar = async (props) => {
  const token = props.token
  const url = `${rootUrl}/${props.calendarID}/events/${props.event.eventID}?access_token=${token}`;
  if(token) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token'
        },
      });
      return response;
    } catch (error) {
      throw Error;
    }
  }
}

export const editEventOnCalendar = async (props, state) => {
  const token = props.token
  const url = `${rootUrl}/${props.calendarID}/events/${props.event.eventID}?fields=description%2Cend%2Clocation%2Creminders%2Cstart%2Csummary&access_token=${token}`;
  if(token) {
    try {
      const response = await fetch(url, {
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
      });
      const result = await response.json();
      return result
    } catch (error) {
      throw Error;
    }
  }
}