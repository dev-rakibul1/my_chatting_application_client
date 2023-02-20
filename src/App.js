import CloseIcon from "@mui/icons-material/Close";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { Alert, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
function App() {
  const [online, setOnline] = useState([]);
  const [open, setOpen] = React.useState(true);

  const handleOffline = () => {
    setOpen(!open);
  };

  const windowsReload = () => {
    window.location.reload();
  };

  const userOnline = (
    <>
      {" "}
      <Alert
        sx={{
          width: "25%",
          zIndex: "500",
          position: "sticky",
          bottom: "5%",
          left: 0,
          color: "red",
          mb: 2,
          backgroundColor: "#ffd3d3",
        }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleOffline}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        icon={false}
        severity="success"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WifiOffIcon />{" "}
          <Typography sx={{ marginLeft: "10px" }} variant="span">
            Currently you offline
          </Typography>
          <Typography
            sx={{ marginLeft: "10px", cursor: "pointer" }}
            variant="span"
            onClick={windowsReload}
          >
            Refresh
          </Typography>
        </Box>
      </Alert>
    </>
  );

  useEffect(() => {
    const navigator = window.navigator.onLine;
    if (navigator === false) {
      setOnline(userOnline);
    }
  }, []);

  console.log("online", online);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

      {open ? <>{online}</> : undefined}
    </>
  );
}

export default App;
