import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import Splash from '../Splash/Splash';
import Nav from '../../containers/Nav/Nav';
import CalendarDisplay from '../../containers/CalendarDisplay/CalendarDisplay';
import Register from '../../containers/Register/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav/>
        <Route exact path='/' component={ Splash } />
        <Route exact path='/register' component={ Register } />
        <Route exact path='/calendar' component= { CalendarDisplay } />
      </div>
    );
  }
}

export default App;
