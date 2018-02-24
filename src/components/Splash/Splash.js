import React, { Component } from 'react';
import './Splash.css';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import { mockData } from '../../mockData';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({clicked: true});
  }

  loginAlert = () => {
    if(this.state.clicked === true) {
      return (
        <h1>Please log in to start planning!</h1>
      )
    } else {
      return (
        <h1>Welcome to Village Calendar</h1>
      )
    }
  }

  render() {
    return (
      <div>
        {this.loginAlert()}
          <BigCalendar 
            style={ {height: '420px'} }    
            events={ mockData.events } 
            views={{
              month: true,
              day: true
            }}
            defaultDate={ new Date(Date.now()) }
            onSelectEvent={ this.handleClick }
            onSelectSlot={ this.handleClick }
            onView={ this.handleClick }
            onNavigate={ this.handleClick }
          /> 
      </div>
    )
  }
}

Splash.propTypes = {
  clicked: PropTypes.string,
  handleClick: PropTypes.func,
  loginAlert: PropTypes.func,
}

export default Splash;