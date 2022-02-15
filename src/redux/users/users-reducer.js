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

const loadingReducer = createReducer(false, {
  [fetchUsers.pending]: () => true,
  [fetchUsers.fulfilled]: () => false,
  [fetchUsers.rejected]: () => false,
  [addUser.pending]: () => true,
  [addUser.fulfilled]: () => false,
  [addUser.rejected]: () => false,
  [updateUser.pending]: () => true,
  [updateUser.fulfilled]: () => false,
  [updateUser.rejected]: () => false,
});

const errorReducer = createReducer(false, {
  [fetchUsers.rejected]: () => true,
  [fetchUsers.fulfilled]: () => false,
  [addUser.rejected]: () => true,
  [addUser.fulfilled]: () => false,
  [updateUser.rejected]: () => true,
  [updateUser.fulfilled]: () => false,
});

const rootUsersReducer = combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootUsersReducer;
