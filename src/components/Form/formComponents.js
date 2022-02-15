import React, { useState, useEffect } from "react";
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

const CHECKBOX_STATES = {
  Checked: true,
  Empty: false,
  Indeterminate: null,
};

const TriStateCheckbox = ({ setIsEnabledChecked, initialChecked }) => {
  const [checked, setChecked] = useState(
    initialChecked || CHECKBOX_STATES.Empty
  );
  const [label, setLabel] = useState(initialChecked ? "Yes" : "No");
  const checkboxRef = React.useRef();

  useEffect(() => {
    if (checked === CHECKBOX_STATES.Checked) {
      checkboxRef.current.checked = true;
      checkboxRef.current.indeterminate = false;
    } else if (checked === CHECKBOX_STATES.Empty) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = false;
    } else if (checked === CHECKBOX_STATES.Indeterminate) {
      checkboxRef.current.checked = false;
      checkboxRef.current.indeterminate = true;
    }
  }, [checked]);

  const handleChange = () => {
    let updatedChecked;

    if (checked === CHECKBOX_STATES.Empty) {
      updatedChecked = CHECKBOX_STATES.Checked;
      setLabel("Yes");
    } else if (checked === CHECKBOX_STATES.Checked) {
      updatedChecked = CHECKBOX_STATES.Indeterminate;
      setLabel("Indeterminate");
    } else if (checked === CHECKBOX_STATES.Indeterminate) {
      updatedChecked = CHECKBOX_STATES.Empty;
      setLabel("No");
    }

    setChecked(updatedChecked);
    setIsEnabledChecked(updatedChecked);
  };

  return (
    <FieldWrapper>
      <span>Enabled</span>
      <br />
      <label>
        <input type='checkbox' ref={checkboxRef} onChange={handleChange} />
        {label}
      </label>
    </FieldWrapper>
  );
};

export const FormCreateCheckbox = (fieldRenderProps) => {
  const { id, label, setEnabledChecked, ...others } = fieldRenderProps;

  return (
    <FieldWrapper>
      <TriStateCheckbox
        id={id}
        label={label}
        setEnabledChecked={setEnabledChecked}
        {...others}
      />
    </FieldWrapper>
  );
};

export const FormUpdateCheckbox = (fieldRenderProps) => {
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
