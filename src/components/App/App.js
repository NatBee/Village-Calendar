import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import Splash from '../Splash/Splash';
// import Register from '../../containers/Register/Register';
// import LogIn from '../../containers/LogIn/LogIn';
// import Nav from '../../containers/Nav/Nav';
// import CalendarDisplay from '../../containers/CalendarDisplay/CalendarDisplay';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>VILLAGE</h1>
        <Route exact path='/' component={ Splash } />
      </div>
    );
  }
}

export default App;
