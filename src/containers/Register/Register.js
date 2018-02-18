import React, { Component } from 'react';
import './Register.css';
import { createNewCalendar } from '../../helper/apiCall';
import { setCalendarID } from '../../actions/index';
import { connect } from 'react-redux';

class Register extends Component {

  createCalendar = async () => {
    const newCalendarID = await createNewCalendar();
    await this.props.setCalendarID(newCalendarID);
  }

  render() {
    return(
      <div>
        <h1>Welcome to Village</h1>
        <p>Follow these step to setup your calendar:</p>
          <ol>
            <li>Click the Google Log In Button above to login or create the google account you want attached to your Village Calendar</li>
            <li>Create Village Calendar</li>
            <button onClick={this.createCalendar}>Create Calendar</button>
          </ol>
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  calendarID: store.calendarID
})

export const mapDispatchToProps = (dispatch) => ({
  setCalendarID: (calendarID) => dispatch(setCalendarID(calendarID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);