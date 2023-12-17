import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";

const Spinner = () => {
  return (
    <Box>
      <CircularProgress sx={{ color: "green" }} />
    </Box>
  );
};

export default Spinner;
