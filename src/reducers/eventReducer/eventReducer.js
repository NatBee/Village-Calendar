export const eventReducer = (state={}, action) => {
  switch(action.type) {
    case 'SET_EVENT':
      return action.event
    case 'REMOVE_EVENT':
      return {}
    default:
      return state
  }
}