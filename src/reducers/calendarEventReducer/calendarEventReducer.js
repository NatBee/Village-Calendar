//LOAD UPCOMING EVENTS
//ADD EVENT
//DELETE EVENT
//EDIT EVENT

export const calendarEventReducer = (state=[], action) => {
  switch(action.type) {
    case 'LOAD_EVENTS':
      return action.events
    default:
      return state
  }
}