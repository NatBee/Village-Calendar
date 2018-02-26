const rootUrl = 'https://www.googleapis.com/calendar/v3/calendars';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'token'
}

export const getUpcomingEvents = async (id) => {
  try {
    const calendarId = id;
    const token = JSON.parse(localStorage.getItem('ouath2-access-token'));
    const url = `${rootUrl}/${calendarId}/events?access_token=${token}`;
    if(token) {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
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
        return events
      })
      return events;
    } 
  } catch (error) {
    console.log(error);
      throw error;
    }
}

export const createNewCalendar = async (props) => {
  try {
    const token = props.token;
    const url = `${rootUrl}?fields=id%2Csummary&access_token=${token}`;
    if(token) {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          summary: 'Village Calendar',
          id: ''
        })
      });
      const calendarResponse = await response.json();
      const calendarID = calendarResponse.id;
      return calendarID;
    } 
  } catch (error) {
      throw error;
    }
}

export const addUsersToCalendar = async (props, state) => {
  try {
    const token = props.token;
    const fields = 'fields=etag%2Cid%2Ckind%2Crole%2Cscope'
    const url = `${rootUrl}/${props.calendarID}/acl?${fields}&access_token=${token}`;
    if(token) {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
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
    } 
  } catch (error) {
      throw error;
    }
}

export const addEventToCalendar = async (props, state) => {
  try {
    const token = props.token;
    const fields = 'fields=description%2Cend%2Clocation%2Creminders%2Cstart%2Csummary';
    const url = `${rootUrl}/${props.calendarID}/events?${fields}&access_token=${token}`;
    if(token) {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
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
      });
      const result = await response.json();
      return result
    } 
  } catch (error) {
      throw error;
    }
} 


export const deleteEventFromCalendar = async (props) => {
  try {
    const token = props.token
    const url = `${rootUrl}/${props.calendarID}/events/${props.event.eventID}?access_token=${token}`;
    if(token) {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: headers,
      });
      return response;
    } 
  } catch (error) {
      throw error;
    }
}

export const editEventOnCalendar = async (props, state) => {
  try {
    const token = props.token
    const fields = 'fields=description%2Cend%2Clocation%2Creminders%2Cstart%2Csummary';
    const url = `${rootUrl}/${props.calendarID}/events/${props.event.eventID}?${fields}&access_token=${token}`;
    if(token) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
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
    } 
  } catch (error) {
      throw error;
    }
}