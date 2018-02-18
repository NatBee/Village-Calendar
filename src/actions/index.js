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
