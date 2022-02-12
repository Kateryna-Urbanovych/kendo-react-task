import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { Sort, SortFilter } from "./columnMenu";
import { usersSelectors } from "../../redux/users";

const rowRender = (trElement, props) => {
  const enabled = props.dataItem.enabled;
  const black = {
    color: "black",
  };
  const red = {
    color: "red",
  };
  const trProps = {
    style: enabled === "Yes" ? black : red,
  };
  return React.cloneElement(
    trElement,
    { ...trProps },
    trElement.props.children
  );
};

export const UserListPage = () => {
  const navigate = useNavigate();
  const initialUsers = useSelector(usersSelectors.getUpdatedUsers);

  const createDataState = (dataState) => {
    return {
      result: process(initialUsers, dataState),
      dataState: dataState,
    };
  };
  let initialState = createDataState({});

  const [result, setResult] = useState(initialState.result);
  const [dataState, setDataState] = useState(initialState.dataState);

  const dataStateChange = (event) => {
    console.log(event);
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  return (
    <>
      {/* Displays no users */}
      {/* {users.length === 0 && <h1>No users</h1>} */}

      <Grid
        style={{
          maxHeight: "700px",
          fontSize: "20px",
          cursor: "pointer",
        }}
        rowHeight={50}
        data={result}
        {...dataState}
        onDataStateChange={dataStateChange}
        sortable={true}
        onRowClick={(e) => navigate("/detail", { state: e.dataItem.id })}
        rowRender={rowRender}
      >
        <Column field='id' title='User ID' width='150px' columnMenu={Sort} />
        <Column
          field='userName'
          title='User Name'
          filter={"text"}
          columnMenu={SortFilter}
        />
        <Column field='fullName' title='Full Name' columnMenu={Sort} />
        <Column field='lastLogin' title='Last Login' columnMenu={Sort} />
        <Column field='enabled' title='Enabled' columnMenu={Sort} />
      </Grid>
    </>
  );
};
