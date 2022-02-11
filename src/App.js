import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "@progress/kendo-theme-default/dist/all.css";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";

import { AppBarPanel } from "./components/AppBarPanel/AppBarPanel";
import { UserListPage } from "./pages/UserListPage/UserListPage";
import { UserDetailPage } from "./pages/UserDetailPage/UserDetailPage";
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
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </GridLayoutItem>
      </GridLayout>
    </div>
  );
};
