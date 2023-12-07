import { Button } from "@mui/material";

import { Call, EmailOutlined, Password } from "@mui/icons-material";
import "../Register.css";

const Form3 = (payload) => {
  const { formData, prev, next, handleInputFields, setFormData } =
    payload.payload;
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
              name="email"
              value={formData.email}
              onChange={handleInputFields}
            />
            <span className="register-icons-wrap">
              <EmailOutlined className="register-icons" />
            </span>
          </div>

          {/* Phone number */}
          <div className="register-input-control">
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleInputFields}
            />
            <span className="register-icons-wrap">
              <Call className="register-icons" />
            </span>
          </div>

          {/* Password */}
          <div className="register-input-control">
            <input
              placeholder="Password"
              type="password"
              className="register-icons"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputFields}
            />
            <span className="register-icons-wrap">
              <Password className="register-icons" />
            </span>
          </div>

          {/* Confirm Password */}
          <div className="register-input-control">
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputFields}
            />
            <span className="register-icons-wrap">
              <Password className="register-icons" />
            </span>
          </div>

          <div className="register-button">
            <Button
              variant="contained"
              type="submit"
              color="success"
              onClick={prev}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="success"
              onClick={next}
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
