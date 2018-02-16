import { apiKey, webClient } from './apiKey';

//login

//return list of calendars in google acct
//calendar.calendar.list.list

//add a new calendar to acct
//calendar.calendar.list.insert

//returns specific calendar from acct
//calendar.calendar.list.get

export const listUpcomingEvents = async () => {

  gapi.client.init({
    'apiKey': apiKey,
    'clientId': webClient
  }).then(() => {
    return gapi.client.request({
      'path': 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
    })
  }).then((response) => {
    console.log(response.result)
  }, (reason) => {
    console.log('Error: ' + reason.result.error.message)
  });

  gapi.load('client', start);

//   const initialFetch = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList'
// )
//   const result = await initialFetch.json();

//   console.log(result)
  // console.log(webClient)
  //calendar.events.list
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

