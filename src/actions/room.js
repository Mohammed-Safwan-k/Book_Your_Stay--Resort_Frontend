import * as api from "api";

//Actions Creators
export const allRoom = () => async (dispatch) => {
  try {
    const value = JSON.parse(localStorage.getItem("resortProfile"));
    await api
      .getAllRooms(value.token)
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

export const addRoom = (room) => async (dispatch) => {
  try {
    const value = JSON.parse(localStorage.getItem("resortProfile"));
    const { data } = await api.addRoom(room, value.token);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
