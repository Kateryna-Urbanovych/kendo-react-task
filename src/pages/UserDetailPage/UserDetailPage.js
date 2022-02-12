import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { Typography } from "@progress/kendo-react-common";
import { DialogUpdateUser } from "../../components/Dialog/DialogUpdateUser";
import { usersOperations, usersSelectors } from "../../redux/users";
import NothingHere from "../../images/nothing-here.jpg";

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
  const dispatch = useDispatch();

  const location = useLocation();
  console.log("location", location);

  const users = useSelector(usersSelectors.getUpdatedUsers);
  const activeUserId = location.state;
  const activeUser = users.find((user) => user.id === activeUserId);
  console.log(activeUser);

  const [openFormUpdate, setOpenFormUpdate] = useState(false);
  const [data, setData] = useState(activeUser);
  // editItem
  // const [editItem, setEditItem] = useState({
  //   ProductID: 1,
  // });

  const handleSubmit = (event) => {
    let newData = {
      ...event,
      fullName: `${event.firstName} ${event.lastName}`,
      lastLogin: Date.now(),
      enabled: event.enabled ? "Yes" : "No",
    };
    setData(newData);
    dispatch(
      usersOperations.updateUser({ ...newData, enabled: event.enabled })
    );
    setOpenFormUpdate(false);
  };

  const enterEdit = (item) => {
    setOpenFormUpdate(true);
    // editItem
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
      {activeUser ? (
        <>
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            <Typography.h1>{activeUser.userName}</Typography.h1>
            <Typography.h5>({activeUser.lastLogin})</Typography.h5>
          </div>

          <Grid
            style={{
              fontSize: "20px",
            }}
            rowHeight={50}
            data={[data]}
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
      ) : (
        <Typography.h1>
          <img
            src={NothingHere}
            alt='Nothing Here'
            style={{
              marginLeft: "15vw",
              width: "50%",
            }}
          />
        </Typography.h1>
      )}
    </>
  );
};
