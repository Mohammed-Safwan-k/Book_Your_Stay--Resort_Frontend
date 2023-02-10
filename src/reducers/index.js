import { combineReducers } from "redux";

import room from "reducers/room";
import auth from "reducers/auth";
import facility from "reducers/facility"
export default combineReducers({
  room,
  auth,
  facility,
});
