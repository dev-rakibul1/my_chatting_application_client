import { LoadingButton } from "@mui/lab";
import React from "react";

const SmallSpinner = ({ color }) => {
  // console.log(color);
  return (
    <div>
      <LoadingButton
        loading
        sx={{ minWidth: 0, borderColor: color ? color : "blue", m: 1 }}
      ></LoadingButton>
    </div>
  );
};

export default SmallSpinner;
