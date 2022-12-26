import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Box className="login">
        <div className="login-wrapper">
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Welcome from{" "}
            <Typography variant="span" sx={{ color: "green" }}>
              My Chat
            </Typography>
          </Typography>
          <Divider sx={{ mt: 4, mb: 1 }}>
            <Chip sx={{ fontSize: "17px", color: "green" }} label="Login now" />
          </Divider>
          <FormControl sx={{ maxWidth: "100%" }}>
            {/* email */}
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                mt: 7,
              }}
            >
              <TextField fullWidth label="Your email address" id="fullWidth" />
            </Box>

            {/* password */}
            <OutlinedInput
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
            />

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
              Login
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
              Create an account with My Chat? <a href="#">Register</a>
            </span>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Login;
