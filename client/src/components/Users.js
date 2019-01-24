import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const URL = process.env.REACT_APP_API_URL;
    try {
      const token = localStorage.getItem("JWT");
      const users = await axios.post(`${URL}/users`, token);
      console.log("users", users);
      this.setState({
        users: users.data
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
            <>
              <li>{user.username}</li>
              <li>{user.department}</li>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default Users;
