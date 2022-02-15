import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserListPage } from "../../pages/UserListPage/UserListPage";
import { UserDetailPage } from "../../pages/UserDetailPage/UserDetailPage";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { path } from "./path";

export const RoutesPages = () => {
  const { home, detail, error, anything } = path;

  return (
    <Routes>
      <Route path={home} element={<UserListPage />} />
      <Route path={detail} element={<UserDetailPage />} />
      <Route path={error} element={<ErrorPage />} />
      <Route path={anything} element={<NotFoundPage />} />
    </Routes>
  );
};
