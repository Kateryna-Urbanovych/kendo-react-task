import React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { FormNewUser } from "../FormNewUser/FormNewUser";

export const DialogNewUser = ({ onClose }) => {
  return (
    <Dialog
      title={"Dialog New User"}
      height={500}
      width={550}
      onClose={() => onClose(false)}
      themeColor='tertiary'
    >
      <FormNewUser />
    </Dialog>
  );
};
