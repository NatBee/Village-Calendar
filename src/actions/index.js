export const logInUser = (user) => ({
  type: 'LOG_IN_USER',
  user
});

export const logOutUser = (user, events) => ({
  type: 'LOG_OUT_USER',
  user
});

export const loadUpcomingEvents = (events) => ({
  type: 'LOAD_EVENTS',
  events
});

export const removeAllEvents = (events) => ({
  type: 'REMOVE_EVENTS',
  events
})

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
})

export const removeToken = (token) => ({
  type: 'REMOVE_TOKEN',
  token
})

export const setCalendarID = (calendarID) => ({
  type: 'SET_CALENDAR_ID',
  calendarID
})

export const removeCalendarID = (calendarID) => ({
  type: 'REMOVE_CALENDAR_ID',
  calendarID
})

export const addPeopleToVillage = (village) => ({
  type: 'ADD_PEOPLE_TO_VILLAGE',
  village
})

export const removeVillageList = (village) => ({
  type: 'REMOVE_VILLAGE_LIST',
  village
})

export const setTimeAddEvent = (time) => ({
  type: 'SET_TIME',
  time
})

export const setEvent = (event) => ({
  type: "SET_EVENT",
  event
})

export const removeEvent = (event) => ({
  type: 'REMOVE_EVENT',
  event
})
