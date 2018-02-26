import React, { Component } from 'react';
import './EditEventCard.css';
import { connect } from 'react-redux';
import { deleteEventFromCalendar, editEventOnCalendar } from '../../helper/apiCall';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class EditEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.event.title,
      start: this.props.event.start,
      end: this.props.event.end,
      description: this.props.event.description,
      location: this.props.event.location
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.setState({ [field]: value });
  }

  deleteEvent = async (e) => {
    e.preventDefault();
    await deleteEventFromCalendar(this.props);
    this.props.history.push('/calendar')
  }

  editEvent = async (e) => {
    e.preventDefault();
    await editEventOnCalendar(this.props, this.state);
    this.props.history.push('/calendar');
  }

  cancel = () => {
    this.props.history.push('/calendar')
  }

  render() {
    return(
      <div className='edit-card'>
        <h2>Edit or Delete Event</h2>
        <form>
          <input 
            type='text' 
            name='title' 
            value={this.state.title}
            placeholder='event title' 
            onChange={this.handleChange} 
          />
          <input 
            type='text' 
            name='start' 
            value={this.state.start}
            placeholder='start time' 
            onChange={this.handleChange} 
          />
          <input 
            type='text' 
            name='end' 
            value={this.state.end} 
            placeholder='end time'
            onChange={this.handleChange} 
          />
          <input 
            type='text' 
            name='description' 
            value={this.state.description} 
            placeholder='description'
            onChange={this.handleChange} 
          />
          <input 
            type='text' 
            name='location' 
            value={this.state.location} 
            placeholder='location'
            onChange={this.handleChange} 
          />
          <div className='edit-btns'>
            <button className='edit-cancel-btn' onClick={this.cancel}>Cancel</button>
            <button className='edit-btn-btn' onClick={this.editEvent}>Edit</button>
           <button className='edit-delete-btn' onClick={this.deleteEvent}>Delete</button>
          </div>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  event: store.event,
  calendarID: store.calendarID,
  token: store.token
})

EditEventCard.propTypes = {
  event: PropTypes.object,
  calendarID: PropTypes.string,
  token: PropTypes.string,
  handleChange: PropTypes.func,
  deleteEvent: PropTypes.func,
  editEvent: PropTypes.func,
  deleteEventFromCalendar: PropTypes.func,
  editEventOnCalendar: PropTypes.func,
  cancel: PropTypes.func,
}

export default withRouter(connect(mapStateToProps)(EditEventCard));