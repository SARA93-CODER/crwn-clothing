import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//we make a gaint reducer that contains all the small reducers that the app needs by using combineReducers func.
export default combineReducers({
  user: userReducer,
});
