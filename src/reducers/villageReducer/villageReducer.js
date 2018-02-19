export const villageReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PEOPLE_TO_VILLAGE':
      return [...state, action.village]
    default: 
      return state
  }
}