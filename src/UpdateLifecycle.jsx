import React, { Component } from 'react';

class UpdateLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor');
  }

  componentDidMount() {
    console.log('Component Did Mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should Component Update');
    console.log('Current state:', this.state);
    console.log('Next state:', nextState);
    return true; // Return true to allow component update
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h1>Update Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default UpdateLifecycle;
