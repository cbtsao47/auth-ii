import React, { Component } from "react";
import styled from "styled-components";
import LoginSignup from "./components/auth/LoginSignup";
import { Route } from "react-router-dom";

const StyledApp = styled.div``;
class App extends Component {
  render() {
    return (
      <header>
        <header>
          <Route />
          <LoginSignup />
        </header>
      </header>
    );
  }
}

export default App;
