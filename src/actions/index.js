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
