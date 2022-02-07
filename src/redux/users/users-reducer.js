import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const usersReducer = createReducer(null, {});

const filterReducer = createReducer("", {});

const loadingReducer = createReducer(false, {});

const rootUsersReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default rootUsersReducer;
