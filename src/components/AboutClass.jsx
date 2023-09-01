import React, { Component } from 'react';

class AboutClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      work: this.props.work,
      username: '', // Initialize username in state
    };
  }

  inputChange = (e) => { // Use arrow function to automatically bind 'this'
    this.setState({
      username: e.target.value,
    });
  }

  render() {
    return (
      <div>
        AboutClass<br />
        {this.state.name}<br />
        {this.state.work}<br />
        Username: {this.state.username}<br />
        <input onChange={this.inputChange}></input> {/* Pass the event parameter */}
      </div>
    );
  }
}

export default AboutClass;
