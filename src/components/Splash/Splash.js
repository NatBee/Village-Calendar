import React, { Component } from 'react';
import './Splash.css';
import BigCalendar from 'react-big-calendar';
import { mockData } from '../../mockData';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

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
        <h2 className='message'>Please log in to start planning!</h2>
      )
    }
  }

  render() {
    return (
      <div className='calendar'>
        <div className='intro'>
          <h3>Welcome to Village Calendar, a calendar organization tool that allows you to:</h3> 
          <ul>
            <li>Load an existing google calendar or create a new calendar.</li> 
            <li>Share your calendar with friends and family.</li> 
            <li>Manage your calendar by adding, editing, and deleting events.</li> 
            <li>Receive email and google popup reminders 24 hours and 30 minutes before an event.</li> 
          </ul>
        </div>    
        {this.loginAlert()}
        <BigCalendar 
          style={ {height: '600px', width: '850px'} }    
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