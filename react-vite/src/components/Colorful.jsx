import React, { Component } from 'react';

class Colorful extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, text: 'Buy groceries', color: '#FFFFFF' },
        { id: 2, text: 'Walk the dog', color: '#FFFFFF' },
        { id: 3, text: 'Do laundry', color: '#FFFFFF' },
      ],
    };
  }

  handleColorChange = (itemId, newColor) => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === itemId ? { ...item, color: newColor } : item
      ),
    }));
  };

  generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  render() {
    const { items } = this.state;

    return (
      <div className="Colorful">
        <h1>Interactive Colorful To-Do List</h1>
        <ul>
          {items.map(item => (
            <li
              key={item.id}
              style={{ backgroundColor: item.color }}
              onClick={() => {
                const newColor = this.generateRandomColor();
                this.handleColorChange(item.id, newColor);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Colorful;
