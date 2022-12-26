import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Box } from "@mui/system";
import { useState } from "react";

import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{ maxWidth: { xs: "100%", sm: "100%", md: "50%" } }}
        className="register"
      >
        <div className="register-wrapper">
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Welcome from{" "}
            <Typography variant="span" sx={{ color: "green" }}>
              My Chat
            </Typography>
          </Typography>
          <Divider sx={{ mt: 4, mb: 1 }}>
            <Chip
              sx={{ fontSize: "17px", color: "green" }}
              label="Register now"
            />
          </Divider>
          <FormControl sx={{ maxWidth: "100%" }}>
            {/* First name */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <TextField
                fullWidth
                label="Your first name"
                id="fullWidth"
                type="text"
                name="fName"
              />
            </Box>

            {/* Last name */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <TextField
                fullWidth
                label="Your last name"
                id="fullWidth"
                type="text"
                name="lName"
              />
            </Box>

            {/* Favorite name */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <TextField
                fullWidth
                label="Your favorite name"
                id="fullWidth"
                type="text"
                name="favoriteName"
              />
            </Box>

            {/* email */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <TextField
                fullWidth
                label="Your email address"
                id="fullWidth"
                type="email"
                name="email"
              />
            </Box>

            {/* Phone */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <TextField
                fullWidth
                label="Your number"
                id="fullWidth"
                type="number"
                name="number"
              />
            </Box>

            {/* email */}

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Helper text example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={params?.inputProps?.placeholder}
                  />
                )}
              />
            </LocalizationProvider> */}

            {/* email */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Box>
            {/* email */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 2,
              }}
            >
              <OutlinedInput
                fullWidth
                label="Your password"
                id="fullWidth"
                name="fName"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>

            {/* password */}
            {/* <OutlinedInput
              sx={{ mt: 4 }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Your password"
            /> */}

            <Button
              sx={{
                mt: 4,
                textTransform: "capitalize",
                fontSize: "15px",
                fontWeight: "500",
                bgcolor: "green",
                "&:hover": {
                  backgroundColor: "#050",
                },
              }}
              variant="contained"
            >
              Register
            </Button>
          </FormControl>

          <Box
            sx={{
              my: 4,
              fontSize: "15px",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            <span>
              <a href="#">Forgot password</a>
            </span>
            <Divider sx={{ my: 4 }}>
              <Chip label="OR" />
            </Divider>
            <span>
              Already have an account in My Chat?{" "}
              <a href="../login/Login.jsx">Register</a>
            </span>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Register;
