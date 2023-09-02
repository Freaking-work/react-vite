// src/components/UserForm.js
// import React, { Component } from 'react';
// import axios from 'axios';
// import './UserForm.css'

// class UserForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       name: '',
//       email: '',
//       phoneno: '',
//       password: '',
//       id: '',
//       isEditMode: false,
//     };
//   }

  // componentDidMount() {
  //   this.fetchUsers();
  // }

  // fetchUsers = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://64f2f4bcedfa0459f6c628b2.mockapi.io/User'
  //     );
  //     this.setState({ users: response.data });
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  // handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const { name, email, phoneno, password, id, isEditMode } = this.state;
  //   const userData = { name, email, phoneno, password };

  //   try {
  //     if (isEditMode) {
  //       await axios.put(
  //         `https://64f2f4bcedfa0459f6c628b2.mockapi.io/User/${id}`,
  //         userData
  //       );
  //     } else {
  //       await axios.post(
  //         'https://64f2f4bcedfa0459f6c628b2.mockapi.io/User',
  //         userData
  //       );
  //     }

  //     this.fetchUsers();
  //     this.clearForm();
  //   } catch (error) {
  //     console.error('Error saving user:', error);
  //   }
  // };

  // handleEdit = (user) => {
  //   this.setState({
  //     name: user.name,
  //     email: user.email,
  //     phoneno: user.phoneno,
  //     password: user.password,
  //     id: user.id,
  //     isEditMode: true,
  //   });
  // };

  // handleDelete = async (id) => {
  //   try {
  //     await axios.delete(
  //       `https://64f2f4bcedfa0459f6c628b2.mockapi.io/User/${id}`
  //     );
  //     this.fetchUsers();
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };

  // clearForm = () => {
  //   this.setState({
  //     name: '',
  //     email: '',
  //     phoneno: '',
  //     password: '',
  //     id: '',
  //     isEditMode: false,
  //   });
  // };

//   render() {
//     const { users, name, email, phoneno, password, isEditMode } = this.state;

//     return (
//       <div>
//         <h2>User Form</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={name}
//             onChange={this.handleInputChange}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             value={email}
//             onChange={this.handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             name="phoneno"
//             value={phoneno}
//             onChange={this.handleInputChange}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={this.handleInputChange}
//             required
//           />
//           <button type="submit">{isEditMode ? 'Update' : 'Add'}</button>
//         </form>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone Number</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phoneno}</td>
//                 <td>
//                   <button onClick={() => this.handleEdit(user)}>Edit</button>
//                   <button onClick={() => this.handleDelete(user.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default UserForm;




import React, { Component } from 'react';
import axios from 'axios';
import './UserForm.css'; // Import the CSS file

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: '',
      email: '',
      phoneno: '',
      password: '',
      id: '',
      isEditMode: false,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get(
        'https://64f2f4bcedfa0459f6c628b2.mockapi.io/User'
      );
      this.setState({ users: response.data });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, phoneno, password, id, isEditMode } = this.state;
    const userData = { name, email, phoneno, password };

    try {
      if (isEditMode) {
        await axios.put(
          `https://64f2f4bcedfa0459f6c628b2.mockapi.io/User/${id}`,
          userData
        );
      } else {
        await axios.post(
          'https://64f2f4bcedfa0459f6c628b2.mockapi.io/User',
          userData
        );
      }

      this.fetchUsers();
      this.clearForm();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  handleEdit = (user) => {
    this.setState({
      name: user.name,
      email: user.email,
      phoneno: user.phoneno,
      password: user.password,
      id: user.id,
      isEditMode: true,
    });
  };

  handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://64f2f4bcedfa0459f6c628b2.mockapi.io/User/${id}`
      );
      this.fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      phoneno: '',
      password: '',
      id: '',
      isEditMode: false,
    });
  };

  render() {
    const { users, name, email, phoneno, password, isEditMode } = this.state;

    return (
      <div className="user-form-container"> {/* Add the container class */}
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneno"
            value={phoneno}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit" className="submit-button"> {/* Add the submit button class */}
            {isEditMode ? 'Update' : 'Add'}
          </button>
        </form>
        <table className="user-table"> {/* Add the table class */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneno}</td>
                <td>
                  <button onClick={() => this.handleEdit(user)} className="edit-button"> {/* Add the edit button class */}
                    Edit
                  </button>
                  <button onClick={() => this.handleDelete(user.id)} className="delete-button"> {/* Add the delete button class */}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserForm;
