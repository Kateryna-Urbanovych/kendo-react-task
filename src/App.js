import "@progress/kendo-theme-default/dist/all.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppBarPanel } from "./components/AppBarPanel/AppBarPanel";
import { RoutesPages } from "./components/RoutesPages/RoutesPages";
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
          <RoutesPages />
        </GridLayoutItem>
      </GridLayout>

      <ToastContainer autoClose={3000} theme={"colored"} />
    </div>
  );
};
