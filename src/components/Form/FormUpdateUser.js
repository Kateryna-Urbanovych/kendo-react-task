import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { FormInput, FormCheckbox } from "./formComponents";
import {
  firstNameValidator,
  lastNameValidator,
  totalFirstAndLastNameValidator,
} from "./validator";

export const FormUpdateUser = ({ cancelEdit, item }) => {
  const transformItem = {
    ...item,
    enabled: item.enabled === "Yes" ? true : false,
  };

  const handleSubmit = (dataItem) => {
    // поменять дату
    // обновить UserDetail
    // обновить UserList
    console.log("dataUpdateUser", dataItem);
    cancelEdit();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={transformItem}
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
              component={FormCheckbox}
            />
          </fieldset>
          <div className='k-form-buttons'>
            <button
              type={"submit"}
              className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary'
              disabled={!formRenderProps.allowSubmit}
            >
              Update User
            </button>
            <button
              type={"submit"}
              className='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base'
              onClick={cancelEdit}
            >
              Cancel
            </button>
          </div>
        </FormElement>
      )}
    />
  );
};
