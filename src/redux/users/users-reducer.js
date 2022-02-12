import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersOperations from "./users-operations";

const { fetchUsers, addUser, updateUser } = usersOperations;

const usersReducer = createReducer([], {
  [fetchUsers.fulfilled]: (_, { payload }) => payload,
  [addUser.fulfilled]: (state, { payload }) => [...state, payload],
  [updateUser.fulfilled]: (state, { payload }) => [
    ...state.map((user) => (user.id === payload.id ? payload : user)),
  ],
});

const loadingReducer = createReducer(false, {});

const rootUsersReducer = combineReducers({
  users: usersReducer,
  loading: loadingReducer,
});

export default rootUsersReducer;
