import React, { Component } from 'react';
import './LogIn.css';
import { logInUser } from '../../actions/index';
import { logOutUser } from '../../actions/index';
import { connect } from 'react-redux';

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

      // Initialize Firebase
var config = {
  apiKey: "AIzaSyABnqZAeuir1PknSFNc09FQofJ9OzfglHQ",
  authDomain: "village-calendar-app.firebaseapp.com",
  databaseURL: "https://village-calendar-app.firebaseio.com",
  projectId: "village-calendar-app",
  storageBucket: "",
  messagingSenderId: "184201738089"
};
firebase.initializeApp(config);

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  logIn = () => {
console.log(this.props)
    if(!firebase.auth().currentUser) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/calendar');
      provider.addScope('https://www.googleapis.com/auth/calendar.readonly');

      const auth = firebase.auth()

      auth.signInWithPopup(provider)
      .then((result) => {
      const user = result.user;
      this.setState({
       user
      });
      // firebase.auth().signInWithRedirect(provider);
      });
      // return this.props.logInUser(user)
console.log(this.props);

      // this.setState({user});
    } 
  }


  logOut = () => {
    firebase.auth().signOut();
      this.setState({user: null})
  }


 

  redirectResult = async () => {
    // debugger;
    await firebase.auth().getRedirectResult().then(function(result) {
      if(result.credential) {
        const token = result.credential.accessToken;
      }

      const user = result.user;
      // if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // ...
    
  // The signed-in user info.
    }).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // The email of the user's account used.
    var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  // ...

    if(errorCode === 'auth/account-exists-with-different-credential') {
      alert('already signed up')
    //how do I handle multiple auth providers and link user's accounts
    //here
    } else {
      console.error(error)
    }
    });
  }



  buttonDisplay = () => {
    if(!this.state.user) {
      return(
        <button className="login" onClick={this.logIn}>Log In</button>
      )
    } else {
      return (
        <button className="logout" onClick={this.logOut}>Log Out</button>
      )
    }
  }

  render() {
    console.log(this.state.user)
    return (
      <div>
        {this.buttonDisplay()}
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  user: store.user
})

export const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(logInUser(user)),
  logOutUser: (user) => dispatch(logOutUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);





