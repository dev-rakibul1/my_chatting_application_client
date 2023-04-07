import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./Layout.css";

const Root = () => {
  return (
    <div className="layout">
      <TopBar />
      <div className=" my-chat-container">
        <div className="layout-wrapper ">
          <Box
            className="layout-left"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Sidebar />{" "}
          </Box>
          <div className="layout-center">
            <Outlet />
          </div>
          <Box
            className="layout-right"
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            <Rightbar />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Root;
