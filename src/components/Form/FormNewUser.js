import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formatDate } from "@telerik/kendo-intl";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput, FormCreateCheckbox } from "./formComponents";
import {
  userNameValidator,
  firstNameValidator,
  lastNameValidator,
  totalFirstAndLastNameValidator,
} from "./validator";
import { usersOperations, usersSelectors } from "../../redux/users";
import { successCreateNotification } from "../Notification/Notification";

export const FormNewUser = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userNameList = useSelector(usersSelectors.getUserNameList);

  const [isEnabledChecked, setIsEnabledChecked] = useState(false);

  const handleSubmit = (dataItem) => {
    const { firstName, lastName } = dataItem;

    const newUser = {
      ...dataItem,
      fullName: `${firstName} ${lastName}`,
      lastLogin: formatDate(new Date(), "yyyy-MM-dd HH:mm"),
      enabled: isEnabledChecked,
    };

    dispatch(usersOperations.addUser(newUser));
    onClose(false);
    navigate("/");
    setTimeout(successCreateNotification, 1500);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validator={totalFirstAndLastNameValidator}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: 450,
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            {formRenderProps.visited &&
              formRenderProps.errors &&
              formRenderProps.errors.VALIDATION_SUMMARY && (
                <div className={"k-messagebox k-messagebox-error"}>
                  {formRenderProps.errors.VALIDATION_SUMMARY}
                </div>
              )}

            <Field
              id={"userName"}
              name={"userName"}
              label={"User Name"}
              component={FormInput}
              validator={(value) => userNameValidator(value, userNameList)}
            />
            <Field
              id={"firstName"}
              name={"firstName"}
              label={"First Name"}
              component={FormInput}
              validator={firstNameValidator}
            />
            <Field
              id={"lastName"}
              name={"lastName"}
              label={"Last Name"}
              component={FormInput}
              validator={lastNameValidator}
            />
            <Field
              id={"enabled"}
              name={"enabled"}
              label={"Enabled"}
              setIsEnabledChecked={setIsEnabledChecked}
              component={FormCreateCheckbox}
            />
          </fieldset>
          <div className='k-form-buttons'>
            <Button themeColor={"primary"} type={"submit"}>
              Create New User
            </Button>
            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
          </div>
        </FormElement>
      )}
    />
  );
};
