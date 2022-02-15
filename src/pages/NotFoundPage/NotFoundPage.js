import React from "react";
import PageNotFound from "../../images/page-not-found.jpg";

export const NotFoundPage = () => {
  return (
    <img
      src={PageNotFound}
      alt='Page Not Found'
      style={{
        marginLeft: "7vw",
        width: "80%",
      }}
    />
  );
};
