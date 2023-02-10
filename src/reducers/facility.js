const reducer = (facility = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      default:
        return facility;
    }
  };
  
  export default reducer;
  