export const calendarIDReducer = (state='primary', action) => {
  switch(action.type) {
    case 'SET_CALENDAR_ID':
      return action.calendarID
    case 'REMOVE_CALENDAR_ID':
      return state
    default:
      return state
  }
}