import { Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import * as React from "react";

import { LocationOn } from "@mui/icons-material";
import "../Register.css";

const Form2 = (payload) => {
  const {
    formData,
    prev,
    next,
    handleInputFields,
    errors,
    setFormData,
    handleDateChange,
  } = payload.payload;

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form>
          {/* Select gender */}
          <div className="register-input-control register-radio-flex">
            <h4>Select gender</h4>
            <div className="register-radio">
              <input
                type="radio"
                name="gender"
                onChange={handleInputFields}
                value="male"
                checked={formData.gender === "male"}
                id="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="register-radio">
              <input
                type="radio"
                name="gender"
                onChange={handleInputFields}
                value="female"
                checked={formData.gender === "female"}
                id="female"
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="register-radio">
              <input
                type="radio"
                name="gender"
                onChange={handleInputFields}
                value="others"
                checked={formData.gender === "others"}
                id="others"
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>
          <small className="warning-text">{errors.gender}</small>

          {/* Date of birth */}
          <div className="" style={{ width: "100%", maxWidth: "100%" }}>
            {/* <input
              type="date"
              placeholder="Date of birth"
              id="dateOfBirth"
              name="address"
              value={formData.birthday}
              onChange={handleInputFields}
              className={` ${errors.birthday ? "warngin-border" : ""}`}
            /> */}

            {/* ---------------------------------------- */}
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <DemoContainer
                style={{ width: "100%", maxWidth: "100%" }}
                components={[
                  "DatePicker",
                  "MobileDatePicker",
                  "DesktopDatePicker",
                  "StaticDatePicker",
                ]}
              >
                <DemoItem style={{ width: "100%" }}>
                  <DatePicker
                    style={{ width: "100%", maxWidth: "100%" }}
                    defaultValue={dayjs(new Date().toJSON())}
                    onChange={handleDateChange}
                    value={formData.birthday}
                    name="birthday"
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            {/* ---------------------------------------- */}
            {/* <label className="register-icons-wrap" htmlFor="dateOfBirth">
              <DateRangeOutlined className="register-icons" />
            </label> */}
          </div>
          <small className="warning-text">{errors.birthday}</small>

          {/* Address */}
          <div className="register-input-control">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              id="address"
              onChange={handleInputFields}
              className={` ${errors.address ? "warngin-border" : ""}`}
            />
            <label className="register-icons-wrap" htmlFor="address">
              <LocationOn className="register-icons" />
            </label>
          </div>
          <small className="warning-text">{errors.address}</small>

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

export default Form2;
