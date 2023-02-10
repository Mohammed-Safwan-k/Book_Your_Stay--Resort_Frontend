import { combineReducers } from "redux";

import room from "reducers/room";
import auth from "reducers/auth";
import facility from "reducers/facility"
import roomtype from "reducers/roomtype"
export default combineReducers({
  room,
  auth,
  facility,
  roomtype,
});
