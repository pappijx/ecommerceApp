import {
  SET_CURRENT_USER,
  SUCCESSFUL_REGISTER,
  FAILURE_REGISTER,
  ERRORS,
  AUTH_ERROR,
} from "./types";
import axios from "axios";
import { getServer } from "../util";
import setAuthToken from "../util/setAuthToken";

// set a user
export const setCurrentUser = (user) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${getServer}/api/auth`);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }

  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// register a user
export const register = (userData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "applicatin/json",
    },
  };
  try {
    const res = await axios.post(`${getServer}/api/users`, userData, config);
    dispatch({
      type: SUCCESSFUL_REGISTER,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response.data.errors;
    if (err) {
      dispatch({
        type: ERRORS,
        payload: error,
      });
    } else {
      dispatch({
        type: FAILURE_REGISTER,
      });
    }
  }
};
