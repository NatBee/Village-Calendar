import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './CalendarDisplay.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class CalendarDisplay extends Component {
  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <BigCalendar style={{height: '420px'}} events={[]} />
      </div>
    )
  }

}

export default CalendarDisplay;