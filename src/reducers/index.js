import { combineReducers } from "redux";
import auth from "./auth";
import users from "./users";
import campaign from "./campaign"

export default combineReducers({
  auth,
  users,
  campaign
})