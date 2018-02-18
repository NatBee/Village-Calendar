export const calendarIDReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_CALENDAR_ID':
      return action.calendarID
    case 'REMOVE_CALENDAR_ID':
      return ''
    default:
      return state
  }
}