import React, { useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { Sort, SortFilter } from "./columnMenu";
import { users } from "./users";

const updatedUsers = users.map((user) => ({
  ...user,
  enabled: user.enabled ? "Yes" : "No",
}));

const createDataState = (dataState) => {
  return {
    result: process(updatedUsers.slice(0), dataState),
    dataState: dataState,
  };
};

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
  let initialState = createDataState({
    take: 8,
    skip: 0,
  });

  const [result, setResult] = useState(initialState.result);
  const [dataState, setDataState] = useState(initialState.dataState);

  const dataStateChange = (event) => {
    let updatedState = createDataState(event.dataState);
    setResult(updatedState.result);
    setDataState(updatedState.dataState);
  };

  return (
    <>
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
        onRowClick={(e) => console.log(e.dataItem)}
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
