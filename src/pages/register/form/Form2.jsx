import { Button } from "@mui/material";

import { DateRangeOutlined, LocationOn } from "@mui/icons-material";
import "../Register.css";

const Form2 = (payload) => {
  const { formData, prev, next, handleInputFields, setFormData } =
    payload.payload;
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

          {/* Date of birth */}
          <div className="register-input-control">
            <input type="date" placeholder="Date of birth" />
            <span className="register-icons-wrap">
              <DateRangeOutlined className="register-icons" />
            </span>
          </div>

          {/* Address */}
          <div className="register-input-control">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputFields}
            />
            <span className="register-icons-wrap">
              <LocationOn className="register-icons" />
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

export default Form2;
