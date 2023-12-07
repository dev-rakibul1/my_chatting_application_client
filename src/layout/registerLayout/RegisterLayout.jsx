import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/register/registerPages/Footer";
import RegisterNav from "../../pages/register/registerPages/RegisterNav";

const RegisterLayout = () => {
  return (
    <div>
      <RegisterNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RegisterLayout;
