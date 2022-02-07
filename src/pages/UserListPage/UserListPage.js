import React, { useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { orderBy } from "@progress/kendo-data-query";
import { users } from "./users";

const initialSort = [
  {
    field: "id",
    dir: "asc",
  },
];

const rowRender = (trElement, props) => {
  const enabled = props.dataItem.enabled;
  // const green = {
  //   backgroundColor: "rgb(55, 180, 0,0.32)",
  // };
  // const red = {
  //   backgroundColor: "rgb(243, 23, 0, 0.32)",
  // };
  const black = {
    color: "black",
  };
  const red = {
    color: "red",
  };
  const trProps = {
    style: enabled ? black : red,
  };
  return React.cloneElement(
    trElement,
    { ...trProps },
    trElement.props.children
  );
};

export const UserListPage = () => {
  const [sort, setSort] = useState(initialSort);

  return (
    <>
      <Grid
        style={{
          maxHeight: "700px",
          fontSize: "20px",
          cursor: "pointer",
        }}
        rowHeight={50}
        data={orderBy(users, sort)}
        sortable={true}
        sort={sort}
        onSortChange={(e) => {
          setSort(e.sort);
        }}
        onRowClick={(e) => console.log(e.dataItem)}
        rowRender={rowRender}
      >
        <Column field='id' title='User ID' />
        <Column field='userName' title='User Name' />
        <Column field='fullName' title='Full Name' />
        <Column field='lastLogin' title='Last Login' />
        <Column field='enabled' title='Enabled' />
      </Grid>
    </>
  );
};
