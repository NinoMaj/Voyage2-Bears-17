import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import userReducer from "./userReducer";
import jobs from "./jobsReducer";

export default combineReducers({
  user: userReducer,
  jobs,
  form
});
