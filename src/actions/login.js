import * as api from "../api";

//Actions Creators
export const login = (login) => async (dispatch) => {
  try {
    console.log(login);

    const { data } = await api.doLogin(login);
    dispatch({ type: "AUTH", data });
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (signUp) => async (dispatch) => {
  try {
    const { data } = await api.doSignUp(signUp);
    dispatch({ type: "SIGNUP", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const { data } = await api.doLogout();

    dispatch({ type: "LOGOUT", payload: data });
  } catch (err) {}
};
