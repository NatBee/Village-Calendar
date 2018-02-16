//SET VILLAGE


export const logInReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOG_IN_USER':
    console.log('in');
      return {...action.user}
    case 'LOG_OUT_USER':
    console.log('out');
      return {}
    default:
      return state
  }
}
