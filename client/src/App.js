import React, { Component } from "react";
import styled from "styled-components";
import Login from "./components/auth/Login";
import { Route, NavLink } from "react-router-dom";
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
                <button onClick={this.handleLogout}>Logout</button>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route path="/users" render={props => <Users {...props} />} />
      </header>
    );
  }
}

export default App;
