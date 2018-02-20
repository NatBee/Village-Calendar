import React, { Component } from 'react';
import './EditEventCard.css';
import { connect } from 'react-redux';
import { deleteEventFromCalendar, editEventOnCalendar } from '../../helper/apiCall';

class EditEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount = () => {
    const title = this.props.event.title || '';
    const start = this.props.event.start || '';
    const end = this.props.event.end || '';
    const description = this.props.event.description || '';
    const location = this.props.event.location || '';
    this.setState({
      title, start, end, description, location
    })
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.setState({ [field]: value });
  }

  deleteEvent = () => {
    deleteEventFromCalendar(this.props)
  }

  editEvent = () => {
    editEventOnCalendar(this.props, this.state);
  }


  render() {
    return(
      <div>
        <h1>Edit Event</h1>
        <form>
          <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
          <input type='text' name='start' value={this.state.start} onChange={this.handleChange} />
          <input type='text' name='end' value={this.state.end} onChange={this.handleChange} />
          <input type='text' name='description' value={this.state.description} onChange={this.handleChange} />
          <input type='text' name='location' value={this.state.location} onChange={this.handleChange} />
          <button onClick={this.editEvent}>Edit</button>
          <button onClick={this.deleteEvent}>Delete</button>
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

export default connect(mapStateToProps)(EditEventCard);