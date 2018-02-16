const firebase = require("firebase/app");
    require("firebase/auth");
    require("firebase/database");

export const logInUser = (user) => ({
  type: 'LOG_IN_USER',
  user
})

export const logOutUser = (user) => ({
  type: 'LOG_OUT_USER',
  user
})

export const userFetchData = (provider) => {
  return async (dispatch) => {
   
    const auth = await firebase.auth();

    const authentication = await auth.signInWithPopup(provider)
       
    await dispatch(logInUser(authentication));  
  }
}