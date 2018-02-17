export const logInUser = (user) => ({
  type: 'LOG_IN_USER',
  user
});

export const logOutUser = (user) => ({
  type: 'LOG_OUT_USER',
  user
});

export const loadCalenderEvents = () => ({
  type: 'LOAD_EVENTS',
})