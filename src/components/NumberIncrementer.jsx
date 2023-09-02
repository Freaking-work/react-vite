import React, { Component } from 'react';

class NumberIncrementer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      number: 0,
      items: [],
      newItem: '',
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }

  incrementNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  }

  handleNewItemChange = (e) => {
    this.setState({ newItem: e.target.value });
  }

  addItemToList = () => {
    const { newItem, items } = this.state;
    if (newItem.trim() !== '') {
      this.setState({
        items: [...items, newItem],
        newItem: '',
      });
    }
  }

  render() {
    const { firstName, lastName, number, items, newItem } = this.state;

    return (
      <div>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={this.handleFirstNameChange} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={this.handleLastNameChange} />
        </div>
        <div>
          <p> Name: {firstName} {lastName}</p>
          <p>Number: {number}</p>
          <button onClick={this.incrementNumber}>Increment Number</button>
        </div>
        <div>
          <h2>Item List</h2>
          <input type="text" value={newItem} onChange={this.handleNewItemChange} />
          <button onClick={this.addItemToList}>Add Item</button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NumberIncrementer;
