import React, { Component } from 'react';
import './Splash.css';
import BigCalendar from 'react-big-calendar';
import { mockData } from '../../mockData';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({clicked: true});
  }

  loginAlert = () => {
    if(this.state.clicked === true) {
      return (
        <h1>Please log in to start planning!</h1>
      )
    }
  }

  render() {
    return (
      <div className='calendar'>
        <h4>Welcome to Village Calendar, a calendar organization tool. Village app allows you to load an existing google calendar or create a new calendar. You can share your calendar with friends and family. Manage your calendar by adding, editing, and deleting events. You will also receive an email reminder 24 hours before an event and a google popup reminder 30 minutes before the event.</h4>
        {this.loginAlert()}
        <BigCalendar 
          style={ {height: '450px', width: '650px'} }    
          events={ mockData.events } 
          views={{
            month: true,
            day: true
          }}
          defaultDate={ new Date(Date.now()) }
          onSelectEvent={ this.handleClick }
          onSelectSlot={ this.handleClick }
          onView={ this.handleClick }
          onNavigate={ this.handleClick }
        /> 
      </div>
    )
  }
}

export default Splash;