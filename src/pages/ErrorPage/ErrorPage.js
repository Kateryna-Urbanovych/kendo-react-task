import React from "react";
import ErrorPageImg from "../../images/error-page.png";

export const ErrorPage = () => {
  return (
    <img
      src={ErrorPageImg}
      alt='Page Not Found'
      style={{
        marginLeft: "7vw",
        width: "80%",
      }}
    />
  );
};
