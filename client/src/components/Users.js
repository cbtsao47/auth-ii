import React from "react";
import axios from "axios";
import Login from "./auth/Login";

class Users extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const URL = process.env.REACT_APP_API_URL;
    try {
      const token = localStorage.getItem("JWT");
      const requestOptions = {
        headers: {
          authorization: token
        }
      };
      const users = await axios.get(`${URL}/users`, requestOptions);
      console.log(users, "users");
      this.setState({
        users: users.data.users
      });
    } catch (err) {
      console.error(err);
    }
  }
  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user.username}>
              User:{user.username} Department:{user.department}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Users;
