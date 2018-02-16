import React, { Component } from 'react';
import './LogIn.css';
import { logInUser } from '../../actions/index';
import { logOutUser } from '../../actions/index';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import { config } from '../../helper/apiKey';

firebase.initializeApp(config);

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  logIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    const auth = firebase.auth()
    const authentication = await auth.signInWithPopup(provider)
    console.log(authentication)
    this.props.logInUser(authentication);
    //add fetch for upcoming calendar events
    //add calendar events to store 
    //add redirect to calendarDisplay
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





