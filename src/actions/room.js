import * as api from "api";

//Actions Creators
export const allRoom = () => async (dispatch) => {
  try {
    const { data } = await api.getAllRooms();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
