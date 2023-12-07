import { Button } from "@mui/material";

import {
  AccountCircleOutlined,
  OpenInBrowserTwoTone,
  VerifiedUserSharp,
} from "@mui/icons-material";
import "../Register.css";

const Form1 = (payload) => {
  const { formData, next, errors, handleInputFields, setFormData } =
    payload.payload;

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        {/* first name */}
        <div className="register-input-control">
          <input
            type="text"
            placeholder="Your first name"
            value={formData.firstName}
            onChange={handleInputFields}
            name="firstName"
            className={` ${errors.firstName ? "warngin-border" : ""}`}
          />
          <span className="register-icons-wrap">
            <AccountCircleOutlined className="register-icons" />
          </span>
        </div>
        <small className="warning-text">{errors.firstName}</small>

        {/* middle name */}

        <div className="register-input-control">
          <input
            type="text"
            placeholder="Your middle name (optional)"
            value={formData.middleName}
            onChange={handleInputFields}
            name="middleName"
            className={` ${errors.middleName ? "warngin-border" : ""}`}
          />
          <span className="register-icons-wrap">
            <OpenInBrowserTwoTone className="register-icons" />
          </span>
        </div>
        <small className="warning-text">{errors.middleName}</small>

        {/* last name */}
        <div className="register-input-control">
          <input
            type="text"
            placeholder="Your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputFields}
            className={` ${errors.lastName ? "warngin-border" : ""}`}
          />
          <span className="register-icons-wrap">
            <VerifiedUserSharp className="register-icons" />
          </span>
        </div>
        <small className="warning-text">{errors.lastName}</small>

        <div className="register-button text-right">
          <Button
            variant="contained"
            type="submit"
            color="success"
            onClick={next}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Form1;
