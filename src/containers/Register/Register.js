import React, { Component } from 'react';
import './Register.css';
import { createNewCalendar, addUsersToCalendar } from '../../helper/apiCall';
import { setCalendarID, addPeopleToVillage } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      newCalendar: false
    }
  }

  createCalendar = async () => {
    const newCalendarID = await createNewCalendar(this.props);
    await this.props.setCalendarID(newCalendarID);
    this.setState({ newCalendar: true })
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    this.setState({ [field]: value})
  }

  addUsers = async (e) => {
    e.preventDefault();
    await addUsersToCalendar(this.props, this.state);
    await this.props.addPeopleToVillage({[this.state.name]: this.state.email});
    this.inputName.value = '';
    this.inputEmail.value = '';
  }

  goToCalendar = () => {
    this.props.history.push('/calendar')
  }
  
  optionDisplay = () => {
    if(this.state.newCalendar === false) {
      return (
        <div>
          <h2>Would you like to load an existing calendar or would you like to create a new calendar?</h2>
          <button onClick={this.goToCalendar}>Existing</button>
         <button onClick={this.createCalendar}>Create Calendar</button>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Your new Village calendar has been created.</h2>
          <h3>You can add users to share your new calendar or you can go to your calendar and start planning.</h3>
          <form onSubmit={this.addUsers}>
            <input type='text' placeholder='friend' ref={el => this.inputName = el} name='name' onChange={this.handleChange}/>
            <input type='text' placeholder='friend@gmail.com' ref={el => this.inputEmail = el} name='email' onChange={this.handleChange}/>
            <button>Add Users</button>
          </form>
          <button onClick={this.goToCalendar}>Go to Calendar</button>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        {this.optionDisplay()}
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  calendarID: store.calendarID,
  village: store.village,
  token: store.token
})

export const mapDispatchToProps = (dispatch) => ({
  setCalendarID: (calendarID) => dispatch(setCalendarID(calendarID)),
  addPeopleToVillage: (village) => dispatch(addPeopleToVillage(village))
})

Register.propTypes = {
  calendarID: PropTypes.string,
  village: PropTypes.array,
  token: PropTypes.string,
  setCalendarID: PropTypes.func,
  addPeopleToVillage: PropTypes.func,
  createCalendar: PropTypes.func,
  createNewCalendar: PropTypes.func,
  handleChange: PropTypes.func,
  addUsers: PropTypes.func,
  addUsersToCalendar: PropTypes.func,
  goToCalendar: PropTypes.func,
  history: PropTypes.object,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));