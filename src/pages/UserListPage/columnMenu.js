import React from "react";
import {
  GridColumnMenuSort,
  GridColumnMenuFilter,
} from "@progress/kendo-react-grid";

export const Sort = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
    </div>
  );
};

export const SortFilter = (props) => {
  return (
    <div>
      <GridColumnMenuSort {...props} />
      <GridColumnMenuFilter {...props} />
    </div>
  );
};
