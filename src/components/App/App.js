import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import Splash from '../Splash/Splash';
import Nav from '../../containers/Nav/Nav';
import CalendarDisplay from '../../containers/CalendarDisplay/CalendarDisplay';
import Register from '../../containers/Register/Register';
import EventCard from '../../containers/EventCard/EventCard';
import EditEventCard from '../../containers/EditEventCard/EditEventCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav/>
        <Route exact path='/' component={ Splash } />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/calendar' component={ CalendarDisplay } />
        <Route exact path='/addevent' component={ EventCard } />
        <Route exact path='/editevent' component={ EditEventCard } />
      </div>
    );
  }
}

export default App;
