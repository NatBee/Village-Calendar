import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

  googleLogin = () => {
    console.log('in')
  }

  render() {
    return(
      <div>
        <h1>Welcome to Village</h1>
        <p>Follow these step to setup your calendar:</p>
      </div>
    )
  }
}

export default Register;