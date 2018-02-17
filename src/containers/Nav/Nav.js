import React, { Component } from 'react';
import { logOutUser } from '../../actions/index';
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
    user: store.user
  })

  export const mapDispatchToProps = (dispatch) => ({
    logOutUser: (user) => dispatch(logOutUser(user))
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));