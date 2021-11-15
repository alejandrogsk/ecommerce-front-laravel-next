import {
  AUTH_CHECKING,
  AUTH_ERROR,
  VALIDATION_ERROR,
  LOGIN_USER,
  CHECK_LOGIN_STATE,
  LOGOUT_USER,
  CONNECTION_ERROR
} from "./authTypes";

const initialState = {
  user: null,
  token: null,
  checking: false,
  loginError: null,
  validationError: null,
  message: null
};

const authReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case AUTH_CHECKING:
      return {
        ...state,
        checking: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        checking: false,
        loginError: payload.loginError,
      };
    case VALIDATION_ERROR:
      return {
        ...state,
        checking: false,
        validationError: payload.validationError,
        message: payload.message
      }
    case LOGIN_USER:
      return {
        ...state,
        checking: false,
        user: payload.user,
        token: payload.token,
      };
    case CHECK_LOGIN_STATE:
      return {
        ...state,
        checking: false,
        user: payload.user,
        token: payload.token,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
      };
    case CONNECTION_ERROR:
      return {
        ...state,
        checking: false,
        message: payload.message
      }
    default:
      return state;
  }
};

export default authReducer;
