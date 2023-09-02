// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   increment = () => {
//     this.setState(prevState => ({
//       count: prevState.count + 1
//     }));
//   };

//   decrement = () => {
//     this.setState(prevState => ({
//       count: prevState.count - 1
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button><br></br><br></br>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

// export default Counter;




import React, { useReducer } from 'react';

// Define the initial state and reducer function
const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default Counter;

