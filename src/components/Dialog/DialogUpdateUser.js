import React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { FormUpdateUser } from "../Form/FormUpdateUser";

export const DialogUpdateUser = ({ cancelEdit, item }) => {
  return (
    <Dialog
      title={"Dialog Update User"}
      height={400}
      width={500}
      onClose={cancelEdit}
      themeColor='tertiary'
    >
      <FormUpdateUser cancelEdit={cancelEdit} item={item} />
    </Dialog>
  );
};
