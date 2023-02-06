import * as api from "api";

//Actions Creators
export const allRoom = () => async (dispatch) => {
  try {
    const { data } = await api.getAllRooms();
    console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
