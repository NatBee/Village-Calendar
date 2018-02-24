import React, { Component } from 'react';
import { quotes } from '../../assets/quotes';
import Register from '../../containers/Register/Register';
import './Splash.css';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
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

  renderContainer = () => {
    const route = this.props.location.pathname;
    const events = mockData.events;
    if(route === "/") {
      return (
        <BigCalendar 
          style={ {height: '420px'} }    
          events={ events } 
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
      )
    } else if(route === "/register") {
      return <Register />
    }
  }

  render() {
    return (
      <div>
        {this.loginAlert()}
        <div>
          { this.renderContainer() } 
        </div>
      </div>
    )
  }
}

Splash.propTypes = {
  location: Proptypes.object.isRequired,
}

export default Splash;