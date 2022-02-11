import { createSelector } from "@reduxjs/toolkit";

const getUsers = (state) => state.users;

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
  getUpdatedUsers,
  getUserNameList,
};
export default usersSelectors;
