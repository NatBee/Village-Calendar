export const getUpcomingEvents = async () => {
  const storedAccessToken = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  const calendarId = 'primary';
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?access_token=${storedAccessToken}`;
  if(storedAccessToken) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'storedAccessToken'
        }
      });
      const eventList = await response.json();
      const events = [];
      eventList.items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
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
          'Authorization': 'storedAccessToken'
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
  const calendarID = id
  const userEmail = email
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/acl?fields=etag%2Cid%2Ckind%2Crole%2Cscope&access_token=${token}`;

  if(token) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'storedAccessToken'
        },
        body: JSON.stringify({
          role: 'writer',
          scope: {
            type: 'group',
            value: email
          }
        })
      });
      console.log(response)
      const result = await response.json();
      console.log(result)
      return result
    } catch (error) {
      throw Error;
    }
  }
}

//if can get calendar ID from theis call continue
//else need to do next step to get calendar ID
  //returns specific calendar from acct
  //calendar.calendar.list.get

 //adds an event
 //calendar.events.insert

//deletes an event
 //calendar.events.delete

 //updates an event
 //calendar.events.update

//returns an event
 //calendar.events.get

 //imports an event to another calendar
 //calendar.events.import



//registration



// giveAccessControl = () => {
//   //calendar.acl.insert
// }

// removeAccessControl = () => {
//   //calendar.acl.delete
// }

// listAccessControl = () => {
//   //calendar.acl.list
// }

