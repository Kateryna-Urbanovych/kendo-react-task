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

  const [dataState, setDataState] = useState({
    sort: [{ field: "id", dir: "asc" }],
    take: 10,
    skip: 0,
  });

  return (
    <>
      {/* Displays no users */}
      {/* {users.length === 0 && <h1>No users</h1>} */}

      <Grid
        style={{
          maxHeight: "1500px",
          fontSize: "20px",
          cursor: "pointer",
        }}
        rowHeight={50}
        data={process(initialUsers, dataState)}
        {...dataState}
        onDataStateChange={(e) => {
          setDataState(e.dataState);
        }}
        sortable={true}
        filterable={true}
        onRowClick={(e) => navigate("/detail", { state: e.dataItem.id })}
        rowRender={rowRender}
      >
        <Column
          field='id'
          title='User ID'
          width='150px'
          // columnMenu={Sort}
          filterable={false}
        />
        <Column
          field='userName'
          title='User Name'
          filter={"text"}
          // columnMenu={SortFilter}
        />
        <Column
          field='fullName'
          title='Full Name'
          // columnMenu={Sort}
          filterable={false}
        />
        <Column
          field='lastLogin'
          title='Last Login'
          // columnMenu={Sort}
          filterable={false}
        />
        <Column
          field='enabled'
          title='Enabled'
          // columnMenu={Sort}
          filterable={false}
        />
      </Grid>
    </>
  );
};
