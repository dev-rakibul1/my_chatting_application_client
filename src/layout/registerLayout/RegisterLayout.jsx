import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/register/registerPages/Footer";
import RegisterNav from "../../pages/register/registerPages/RegisterNav";

const RegisterLayout = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <RegisterNav />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default RegisterLayout;
