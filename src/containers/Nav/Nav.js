import React, { Component } from 'react';
import { logOutUser, removeAllEvents, removeToken } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Nav.css';
import firebase from 'firebase/app';
import 'firebase/auth';

class Nav extends Component {

  logOut = () => {
    firebase.auth().signOut();
    const user = this.props.user;
    this.props.logOutUser(user);
    this.props.removeAllEvents(this.props.events);
    this.props.removeToken(this.props.token);
    this.props.history.push('/');
  }

  logOutButton = () => {
    if(this.props.user.user !== undefined) {
      return (
        <button onClick={this.logOut}>Log Out</button>
      )
    }
  }

  render() {
    return(
      <div>
        <h1>VILLAGE</h1>
        {this.logOutButton()}
      </div>
    )
  }
}
  export const mapStateToProps = (store) => ({
    user: store.user,
    events: store.events,
    token: store.token
  })

  export const mapDispatchToProps = (dispatch) => ({
    logOutUser: (user) => dispatch(logOutUser(user)),
    removeAllEvents: (events) => dispatch(removeAllEvents(events)),
    removeToken: (token) => dispatch(removeToken(token))
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));