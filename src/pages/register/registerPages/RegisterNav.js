import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Register.css";

const RegisterNav = () => {
  const location = useLocation();
  return (
    <div className="register-nav">
      <div className="my-chat-container">
        <div className="register-layout">
          <Link to="/" style={{ border: "none", textDecoration: "none" }}>
            <div className="logo">My Chat</div>
          </Link>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              className="nav-login-reg"
              style={{
                marginRight: "10px",
                color: "#fff",
                textDecoration: "none",
              }}
              to="/auth/docs"
            >
              Docuemnts
            </Link>

            {location.pathname === "/auth/login" && (
              <div className="nav-login-reg">
                <Link to="/auth/register">Register</Link>
              </div>
            )}
            {location.pathname === "/auth/register" && (
              <div className="nav-login-reg">
                <Link to="/auth/login">Log in</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNav;
