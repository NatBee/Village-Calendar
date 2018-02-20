import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import './CalendarDisplay.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getUpcomingEvents } from '../../helper/apiCall';
import { connect } from 'react-redux';
import { loadUpcomingEvents, setTimeAddEvent, setEvent, removeEvent } from '../../actions/index';
import EventCard from '../EventCard/EventCard';
import EditEventCard from '../EditEventCard/EditEventCard';

BigCalendar.momentLocalizer(moment);

class CalendarDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventCard: 'calendar'
    }
  }

  async componentDidMount() {
    const events = await getUpcomingEvents(this.props.calendarID); 
    this.props.loadUpcomingEvents(events);
  }

  editEvent = (event) => {
    this.props.setEvent(event);
    this.setState({eventCard: 'edit'})
  }

  addEventCard = (start, end) => {
    const time = {  
      startTime: start,
      endTime: end    
    };
    this.props.setTimeAddEvent(time);
    this.setState({eventCard: 'add'})
  }

  display = () => {
    if(this.state.eventCard === 'calendar') {
      return (
        <BigCalendar 
          style={{height: '420px'}} 
          events={this.props.events} 
          selectable
          views={['month', 'day', 'week','agenda']}
          onSelectEvent={event => this.editEvent(event)}
          onSelectSlot={slotInfo => this.addEventCard(slotInfo.start.toISOString(), slotInfo.end.toISOString())}
        />
      )
    } else if(this.state.eventCard === 'add') {
      return (
        <EventCard/>
      )
    } else {
      return (
        <EditEventCard/>
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
  calendarID: store.calendarID,
  event: store.event,
  token: store.token
})

export const mapDispatchToProps = (dispatch) => ({
  loadUpcomingEvents: (events) => dispatch(loadUpcomingEvents(events)),
  setTimeAddEvent: (time) => dispatch(setTimeAddEvent(time)),
  setEvent: (event) => dispatch(setEvent(event)),
  removeEvent: (event) => dispatch(removeEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDisplay);