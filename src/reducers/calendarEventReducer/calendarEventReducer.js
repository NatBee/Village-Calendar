export const calendarEventReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOAD_EVENTS':
      return action.events
    case 'REMOVE_EVENTS':
      return []
    default:
      return state
  }
}