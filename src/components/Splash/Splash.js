import React, { Component } from 'react';
import { quotes } from '../../assets/quotes';
import Register from '../../containers/Register/Register';
import './Splash.css';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import { mockData } from '../../mockData';

BigCalendar.momentLocalizer(moment);

class Splash extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     quote: '',
  //     author: ''
  //   }
  // }

  // componentDidMount() {
  //   this.randomNumber();
  // }
  
  // randomNumber = () => {
  //   const randomIndex = Math.floor(Math.random() * Math.floor(9));
  //   this.quoteDisplay(randomIndex);
  // }

  // quoteDisplay = (index) => {
  //   const quoteObj = quotes[index];
  //   const quote = quoteObj.quote;
  //   const author = quoteObj.author;

  //   this.setState ({ quote, author })
  // }


  renderContainer = () => {
    const route = this.props.location.pathname;
    const events = mockData.events;
    if(route === "/") {
      return (
        <div>
          <BigCalendar 
            style={{height: '420px'}}    
            events={events} 
          />  
        </div>
      )
    } else if(route === "/register") {
      return <Register />
    }
  }

  render() {
    return (
      <div>
        { this.renderContainer()}
      </div>
    )
  }
}

Splash.propTypes = {
  location: Proptypes.object.isRequired,
}

export default Splash;