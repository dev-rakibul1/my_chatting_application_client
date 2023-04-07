import CloseIcon from "@mui/icons-material/Close";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { Alert, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";

function App() {
  const [open, setOpen] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    setOpen(!open);
  };

  const windowsReload = () => {
    window.location.reload();
  };

  const userOffline = (
    <>
      {" "}
      <Alert
        sx={{
          color: "red",
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

  // user online offline check
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>

      <Box
        sx={{
          zIndex: "500",
          position: "sticky",
          bottom: "5%",
          left: 0,
          color: "red",
          mb: 2,
          backgroundColor: "#ffd3d3",
          display: "inline-block",
        }}
      >
        {open ? (
          <div>{isOnline ? undefined : <>{userOffline}</>}</div>
        ) : undefined}
      </Box>
      <Toaster></Toaster>
    </>
  );
}

export default App;
