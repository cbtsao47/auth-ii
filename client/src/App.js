import React, { Component } from "react";
import styled from "styled-components";
import Login from "./components/auth/Login";
import { Route, NavLink, Link } from "react-router-dom";
import Users from "./components/Users";
import Signup from "./components/auth/Signup";

const StyledApp = styled.div``;

class App extends Component {
  state = {
    isLoggedIn: false
  };
  handleLogout = () => {
    localStorage.removeItem("JWT");
    localStorage.removeItem("UserId");
    this.setState({
      isLoggedIn: false
    });
  };
  handleLogIn = () => {
    this.setState({
      isLoggedIn: true
    });
  };
  render() {
    return (
      <header>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/login">login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">signup</NavLink>
              </li>
              <li>
                <Link to="/login">
                  <button onClick={this.handleLogout}>Logout</button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route
          path="/login"
          render={props => <Login {...props} handleLogIn={this.handleLogIn} />}
        />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route
          path="/users"
          render={props => (
            <Users {...props} isLoggedIn={this.state.isLoggedIn} />
          )}
        />
      </header>
    );
  }
}

export default App;
