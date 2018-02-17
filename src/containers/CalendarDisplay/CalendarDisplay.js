import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './CalendarDisplay.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { loadUpcomingEvents } from '../../helper/apiCall';

BigCalendar.momentLocalizer(moment);

class CalendarDisplay extends Component {

  eventsList = () => {
    loadUpcomingEvents();
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <button onClick={this.eventsList}>Events</button>
        <BigCalendar style={{height: '420px'}} events={[]} />
      </div>
    )
  }

}

export default CalendarDisplay;