import React from "react";

import { users } from "./users";

export const UserListPage = () => {
  return (
    <>
      {users.map(({ userName }) => (
        <p>{userName}</p>
      ))}
    </>
  );
};
