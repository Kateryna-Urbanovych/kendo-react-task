import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { DialogNewUser } from "../Dialog/DialogNewUser";
import s from "./ButtonNewUser.module.scss";

export const ButtonNewUser = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        themeColor='tertiary'
        fillMode='outline'
        size='large'
        rounded='full'
        className={s.button}
        onClick={() => setVisible(true)}
      >
        New User
      </Button>
      {visible && <DialogNewUser onClose={setVisible} />}
    </>
  );
};
