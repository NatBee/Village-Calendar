import React, { Component } from 'react';
import './Register.css';
import { createNewCalendar } from '../../helper/apiCall';

class Register extends Component {

  createCalendar = async () => {
    await createNewCalendar();
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

export default Register;