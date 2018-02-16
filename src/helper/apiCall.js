import { apiKey, webClient } from './apiKey';

//login

//return list of calendars in google acct
//calendar.calendar.list.list

//add a new calendar to acct
//calendar.calendar.list.insert

//returns specific calendar from acct
//calendar.calendar.list.get

export const listUpcomingEvents = async () => {
  
  const calendarId = 'nataliesbarron%40gmail.com';
  
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
  try{
    console.log(url);
  
    const initialFetch = await fetch(url);
    const result = await initialFetch.json();
   
    console.log(initialFetch)
    console.log(result)
  } catch(error) {
    throw error
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

