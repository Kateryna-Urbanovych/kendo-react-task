import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "@telerik/kendo-intl";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { Typography } from "@progress/kendo-react-common";
import { DialogUpdateUser } from "../../components/Dialog/DialogUpdateUser";
import { usersOperations, usersSelectors } from "../../redux/users";
import { loadingPanel } from "../../components/Loader/loadingPanel";
import NothingHere from "../../images/nothing-here.jpg";
import {
  successUpdateNotification,
  errorNotification,
} from "../../components/Notification/Notification";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(usersSelectors.getLoading);
  const error = useSelector(usersSelectors.getError);

  const location = useLocation();
  const activeUserId = location.state;

  const users = useSelector(usersSelectors.getUpdatedUsers);
  const activeUser = users.find((user) => user.id === activeUserId);

  const [openFormUpdate, setOpenFormUpdate] = useState(false);
  const [data, setData] = useState(activeUser);

  useEffect(() => {
    if (error) {
      errorNotification();
      navigate("/error");
    }
  }, [error, navigate]);

  const handleSubmit = (event) => {
    let newData = {
      ...event,
      fullName: `${event.firstName} ${event.lastName}`,
      lastLogin: formatDate(new Date(), "yyyy-MM-dd HH:mm"),
      enabled: event.enabled ? "Yes" : "No",
    };
    setData(newData);
    dispatch(
      usersOperations.updateUser({ ...newData, enabled: event.enabled })
    );
    setOpenFormUpdate(false);
    setTimeout(successUpdateNotification, 1500);
  };

  const enterEdit = (item) => {
    setOpenFormUpdate(true);
  };

  const handleCancelEdit = () => {
    setOpenFormUpdate(false);
  };

  const MyEditCommandCell = (props) => (
    <EditCommandCell {...props} enterEdit={enterEdit} />
  );

  return (
    <>
      {loading && loadingPanel}

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
        <>
          <Typography.h2
            style={{
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            Please, select some User...
          </Typography.h2>
          <img
            src={NothingHere}
            alt='Nothing Here'
            style={{
              marginLeft: "18vw",
              width: "50%",
            }}
          />
        </>
      )}
    </>
  );
};
