import React, { Component } from 'react';
import { logOutUser, removeAllEvents, removeToken, logInUser, setToken, removeCalendarID, removeVillageList } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Nav.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { config } from '../../helper/apiKey';
import PropTypes from 'prop-types';

firebase.initializeApp(config);

class Nav extends Component {

  componentDidMount = () => {
    const token = JSON.parse(localStorage.getItem('ouath2-access-token'));
    if(token) {
      this.props.setToken(token)
    }
  }

  logIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    const auth = firebase.auth();
    const authentication = await auth.signInWithPopup(provider);
    this.props.logInUser(authentication);
    const token = authentication.credential.accessToken;
    localStorage.setItem('ouath2-access-token', JSON.stringify(token));
    this.props.setToken(token);
    this.pageDirect();
  } 

  pageDirect = () => {
    if(this.props.history.location.pathname === '/') {
      this.props.history.push('/register');
    } else if(this.props.history.location.pathname === '/calendar') {
      this.props.history.push('/calendar')
    } else {
      this.props.history.push('/register');
    }
  } 

  buttonDisplay = () => {
    if(this.props.token === '') {
      return(
        <button className="login" onClick={this.logIn}>Google Log In</button>
      )
    } else {
      return(
        <div>
          <button onClick={this.logOut}>Log Out</button>
        </div>
      )
    }
  }

  logOut = () => {
    firebase.auth().signOut();
    const user = this.props.user;
    this.props.logOutUser(user);
    this.props.removeAllEvents(this.props.events);
    this.props.removeToken(this.props.token);
    this.props.removeCalendarID(this.props.calendarID);
    this.props.removeVillageList(this.props.village);
    localStorage.clear();
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <h1>VILLAGE</h1>
        {this.buttonDisplay()}
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  user: store.user,
  events: store.events,
  token: store.token,
  calendarID: store.calendarID,
  village: store.village
})

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user)),
  removeAllEvents: (events) => dispatch(removeAllEvents(events)),
  removeToken: (token) => dispatch(removeToken(token)),
  logInUser: (user) => dispatch(logInUser(user)),
  setToken: (token) => dispatch(setToken(token)),
  removeCalendarID: (calendarID) => dispatch(removeCalendarID(calendarID)),
  removeVillageList: (village) => dispatch(removeVillageList(village))
})

Nav.propTypes = {
  user: PropTypes.object,
  events: PropTypes.array,
  token: PropTypes.string,
  calendarID: PropTypes.string,
  village: PropTypes.array,
  logOutUser: PropTypes.func,
  removeAllEvents: PropTypes.func,
  removeToken: PropTypes.func,
  logInUser: PropTypes.func,
  setToken: PropTypes.func,
  removeCalendarID: PropTypes.func,
  removeVillageList: PropTypes.func,
  login: PropTypes.func,
  pageDirect: PropTypes.func,
  buttonDisplay: PropTypes.func,
  logOut: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object.isRequired,
}  


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));