import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

import "../Register.css";

const Form4 = (payload) => {
  const { formData, prev, next, handleInputFields, setFormData } =
    payload.payload;
  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form>
          {/* first name */}
          <div className="register-input-control">
            <input type="text" placeholder="Your first name" />
            <span className="register-icons-wrap">
              <AccountCircleIcon className="register-icons" />
            </span>
          </div>

          {/* middle name */}
          <div className="register-input-control">
            <input type="text" placeholder="Your middle name (optional)" />
            <span className="register-icons-wrap">
              <AccountCircleIcon className="register-icons" />
            </span>
          </div>

          {/* middle name */}
          <div className="register-input-control">
            <input type="text" placeholder="Your last name" />
            <span className="register-icons-wrap">
              <AccountCircleIcon className="register-icons" />
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
              Preview
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form4;
