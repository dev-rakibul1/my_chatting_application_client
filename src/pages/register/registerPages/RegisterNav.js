import React from "react";
import { Link } from "react-router-dom";
import "../Register.css";

const RegisterNav = () => {
  return (
    <div className="register-nav">
      <div className="my-chat-container">
        <div className="register-layout">
          <div className="logo">My chat</div>
          <div className="nav-login-reg">
            <Link to="/">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNav;
