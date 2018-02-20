import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './CalendarDisplay.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getUpcomingEvents } from '../../helper/apiCall';
import { connect } from 'react-redux';
import { loadUpcomingEvents, setTimeAddEvent } from '../../actions/index';
import EventCard from '../EventCard/EventCard';

BigCalendar.momentLocalizer(moment);

class CalendarDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventCard: false
    }
  }

  async componentDidMount() {
    const events = await getUpcomingEvents(this.props.calendarID); 
    this.props.loadUpcomingEvents(events);
  }

  editEvent = () => {
    console.log('were editing')
  }

  addEventCard = (start, end) => {
    const time = {  
      startTime: start,
      endTime: end    
    };
    this.props.setTimeAddEvent(time);
    this.setState({eventCard: true})
  }

  display = () => {
    if(this.state.eventCard === false) {
      return (
        <BigCalendar 
          style={{height: '420px'}} 
          events={this.props.events} 
          selectable
          views={['month', 'day', 'week','agenda']}
          onSelectEvent={this.editEvent}
          onSelectSlot={slotInfo => this.addEventCard(slotInfo.start.toISOString(), slotInfo.end.toISOString())}
        />
      )
    } else {
      return (
        <EventCard/>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        { this.display() }
      </div>
    )
  }

}

export const mapStateToProps = (store) => ({
  events: store.events,
  time: store.time,
  calendarID: store.calendarID
})

export const mapDispatchToProps = (dispatch) => ({
  loadUpcomingEvents: (events) => dispatch(loadUpcomingEvents(events)),
  setTimeAddEvent: (time) => dispatch(setTimeAddEvent(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDisplay);