import React, { Component } from 'react';

class MountLifecycleExample extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor is called');
    this.state = {
      message: 'Hello, World!'
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps is called');
    // You can update the state based on props here
    if (nextProps.message !== prevState.message) {
      return { message: nextProps.message };
    }
    return null;
  }

  componentDidMount() {
    console.log('Component did mount');
    // You can perform side effects or API calls here
  }

  render() {
    console.log('Render is called');
    return (
      <div>
        <h1>Mount Lifecycle Example</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default MountLifecycleExample;
