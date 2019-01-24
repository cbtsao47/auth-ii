import {
  GET_USERS,
  SIGN_IN,
  REGISTER,
  START,
  FAIL
} from "../actions/authActions";

const initialState = {
  users: [],
  isLoggedIn: false,
  message: "",
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case REGISTER:
      return {
        ...state,
        isLoggedIn: true
      };

    case START:
      return {
        ...state,
        message: action.message
      };

    case FAIL:
      return {
        ...state,
        error: action.err
      };

    default:
      return state;
  }
};
