import React, { Component } from 'react';
import './EventCard.css';
import { addEventToCalendar } from '../../helper/apiCall';
import { connect } from 'react-redux';

class EventCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      summary: '',
      location: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.setState({ [field]: value })
  }

  addEvent = async (e) => {
    const title = this.state.title;
    const summary = this.state.summary;
    const location = this.state.location
    const email = this.props.user.additionalUserInfo.profile.email
    await addEventToCalendar(this.props.calendarID, this.props.time, title, summary, email, location);
  }

  render() {
    return (
      <div>
        <h1>Event</h1>
        <form onSubmit={this.addEvent}>
          <input type='text' name='title' placeholder='Event title' onChange={this.handleChange} />
          <input type='text' name='location' placeholder='Event location' onChange={this.handleChange} />
          <input type='text' name='summary' placeholder='Event Description' onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  time: store.time,
  calendarID: store.calendarID,
  user: store.user
})

export default connect(mapStateToProps)(EventCard);