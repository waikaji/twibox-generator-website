import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, data });
    history(`/profile`);
  } catch (error) {
    return error.response.data.message;
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    history(`/profile`);
  } catch (error) {
    return error.response.data.message;
  }
};
