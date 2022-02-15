import "@progress/kendo-theme-default/dist/all.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppBarPanel } from "./components/AppBarPanel/AppBarPanel";
import { UserListPage } from "./pages/UserListPage/UserListPage";
import { UserDetailPage } from "./pages/UserDetailPage/UserDetailPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { usersOperations } from "./redux/users";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersOperations.fetchUsers());
  }, [dispatch]);

  return (
    <div className='grid-layout-container common-container'>
      <GridLayout
        gap={{
          rows: 2,
        }}
      >
        <GridLayoutItem row={1}>
          <AppBarPanel />
        </GridLayoutItem>
        <GridLayoutItem row={2}>
          <Routes>
            <Route path='/' element={<UserListPage />} />
            <Route path='/detail' element={<UserDetailPage />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </GridLayoutItem>
      </GridLayout>

      <ToastContainer autoClose={3000} theme={"colored"} />
    </div>
  );
};
