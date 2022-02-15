import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { usersSelectors } from "../../redux/users";
import { loadingPanel } from "../../components/Loader/loadingPanel";

const filterOperators = {
  text: [
    {
      text: "grid.filterContainsOperator",
      operator: "contains",
    },
  ],
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
  const navigate = useNavigate();
  const loading = useSelector(usersSelectors.getLoading);
  const error = useSelector(usersSelectors.getError);
  const initialUsers = useSelector(usersSelectors.getUpdatedUsers);

  useEffect(() => {
    if (error) {
      alert("Sorry, something went wrong!");
      navigate("/error");
    }
  }, [error, navigate]);

  const [dataState, setDataState] = useState({
    sort: [{ field: "id", dir: "asc" }],
  });

  return (
    <>
      {loading && loadingPanel}

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
        filterOperators={filterOperators}
        onRowClick={(e) => navigate("/detail", { state: e.dataItem.id })}
        rowRender={rowRender}
      >
        <Column field='id' title='User ID' width='150px' filterable={false} />
        <Column field='userName' title='User Name' />
        <Column field='fullName' title='Full Name' filterable={false} />
        <Column
          field='lastLogin'
          title='Last Login'
          filterable={false}
          data-dateformat='dddd MMM dd, yyyy hh:mmtt'
        />
        <Column field='enabled' title='Enabled' filterable={false} />
      </Grid>
    </>
  );
};
