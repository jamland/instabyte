import { combineReducers } from "redux";

import app from "./App.reducer";
import users from "./Users.reducer";
import feed from "./Feed.reducer";
import post from "./Post.reducer";

export default combineReducers({
  app,
  users,
  feed,
  post,
});
