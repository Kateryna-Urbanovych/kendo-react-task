import { createSelector } from "@reduxjs/toolkit";

const getUsers = (state) => state.users;
const getLoading = (state) => state.loading;
const getError = (state) => state.error;

const getUpdatedUsers = createSelector([getUsers], (users) => {
  return users.map((user) => ({
    ...user,
    enabled: user.enabled ? "Yes" : "No",
  }));
});

const getUserNameList = createSelector([getUsers], (users) => {
  return users.map(({ userName }) => userName.toLowerCase());
});

const usersSelectors = {
  getUsers,
  getLoading,
  getError,
  getUpdatedUsers,
  getUserNameList,
};
export default usersSelectors;
