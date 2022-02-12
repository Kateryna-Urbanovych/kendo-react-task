const userNameRegex = new RegExp(/^[a-zA-Z0-9]+$/);
export const userNameValidator = (value, userNameList) =>
  !value
    ? "User Name is required"
    : value.length > 15
    ? "User Name should be no more then 15 characters long"
    : !userNameRegex.test(value)
    ? "Only alphanumeric characters"
    : userNameList.includes(value.toLowerCase())
    ? "User Name should be unique"
    : "";

export const firstNameValidator = (value) =>
  !value
    ? "First Name is required"
    : value.length > 25
    ? "User Name should be no more then 25 characters long"
    : "";

export const lastNameValidator = (value) =>
  !value
    ? "Last Name is required"
    : value.length > 25
    ? "User Name should be no more then 25 characters long."
    : "";

export const totalFirstAndLastNameValidator = (values) => {
  if (values?.firstName?.length + values?.lastName?.length <= 40) {
    return;
  }

  return {
    VALIDATION_SUMMARY:
      "First Name, Last Name - together max 40 characters long.",
  };
};
