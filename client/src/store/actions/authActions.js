import axios from "axios";

export const START = "START";
export const GET_USERS = "GET_USERS";
export const SIGN_IN = "SIGN_IN";
export const REGISTER = "GET_USERS";
export const FAIL = "FAIL";

const getUsers = dispatch => {
  dispatch({ type: START, message: "Fetching data..." });

  axios
    .get("http://localhost:5000/users")
    .then(users => {
      dispatch({ type: GET_USERS, payload: users.data });
    })
    .catch(err =>
      dispatch({
        type: FAIL,
        err: err
      })
    );
};

const signIn = dispatch => userInfo => {
  dispatch({ type: START, message: "Loggin in..." });

  axios
    .post("http://localhost:5000/login")
    .then(user => {
      dispatch({ type: SIGN_IN, token: user.data.token });
    })
    .catch(err =>
      dispatch({
        type: FAIL,
        err: err
      })
    );
};

const register = dispatch => userInfo => {
  dispatch({ type: START, message: "Registering..." });

  axios
    .post("http://localhost:5000/register")
    .then(user => {
      dispatch({ type: REGISTER, userId: user.data });
    })
    .catch(err =>
      dispatch({
        type: FAIL,
        err: err
      })
    );
};
