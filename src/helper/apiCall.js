export const getUpcomingEvents = async () => {
  const token = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  const calendarId = 'primary';
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?access_token=${token}`;
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

export const createNewCalendar = async () => {
  const token = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  const url = `https://www.googleapis.com/calendar/v3/calendars?fields=id%2Csummary&access_token=${token}`;

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

export const addUsersToCalendar = async (id, email) => {
  const token = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  const calendarID = id;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/acl?fields=etag%2Cid%2Ckind%2Crole%2Cscope&access_token=${token}`;

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
            value: email
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

export const addEventToCalendar = async (id, time, title, summary, location) => {
  const token = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  const calendarID = id;
  const startTime = time.startTime;
  const endTime = time.endTime;
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?fields=email%2Cdescription%2Cend%2Clocation%2Creminders%2Cstart%2Csummary&access_token=${token}`;
  if(token) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'token'
        },
        body: JSON.stringify({
          description: summary,
          end: {
            dateTime: endTime
          },
          start: {
            dateTime: startTime
          },
          summary: title,
          location: location,
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

export const deleteEventFromCalendar = async (calendarID, eventID) => {
  const token = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/${eventID}?access_token=${token}`;
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

export const editEventOnCalendar = async (calendarID, eventID, state) => {
  const token = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  console.log(calendarID);
  console.log(eventID);
  console.log(state);
  console.log(state.description);

  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events/${eventID}?fields=description%2Cend%2Clocation%2Creminders%2Cstart%2Csummary&access_token=${token}`;
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