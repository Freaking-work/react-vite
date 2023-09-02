// import React, { Component } from 'react';
// import './UserManagement.css'
//  // Import the CSS file


// class UserManagement extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       id: '',
//       name: '',
//       email: '',
//       phoneno: '',
//       password: '',
//     };
//   }

//   // Function to handle form input changes
//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   // Function to handle user submission
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { id, name, email, phoneno, password } = this.state;

//     // Create or update user based on whether 'id' exists
//     if (id) {
//       // Update user
//       const updatedUsers = this.state.users.map((user) =>
//         user.id === id
//           ? { ...user, name, email, phoneno, password }
//           : user
//       );
//       this.setState({ users: updatedUsers });
//     } else {
//       // Create user
//       const newUser = { id: Date.now(), name, email, phoneno, password };
//       this.setState((prevState) => ({
//         users: [...prevState.users, newUser],
//       }));
//     }

//     // Clear form inputs
//     this.setState({ id: '', name: '', email: '', phoneno: '', password: '' });
//   };

//   // Function to edit a user
//   editUser = (user) => {
//     this.setState({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       phoneno: user.phoneno,
//       password: user.password,
//     });
//   };

//   // Function to delete a user
//   deleteUser = (id) => {
//     const updatedUsers = this.state.users.filter((user) => user.id !== id);
//     this.setState({ users: updatedUsers });
//   };

//   render() {
//     const { name, email, phoneno, password, users } = this.state;

//     return (
//       <div className='container'>
//         <h2>User Management</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={name}
//             onChange={this.handleInputChange}
//           />
//           <input
//             type="text"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={this.handleInputChange}
//           />
//           <input
//             type="text"
//             name="phoneno"
//             placeholder="Phone Number"
//             value={phoneno}
//             onChange={this.handleInputChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={this.handleInputChange}
//           />
//           <button type="submit">Save</button>
//         </form>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone Number</th>
//               <th>Password</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phoneno}</td>
//                 <td>{user.password}</td>
//                 <td>
//                   <button onClick={() => this.editUser(user)}>Edit</button>
//                   <button onClick={() => this.deleteUser(user.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default UserManagement;




import React, { Component } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://64f2f4bcedfa0459f6c628b2.mockapi.io/User';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: '',
      name: '',
      email: '',
      phoneNo: '',
      password: '',
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
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
    const { id, name, email, phoneNo, password } = this.state;

    try {
      if (id) {
        // Update existing user
        await axios.put(`${API_BASE_URL}/users/${id}`, {
          name,
          email,
          phoneNo,
          password,
        });
      } else {
        // Create new user
        await axios.post(`${API_BASE_URL}/users`, {
          name,
          email,
          phoneNo,
          password,
        });
      }
      this.fetchUsers();
      this.resetForm();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  resetForm = () => {
    this.setState({
      id: '',
      name: '',
      email: '',
      phoneNo: '',
      password: '',
    });
  };

  render() {
    const { users, id, name, email, phoneNo, password } = this.state;

    return (
      <div>
        <h1>User Management</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="phoneNo"
            placeholder="Phone Number"
            value={phoneNo}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">{id ? 'Update User' : 'Create User'}</button>
        </form>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.phoneNo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserForm;









