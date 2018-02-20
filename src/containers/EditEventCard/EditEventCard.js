import React, { Component } from 'react';
import './EditEventCard.css';
import { connect } from 'react-redux';
import { deleteEventFromCalendar } from '../../helper/apiCall';

class EditEventCard extends Component {

  deleteEvent = (e) => {
    deleteEventFromCalendar(this.props.calendarID, this.props.event.eventID)
  }

  editEvent = (e) => {
    
  }


  render() {
    return(
      <div>
        <h1>Edit Event</h1>
        <form>
          <input type='text' placeholder={this.props.event.title}/>
          <input type='text' placeholder={this.props.event.start}/>
          <input type='text' placeholder={this.props.event.end}/>
          <input type='text' placeholder={this.props.event.description}/>
          <button onClick={this.editEvent}>Edit</button>
          <button onClick={this.deleteEvent}>Delete</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  event: store.event,
  calendarID: store.calendarID
})

export default connect(mapStateToProps)(EditEventCard);