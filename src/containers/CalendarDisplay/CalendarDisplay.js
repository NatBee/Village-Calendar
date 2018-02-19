import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './CalendarDisplay.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getUpcomingEvents } from '../../helper/apiCall';
import { connect } from 'react-redux';
import { loadUpcomingEvents } from '../../actions/index';

BigCalendar.momentLocalizer(moment);
const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class CalendarDisplay extends Component {

  async componentDidMount() {
    const events = await getUpcomingEvents(); 
    this.props.loadUpcomingEvents(events);
  }

  editEvent = () => {
    console.log('were editing')
  }

  addEvent = () => {
    console.log('were adding events')
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <BigCalendar 
          style={{height: '420px'}} 
          events={this.props.events} 
          selectable
          views={['month', 'day', 'week','agenda']}
          onSelectEvent={this.editEvent}
          onSelectSlot={this.addEvent}
        />
      </div>
    )
  }

}

export const mapStateToProps = (store) => ({
  events: store.events
})

export const mapDispatchToProps = (dispatch) => ({
  loadUpcomingEvents: (events) => dispatch(loadUpcomingEvents(events))
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDisplay);