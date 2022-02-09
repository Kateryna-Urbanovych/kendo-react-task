import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { FormInput, FormCheckbox } from "./formComponents";
import {
  userNameValidator,
  firstNameValidator,
  lastNameValidator,
  totalFirstAndLastNameValidator,
} from "./validator";

export const FormNewUser = () => {
  const handleSubmit = (dataItem) => console.log("dataCreateUser", dataItem);

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
              validator={userNameValidator}
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
              component={FormCheckbox}
            />
          </fieldset>
          <div className='k-form-buttons'>
            <Button
              themeColor={"primary"}
              type={"submit"}
              disabled={!formRenderProps.allowSubmit}
            >
              Create New User
            </Button>
            <Button onClick={formRenderProps.onFormReset}>Clear</Button>
          </div>
        </FormElement>
      )}
    />
  );
};
