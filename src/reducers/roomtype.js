const reducer = (roomtype = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_ROOM_TYPE":
      return action.payload;
    default:
      return roomtype;
  }
};

export default reducer;
