import * as api from "api";

//Actions Creators
export const allroomtype = () => async (dispatch) => {
  try {
    const value = JSON.parse(localStorage.getItem("resortProfile"));
    await api
      .getAllRoomType(value.token)
      .then(({ data }) => {
        dispatch({ type: "FETCH_ALL_ROOM_TYPE", payload: data });
      })
      .catch((error) => {
        console.log(error, "this is the error");
      });
  } catch (error) {
    console.log(error.message);
  }
};
