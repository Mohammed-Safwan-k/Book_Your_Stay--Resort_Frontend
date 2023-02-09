const reducer = (auth = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log(action?.data, "1232rerw");

      return { ...auth, authData: action?.data };
    case "SIGNUP":
      return { ...auth, authData: action?.data };
    case "LOGOUT":
      localStorage.clear();

      return { ...auth, authData: null };
    default:
      return auth;
  }
};

export default reducer;
