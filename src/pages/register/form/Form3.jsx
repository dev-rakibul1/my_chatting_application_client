import { Button } from "@mui/material";

import {
  Call,
  EmailOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import "../Register.css";

const Form3 = (payload) => {
  const [visibleNewPassword, setVisibleNewPassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const { formData, prev, next, handleInputFields, errors, setFormData } =
    payload.payload;

  const handleVisableNewPassword = () => {
    setVisibleNewPassword(!visibleNewPassword);
  };
  const handleVisableConfirmPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form>
          {/* Email */}
          <div className="register-input-control">
            <input
              type="email"
              placeholder="Your Email address"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputFields}
              className={` ${errors.email ? "warngin-border" : ""}`}
            />
            <label htmlFor="email" className="register-icons-wrap">
              <EmailOutlined className="register-icons" />
            </label>
          </div>
          <small className="warning-text">{errors.email}</small>

          {/* Phone number */}
          <div className="register-input-control">
            <input
              type="number"
              placeholder="Phone number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputFields}
              className={` ${errors.phone ? "warngin-border" : ""}`}
            />
            <label htmlFor="phone" className="register-icons-wrap">
              <Call className="register-icons" />
            </label>
          </div>
          <small className="warning-text">{errors.phone}</small>

          {/* Password */}
          <div className="register-input-control">
            <input
              placeholder="Password"
              id="password"
              type={visibleNewPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputFields}
              className={`register-icons ${
                errors.password ? "warngin-border" : ""
              }`}
            />
            <label
              htmlFor="password"
              className="register-icons-wrap"
              onClick={handleVisableNewPassword}
            >
              {visibleNewPassword ? (
                <Visibility className="register-icons" />
              ) : (
                <VisibilityOff className="register-icons" />
              )}
            </label>
          </div>
          <small className="warning-text">{errors.password}</small>

          {/* Confirm Password */}
          <div className="register-input-control">
            <input
              type={visibleConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputFields}
              className={` ${errors.confirmPassword ? "warngin-border" : ""}`}
            />
            <label
              htmlFor="confirmPassword"
              className="register-icons-wrap"
              onClick={handleVisableConfirmPassword}
            >
              {visibleConfirmPassword ? (
                <Visibility className="register-icons" />
              ) : (
                <VisibilityOff className="register-icons" />
              )}
            </label>
          </div>
          <small className="warning-text">{errors.confirmPassword}</small>

          <div className="register-button">
            <Button
              variant="contained"
              type="submit"
              color="success"
              onClick={prev}
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="success"
              onClick={(e) => next(e)}
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form3;
