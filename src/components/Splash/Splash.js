import React, { Component } from 'react';
import { quotes } from '../../assets/quotes';
// import Register from '../../containers/Register/Register';
// import LogIn from '../../containers/LogIn/LogIn';
import './Splash.css';

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

  render() {

    return (
      <div>
        <h3>{ this.state.quote }</h3>
        <h4>{ this.state.author }</h4>
      </div>
    )
  }
}

export default Splash;