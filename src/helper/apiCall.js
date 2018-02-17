import { apiKey, webClient, clientID } from './apiKey';

export const exchangeOAuth2Token = async (authentication) => {
  console.log(authentication.credential.accessToken)
  const accessToken = authentication.credential.accessToken;
  const endPoint = `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`;
  console.log(endPoint)

  if(accessToken) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', endPoint);
    console.log(xhr)
    xhr.onreadystatechange = await function(e) {
      const response = xhr.response ? JSON.parse(xhr.response) : ''
      console.log(response);
      console.log(response["aud"]);
      if (xhr.status === 200 && response["aud"] === webClient) {
        console.log('doing it')
        localStorage.setItem('ouath2-access-token', JSON.stringify(accessToken));
      } else {
        console.log('There was an error processing the token')
        }
    }
      xhr.send(null)
  }
}

//login

//return list of calendars in google acct
//calendar.calendar.list.list

//add a new calendar to acct
//calendar.calendar.list.insert

//returns specific calendar from acct
//calendar.calendar.list.get

export const listUpcomingEvents = async () => {
  const storedAccessToken = JSON.parse(localStorage.getItem('ouath2-access-token')) 
  if(storedAccessToken) {
    const xhr = new XMLHttpRequest();
    const calendarId = 'nataliesbarron%40gmail.com';
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?access_token=${storedAccessToken}`;
    xhr.open('GET', url);
    xhr.onreadystatechange = (e) => {
      console.log(xhr.response);
    };
    xhr.send(null);
  }
}

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

