import React, { Component } from 'react';
import './EventCard.css';
import { addEventToCalendar } from '../../helper/apiCall';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class EventCard extends Component {
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
    this.setState({ [field]: value });
  }

  addEvent = async (e) => {
    e.preventDefault();
    await addEventToCalendar(this.props, this.state);
    this.props.history.push('/calendar')
  }

  cancel = () => {
    this.props.history.push('/calendar')
  }

  render() {
    return (
      <div className='add-event'>
        <h3>Add Event</h3>
        <form onSubmit={this.addEvent}>
          <input 
            type='text' 
            name='title' 
            placeholder='Event title' 
            onChange={this.handleChange} 
          />
          <input 
            type='text' 
            name='location' 
            placeholder='Event location' 
            onChange={this.handleChange} 
          />
          <input 
            type='text' 
            name='summary' 
            placeholder='Event Description' 
            onChange={this.handleChange} 
          />
          <div className='form-btn'>
            <button>Submit</button>
            <button onClick={this.cancel}>Cancel</button>
          </div>  
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  time: store.time,
  calendarID: store.calendarID,
  user: store.user,
  token: store.token
})

EventCard.propTypes = {
  time: PropTypes.object,
  calendarID: PropTypes.string,
  user: PropTypes.object,
  token: PropTypes.string,
  handleChange: PropTypes.func,
  addEvent: PropTypes.func,
  addEventToCalendar: PropTypes.func,
  cancel: PropTypes.func,
}

export default withRouter(connect(mapStateToProps)(EventCard));