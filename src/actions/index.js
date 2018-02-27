export const logInUser = (user) => ({
  type: 'LOG_IN_USER',
  user
});

export const logOutUser = () => ({
  type: 'LOG_OUT_USER'
});

export const loadUpcomingEvents = (events) => ({
  type: 'LOAD_EVENTS',
  events
});

export const removeAllEvents = () => ({
  type: 'REMOVE_EVENTS'
})

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
})

export const removeToken = () => ({
  type: 'REMOVE_TOKEN'
})

export const setCalendarID = (calendarID) => ({
  type: 'SET_CALENDAR_ID',
  calendarID
})

export const removeCalendarID = () => ({
  type: 'REMOVE_CALENDAR_ID'
})

export const addPeopleToVillage = (village) => ({
  type: 'ADD_PEOPLE_TO_VILLAGE',
  village
})

export const removeVillageList = () => ({
  type: 'REMOVE_VILLAGE_LIST'
})

export const setTimeAddEvent = (time) => ({
  type: 'SET_TIME',
  time
})

export const setEvent = (event) => ({
  type: "SET_EVENT",
  event
})

export const removeEvent = () => ({
  type: 'REMOVE_EVENT'
})
