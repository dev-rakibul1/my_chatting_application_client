import { Button, Chip, Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import {
  AccountCircleOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/api/userApiSlice";
import SmallSpinner from "../../shared/spinner/smallSpinner";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [responseServerError, setResponseServerError] = useState("");
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [loginUser, { isLoading, error, isError, isSuccess }] =
    useLoginUserMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      setResponseServerError(error?.data?.message);
    } else {
      setResponseServerError("");
    }
  }, [isError, error]);

  const handleInputFields = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = " Email is not valid!";
      isValid = false;
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required!";
      isValid = false;
    } else if (
      formData.password &&
      (formData.password.length > 64 || formData.password.length < 6)
    ) {
      newErrors.password = "Password must be between 6 to 64 charter.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // console.log(errors);
  const handleLoginUserForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      loginUser(formData);
      // console.log("All data____:", formData);
    } else {
      console.error("Form has errors. Please fix them.");
    }
  };

  if (isSuccess) {
    navigate("/");
  }

  return (
    <>
      <Box
        className="login"
        sx={{ maxWidth: { xs: "100%", sm: "60%", md: "40%" } }}
      >
        <div className="login-wrapper">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: { xs: "21px", sm: "30px", md: "35px" },
            }}
          >
            Welcome from{" "}
            <Typography variant="span" sx={{ color: "green" }}>
              My Chat
            </Typography>
          </Typography>
          <Divider sx={{ mt: 1, mb: 1 }}>
            <Chip
              sx={{
                fontSize: { xs: "14px", sm: "17px", md: "17px" },
                color: "green",
              }}
              label="Login now"
            />
          </Divider>

          {responseServerError && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: "#ffd3d3",
                  padding: "10px",
                  textAlign: "center",
                  maxWidth: "100%",
                  width: "320px",
                  color: "red",
                  display: "flex",
                  borderRadius: "4px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.875rem",
                }}
              >
                {responseServerError}
              </span>
            </Box>
          )}

          <form
            className="register-form-wrapper"
            onSubmit={handleLoginUserForm}
          >
            {/* Email */}
            <div className="register-input-control">
              <input
                type="emial"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputFields}
                name="email"
                id="email"
                className={`${errors.email ? "warngin-border" : ""}`}
              />
              <label htmlFor="email" className="register-icons-wrap">
                <AccountCircleOutlined className="register-icons" />
              </label>
            </div>
            <small className="warning-text">{errors.email}</small>

            {/* Password */}
            <div className="register-input-control">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputFields}
                name="password"
                id="password"
                className={` ${errors.password ? "warngin-border" : ""}`}
              />
              <label
                htmlFor="password"
                className="register-icons-wrap"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <Visibility className="register-icons" />
                ) : (
                  <VisibilityOff className="register-icons" />
                )}
              </label>
            </div>
            <small className="warning-text">{errors.password}</small>

            <div className="register-button text-right">
              <Button
                variant="contained"
                type="submit"
                color="success"
                className="login-register"
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                {isLoading ? <SmallSpinner color="white" /> : "Log in"}
              </Button>
            </div>
          </form>

          <Box
            sx={{
              my: 1,
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            <Typography variant="span">
              <Link style={{ color: "green" }} to="/">
                Forgot password
              </Link>
            </Typography>
            <Divider sx={{ my: 1 }}>
              <Chip label="OR" />
            </Divider>
            <p
              className="account-have-none text-center"
              style={{ marginTop: "15px" }}
            >
              Create an account with My Chat?{" "}
              <Link to="/auth/register" style={{ color: "green" }}>
                Register
              </Link>
            </p>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Login;
