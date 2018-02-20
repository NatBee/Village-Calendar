import React, { Component } from 'react';
import './Register.css';
import { createNewCalendar, addUsersToCalendar } from '../../helper/apiCall';
import { setCalendarID, addPeopleToVillage } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }
  }

  createCalendar = async () => {
    const newCalendarID = await createNewCalendar(this.props);
    await this.props.setCalendarID(newCalendarID);
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

  render() {
    return(
      <div>
        <h1>Welcome to Village</h1>
        <p>Follow these step to setup your calendar:</p>
          <ol>
            <li>Click the Google Log In Button above to login or create the google account you want attached to your Village Calendar</li>
            <li>Create Village Calendar</li>
            <button onClick={this.createCalendar}>Create Calendar</button>
            <li>Add people to your village</li>
              <form onSubmit={this.addUsers}>
                <input type='text' placeholder='friend' ref={el => this.inputName = el} name='name' onChange={this.handleChange}/>
                <input type='text' placeholder='friend@gmail.com' ref={el => this.inputEmail = el} name='email' onChange={this.handleChange}/>
               <button>Add Users</button>
              </form>
            <li>Go to Calendar</li>
            <button onClick={this.goToCalendar}>Calendar</button>
          </ol>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));