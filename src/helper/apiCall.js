import { apiKey, webClient, clientID } from './apiKey';

export const exchangeOAuth2Token = async (authentication) => {
  const accessToken = authentication.credential.accessToken;
  const endPoint = `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`;
  if(accessToken) {
    try{
      const response = await fetch(endPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'accessToken'
        }
      });
      const token = await response.json();
      if(token) {
        localStorage.setItem('ouath2-access-token', JSON.stringify(accessToken));
      }
    } catch (error) {
      throw Error;
    }
  }
}

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


//add a new calendar to acct
//calendar.calendar.list.insert

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

