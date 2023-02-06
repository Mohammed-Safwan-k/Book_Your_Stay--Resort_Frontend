const reducer = (room = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return room;
  }
};

export default reducer;
