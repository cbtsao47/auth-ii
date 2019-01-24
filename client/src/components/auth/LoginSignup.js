import React from "react";
import axios from "axios";

class LoginSignup extends React.Component {
  state = {
    username: "",
    password: "",
    loggedIn: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const URL = process.env.REACT_APP_API_URL;
    axios
      .post(`${URL}/login`, this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("JWT", res.data.token);
        localStorage.setItem("UserId", res.data.userId);
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={this.handleChange}
        />
        <button>Log In</button>
      </form>
    );
  }
}
export default LoginSignup;
