import React from "react";
import { Outlet } from "react-router-dom";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/TopBar";
import "./Layout.css";

const Root = () => {
  return (
    <div className="layout">
      <TopBar />
      <div className="layout-wrapper">
        <div className="layout-left">
          <Sidebar />{" "}
        </div>
        <div className="layout-center">
          <Outlet />
        </div>
        <div className="layout-right">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Root;
