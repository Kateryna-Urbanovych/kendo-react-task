import React from "react";
import { Dialog, DialogActionsBar } from "@progress/kendo-react-dialogs";

export const DialogNewUser = ({ onClose }) => {
  return (
    <Dialog
      title={"Form"}
      height={400}
      width={600}
      onClose={() => onClose(false)}
      themeColor='tertiary'
    >
      <p>
        Add new user with fields: UserName, FirstName, LastName and Enabled.
      </p>
      <DialogActionsBar>
        <button
          className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
          onClick={() => console.log("add new user")}
        >
          Add new user
        </button>
      </DialogActionsBar>
    </Dialog>
  );
};
