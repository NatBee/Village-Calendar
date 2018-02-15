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

  toggleGoogleSignIn = () => {
    if(!firebase.auth().currentUser) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/calendar');
      provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
      firebase.auth().signInWithRedirect(provider);

      this.setState({signedIn: true});
    } else {
      firebase.auth().signOut();

      this.setState({signedIn: false})
    }
// debugger

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
    if(this.state.signedIn === false) {
      return(
        <button className="login" onClick={this.toggleGoogleSignIn}>Login</button>
      )
    } else {
      return (
        <button className="logout" onClick={this.toggleGoogleSignIn}>Sign Out</button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.buttonDisplay()}
      </div>
    )
  }
}

export default LogIn;





