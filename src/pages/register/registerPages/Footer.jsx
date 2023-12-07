import React from "react";
import { Link } from "react-router-dom";
import "../Register.css";

const Footer = () => {
  return (
    <footer className="register-footer">
      <div className="my-chat-container">
        <div className="register-nav-footer-box">
          <div className="">
            <ul className="register-nav-footer">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Business</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="register-nav-footer">
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
