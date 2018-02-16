import React, { Component } from 'react';
import { quotes } from '../../assets/quotes';
import Register from '../../containers/Register/Register';
import LogIn from '../../containers/LogIn/LogIn';
import './Splash.css';
import { Link } from 'react-router-dom';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.randomNumber();
  }
  
  randomNumber = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(9));
    this.quoteDisplay(randomIndex);
  }

  quoteDisplay = (index) => {
    const quoteObj = quotes[index];
    const quote = quoteObj.quote;
    const author = quoteObj.author;

    this.setState ({ quote, author })
  }

  renderContainer = () => {
    const route = this.props.location.pathname;
    if(route === "/") {
      return (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/register">Create Your Village</Link>
        </div>
      )
    } else if(route === "/login") {
      return <LogIn /> 
    } else {
      return <Register />
    }
  }

  render() {

    return (
      <div>
        <h3>{ this.state.quote }</h3>
        <h4>{ this.state.author }</h4>
        { this.renderContainer()}
      </div>
    )
  }
}

export default Splash;