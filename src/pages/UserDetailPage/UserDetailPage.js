import React, { useState } from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { Typography } from "@progress/kendo-react-common";
import { DialogUpdateUser } from "../../components/Dialog/DialogUpdateUser";

import { users } from "../UserListPage/users";
const activeUserId = 1;
const activeUser = users.find((user) => user.id === activeUserId);

const EditCommandCell = (props) => {
  return (
    <td>
      <button
        className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary'
        onClick={() => props.enterEdit(props.dataItem)}
      >
        Update
      </button>
    </td>
  );
};

export const UserDetailPage = () => {
  const { userName, lastLogin } = activeUser;

  const [openFormUpdate, setOpenFormUpdate] = useState(false);
  const [data, setData] = useState(activeUser);
  console.log("dataActiveUser", data);
  // const [editItem, setEditItem] = useState({
  //   ProductID: 1,
  // });

  const handleSubmit = (event) => {
    console.log("event", event);
    // let newData = data.map((item) => {
    //   if (event.ProductID === item.ProductID) {
    //     item = { ...event };
    //   }

    //   return item = {...event};
    // });
    let newData = { ...event };
    setData(newData);
    setOpenFormUpdate(false);
  };

  const enterEdit = (item) => {
    setOpenFormUpdate(true);
    // setEditItem(item);
  };

  const handleCancelEdit = () => {
    setOpenFormUpdate(false);
  };

  const MyEditCommandCell = (props) => (
    <EditCommandCell {...props} enterEdit={enterEdit} />
  );

  return (
    <>
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <Typography.h1>{userName}</Typography.h1>
        <Typography.h5>({lastLogin})</Typography.h5>
      </div>

      <Grid
        style={{
          fontSize: "20px",
        }}
        rowHeight={50}
        data={[activeUser]}
      >
        <Column field='firstName' title='First Name' />
        <Column field='lastName' title='Last Name' />
        <Column field='enabled' title='Enabled' />
        <Column cell={MyEditCommandCell} />
      </Grid>

      {openFormUpdate && (
        <DialogUpdateUser
          cancelEdit={handleCancelEdit}
          onSubmit={handleSubmit}
          item={data}
        />
      )}
    </>
  );
};
