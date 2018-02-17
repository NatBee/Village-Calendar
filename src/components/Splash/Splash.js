import React, { Component } from 'react';
import { quotes } from '../../assets/quotes';
import Register from '../../containers/Register/Register';
import LogIn from '../../containers/LogIn/LogIn';
import './Splash.css';
import { Link } from 'react-router-dom';
import { logInUser } from '../../actions/index';
import { logOutUser } from '../../actions/index';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import { config } from '../../helper/apiKey';
import { exchangeOAuth2Token, loadUpcomingEvents } from '../../helper/apiCall';
import asyncLoader from 'react-async-loader';

firebase.initializeApp(config);

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.randomNumber();
  }
  
  randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(9));
    this.quoteDisplay(randomIndex);
  }

  quoteDisplay = (index) => {
    const quoteObj = quotes[index];
    const quote = quoteObj.quote;
    const author = quoteObj.author;

    this.setState ({ quote, author })
  }

  logIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/calendar');
    const auth = firebase.auth()
    const authentication = await auth.signInWithPopup(provider)
    console.log(authentication)
    this.props.logInUser(authentication);
    exchangeOAuth2Token(authentication);
    //add fetch for upcoming calendar events
    //add calendar events to store 
    //add redirect to calendarDisplay
  } 

  eventsList = () => {
    loadUpcomingEvents();
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

  renderContainer = () => {
    const route = this.props.location.pathname;
    if(route === "/") {
      return (
        <div>
          {this.buttonDisplay()}
          <Link to="/register">Create Your Village</Link>
          <button onClick={this.eventsList}>Events</button>
        </div>
      )
    } else if(route === "/login") {
      return <LogIn /> 
    } else {
      return <Register />
    }
  }

  render() {

    return (
      <div>
        <h3>{ this.state.quote }</h3>
        <h4>{ this.state.author }</h4>
        { this.renderContainer()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Splash);