import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersOperations from "./users-operations";

const { fetchUsers, addUser } = usersOperations;

const usersReducer = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
  [addUser.fulfilled]: (state, { payload }) => [...state, payload],
});

const loadingReducer = createReducer(false, {});

const rootUsersReducer = combineReducers({
  users: usersReducer,
  loading: loadingReducer,
});

export default rootUsersReducer;
