import { combineReducers } from "redux";

import room from "reducers/room";
import auth from "reducers/auth";
export default combineReducers({
  room,
  auth,
});
