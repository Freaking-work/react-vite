import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null
    };
  }

  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 70) + 1; // Generates a random number between 1 and 100
    this.setState({
      randomNumber: randomNum
    });
  };

  render() {
    return (
      <div>
        <h1>Random Number Generator</h1>
        <p>Generated Number: {this.state.randomNumber}</p>
        <button onClick={this.generateRandomNumber}>Generate Random Number</button>
      </div>
    );
  }
}

export default Random;
