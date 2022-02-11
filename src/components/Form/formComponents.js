import React from "react";
import { FieldWrapper } from "@progress/kendo-react-form";
import { Input, Checkbox } from "@progress/kendo-react-inputs";
import { Label, Error } from "@progress/kendo-react-labels";

export const FormInput = (fieldRenderProps) => {
  const {
    validationMessage,
    touched,
    label,
    id,
    valid,
    disabled,
    type,
    optional,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = touched && validationMessage;
  const errorId = showValidationMessage ? `${id}_error` : "";
  return (
    <FieldWrapper>
      <Label
        editorId={id}
        editorValid={valid}
        editorDisabled={disabled}
        optional={optional}
      >
        {label}
      </Label>
      <div className={"k-form-field-wrap"}>
        <Input
          valid={valid}
          type={type}
          id={id}
          disabled={disabled}
          {...others}
        />
        {showValidationMessage && (
          <Error id={errorId}>{validationMessage}</Error>
        )}
      </div>
    </FieldWrapper>
  );
};

export const FormCheckbox = (fieldRenderProps) => {
  const { id, disabled, optional, label, visited, modified, ...others } =
    fieldRenderProps;
  return (
    <FieldWrapper>
      <Checkbox
        label={label}
        labelOptional={optional}
        id={id}
        disabled={disabled}
        {...others}
      />
    </FieldWrapper>
  );
};
