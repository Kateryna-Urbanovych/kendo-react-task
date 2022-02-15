import React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { FormNewUser } from "../Form/FormNewUser";

export const DialogNewUser = ({ onClose }) => {
  return (
    <Dialog
      title={"Dialog New User"}
      height={500}
      width={500}
      onClose={() => onClose(false)}
      themeColor='tertiary'
    >
      <FormNewUser onClose={onClose} />
    </Dialog>
  );
};
