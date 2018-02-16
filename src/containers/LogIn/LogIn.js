import React, { Component } from 'react';
import './LogIn.css';
import { logInUser } from '../../actions/index';
import { logOutUser } from '../../actions/index';
import { connect } from 'react-redux';

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

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

  logIn = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    const auth = firebase.auth()
    const authentication = await auth.signInWithPopup(provider)
    this.props.logInUser(authentication);
  } 

  logOut = () => {
    firebase.auth().signOut();
      const user = this.props.user;
      this.props.logOutUser(user);
  }

  buttonDisplay = () => {
    if(this.props.user.user === undefined) {
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





