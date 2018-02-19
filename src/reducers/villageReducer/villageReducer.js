export const villageReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_PEOPLE_TO_VILLAGE':
      return [...state, action.village]
    case 'REMOVE_VILLAGE_LIST':
      return []
    default: 
      return state
  }
}