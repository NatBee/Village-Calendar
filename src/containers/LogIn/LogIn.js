import React, { Component } from 'react';
import './LogIn.css';
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
      signedIn: false
    }
  }


  googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    provider.addScope('https://www.googleapis.com/auth/calendar.readonly');

    firebase.auth().signInWithRedirect(provider);

    this.setState({signedIn: true})
  }   

  redirect = () => {
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
    // ...
    }
  // The signed-in user info.
    var user = result.user;
    }).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // The email of the user's account used.
    var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  // ...
    });
  }

  googleSignOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });

    this.setState({signedIn: false})
  }

  render() {
    return (
      <form>
        <button className="login">{this.googleSignIn()}</button>
        <button className="logout">{this.googleSignOut()}</button>
      </form>
    )
  }
}

export default LogIn;





