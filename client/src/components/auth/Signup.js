import React from "react";
import axios from "axios";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
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
        localStorage.setItem("JWT", res.data.token);
        localStorage.setItem("UserId", res.data.userId);
        this.props.history.push("/users");
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
        <label htmlFor="department">department</label>
        <input
          type="text"
          name="department"
          id="department"
          onChange={this.handleChange}
        />
        <button>Sign Up</button>
      </form>
    );
  }
}
export default Signup;
