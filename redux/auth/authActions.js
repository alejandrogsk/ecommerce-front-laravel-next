import axios from "axios";
import {
  AUTH_CHECKING,
  AUTH_ERROR,
  LOGIN_USER,
  VALIDATION_ERROR,
  LOGOUT_USER,
  CONNECTION_ERROR
} from "./authTypes";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(authChecking());
    try {
      //this is required
      axios.defaults.withCredentials = true;
      //this is required in laravel for security reasons
      let csrfPath = process.env.NEXT_PUBLIC_LARAVEL_CSRF;
      axios
        .get(csrfPath)
        .then(() => {
          //in this case request the login route
          axios
            .post(process.env.NEXT_PUBLIC_LARAVEL_LOGIN, { email, password })
            .then((res) => {
              if (res.data.ok === true) {
                let { token, user } = res.data;
                dispatch(login({ user, token }));
              } else {
                dispatch(authError());
              }
            });
        })
        .catch((error) => {
          //if there is an error in the request, send a message
          dispatch(validationError(error));
        });
    } catch {
      //if there is an error in the tryCatch, send a message
      dispatch(conectionError());
    }
  };
};






export const startRegister = (data) => {
  return async (dispatch) => {
    dispatch(authChecking());

    try {
      axios.defaults.withCredentials = true;
      let csrfPath = process.env.NEXT_PUBLIC_LARAVEL_CSRF;

      axios.get(csrfPath).then(() => {
        axios({
          method: "POST",
          url: process.env.NEXT_PUBLIC_LARAVEL_REGISTER,
          data,
        })
          .then((res) => {
            console.log("res en register action", res);
            if (res.data.ok === true) {
              let { token, user } = res.data;
              dispatch(login({ user, token }));
            } 
          })
          .catch((error) => {
            dispatch(validationError(error.response.data));
          });
      });
    } catch {
      dispatch(conectionError());
    }
  };
};

export const startLogout = (token) => {
  return async (dispatch) => {
    dispatch(authChecking());
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios({ method: "POST", url: process.env.NEXT_PUBLIC_LARAVEL_LOGOUT })
    if (typeof window !== "undefined") {
      dispatch(logoutUser());
    }  
  };
};

const login = (user) => {
  return { type: LOGIN_USER, payload: user };
};

const authChecking = () => {
  return { type: AUTH_CHECKING };
};

const authError = () => {
  return {
    type: AUTH_ERROR,
    payload: { loginError: "Wrong email or password" },
  };
};

const validationError = (data) => {
  console.log('data del error', data)
  return {
    type: VALIDATION_ERROR,
    payload: { message: data.message, validationError: data.errors },
  };
}

const authErrorInCatch = (error) => {
  console.log(error)
  return {
    type: AUTH_ERROR,
    payload: { message: "Seems to be an error in the request or catch" },
  };
};

const logoutUser = () => {
  return { type: LOGOUT_USER };
};


const conectionError = () => {
  return { type: CONNECTION_ERROR, payload: { message: "Seems to be a connection error"}}
}