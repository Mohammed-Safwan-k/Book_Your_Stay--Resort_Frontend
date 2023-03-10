import * as api from "api";

//Actions Creators
export const allfacility = () => async (dispatch) => {
  try {
    const value = JSON.parse(localStorage.getItem("resortProfile"));
    await api
      .getAllFacility(value.token)
      .then(({ data }) => {
        dispatch({ type: "FETCH_ALL", payload: data });
      })
      .catch((error) => {
        console.log(error, "this is the error");
      });
  } catch (error) {
    console.log(error.message);
  }
};
