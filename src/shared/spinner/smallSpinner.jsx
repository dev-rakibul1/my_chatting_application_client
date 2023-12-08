import { LoadingButton } from "@mui/lab";
import React from "react";

const SmallSpinner = () => {
  return (
    <div>
      <LoadingButton
        loading
        sx={{ minWidth: 0, borderColor: "green", m: 1 }}
      ></LoadingButton>
    </div>
  );
};

export default SmallSpinner;
