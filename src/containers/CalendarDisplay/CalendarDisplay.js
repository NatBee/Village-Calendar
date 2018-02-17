import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './CalendarDisplay.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getUpcomingEvents } from '../../helper/apiCall';
import { connect } from 'react-redux';
import { loadUpcomingEvents } from '../../actions/index';

BigCalendar.momentLocalizer(moment);

class CalendarDisplay extends Component {

  async componentDidMount() {
    const events = await getUpcomingEvents(); 
    //maybe try to set it in state or figure out why redux not working
console.log(events)
    this.props.loadUpcomingEvents(events);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Calendar</h1>
        <button onClick={this.eventsList}>Events</button>
        <BigCalendar style={{height: '420px'}} events={[]} />
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