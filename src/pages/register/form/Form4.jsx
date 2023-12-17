import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserCreateMutation } from "../../../redux/api/userApiSlice";
import SmallSpinner from "../../../shared/spinner/smallSpinner";
import "../Register.css";

const Form4 = (payload) => {
  const { formData, prev } = payload.payload;
  const navigate = useNavigate();
  const [visiblePass, setVisiblePass] = useState(false);
  const [responseServerError, setResponseServerError] = useState("");
  // Get, POST method form Redux
  const [createUser, { error, isLoading, isError, isSuccess }] =
    useUserCreateMutation({
      refetchOnMountOrArgChange: true,
      pollingInterval: 30000,
    });

  useEffect(() => {
    if (isError) {
      setResponseServerError(error?.data?.message);
    } else {
      setResponseServerError("");
    }
  }, [isError, error]);

  const handleVisablePass = () => {
    setVisiblePass(!visiblePass);
  };

  // console.log("Step - 4:", formData);

  const handleUserFormSubmit = async (e) => {
    e.preventDefault();

    createUser(formData);
    // console.log("User form submit___:", formData);
  };

  if (isSuccess) {
    navigate("/");
  }

  return (
    <>
      {/* user info */}
      <div className="register-form-wrapper">
        <form onSubmit={handleUserFormSubmit}>
          <article className="">
            <Typography variant="h5" sx={{ py: 3, textAlign: "center" }}>
              Your submission
            </Typography>

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
            {/* name info */}
            <Box sx={{}}>
              <div className="">
                {/* First name */}
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    mt: 2,
                  }}
                >
                  First Name
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {formData.firstName}
                </Typography>
              </div>

              {/* middle name */}
              <div className="">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    mt: 2,
                  }}
                >
                  Middle Name
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {formData.middleName ? formData.middleName : "Empty"}
                </Typography>
              </div>
              <div className="">
                {/* last name */}
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    mt: 2,
                  }}
                >
                  Last Name
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {formData.lastName}
                </Typography>
              </div>
            </Box>

            {/* Gender and address info */}
            <Box sx={{}}>
              {/* Gender */}
              <div className="">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    mt: 2,
                  }}
                >
                  Gender
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {formData.gender}
                </Typography>
              </div>
              {/*Date of birth */}
              <div className="">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    mt: 2,
                  }}
                >
                  Date of birth
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {formData.birthday}
                </Typography>
              </div>
              {/* address */}
              <div className="">
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    display: "inline-block",
                    color: "#040",
                    mt: 2,
                  }}
                >
                  Address
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "14px", textTransform: "capitalize" }}
                >
                  {formData.address}
                </Typography>
              </div>
            </Box>
            {/*Email number */}
            <Typography
              variant="h4"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                display: "inline-block",
                color: "#040",
                mt: 2,
              }}
            >
              Email Address
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", textTransform: "lowercase" }}
            >
              {formData.email}
            </Typography>
            {/*Mobile number */}
            <Typography
              variant="h4"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                display: "inline-block",
                color: "#040",
                mt: 2,
              }}
            >
              Mobile Number
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", textTransform: "capitalize" }}
            >
              {formData.phone}
            </Typography>

            {/*Password */}
            <Typography
              variant="h4"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                display: "inline-block",
                color: "#040",
                mt: 2,
              }}
            >
              Password
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", textTransform: "capitalize" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  className="final-submit-pass-fields"
                  type={visiblePass ? "text" : "password"}
                  value={formData.password}
                  readOnly
                />

                <Typography
                  variant="span"
                  sx={{ color: "#040" }}
                  onClick={handleVisablePass}
                >
                  {visiblePass ? <Visibility /> : <VisibilityOff />}
                </Typography>
              </Box>
            </Typography>
          </article>

          <Box
            sx={{
              mt: 4,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
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
              className="login-register"
              color="success"
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
            >
              {isLoading ? <SmallSpinner color="white" /> : " Final Submit"}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Form4;
