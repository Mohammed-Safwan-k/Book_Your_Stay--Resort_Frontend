const reducer = (auth = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      if (action?.data) {
        localStorage.setItem(
          "resortProfile",
          JSON.stringify({ ...action?.data })
        );
      }
      return { ...auth, authData: action?.data };
    case "SIGNUP":
      return { ...auth, authData: action?.data };
    case "LOGOUT":
      localStorage.removeItem("resortProfile");
      return { ...auth, authData: null };
    default:
      return auth;
  }
};

export default reducer;
