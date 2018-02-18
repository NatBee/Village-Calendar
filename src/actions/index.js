export const logInUser = (user) => ({
  type: 'LOG_IN_USER',
  user
});

export const logOutUser = (user) => ({
  type: 'LOG_OUT_USER',
  user
});

export const loadUpcomingEvents = (events) => ({
  type: 'LOAD_EVENTS',
  events
});

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  token
})