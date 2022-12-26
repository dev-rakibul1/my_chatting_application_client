import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";

const ProfileLayout = () => {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
