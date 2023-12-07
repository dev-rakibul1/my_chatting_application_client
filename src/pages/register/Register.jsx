import { Box, Chip, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form1 from "./form/Form1";
import Form2 from "./form/Form2";
import Form3 from "./form/Form3";
import Form4 from "./form/Form4";

const Register = () => {
  const totalForm = [1, 2, 3, 4];
  const [registerFormNumber, setRegisterFormNumber] = useState(totalForm[0]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    birthday: "",
    gender: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });

  console.log("FormData", formData);

  const handeInputFields = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleInputFields = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  console.log(errors);

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (registerFormNumber === 1) {
      // Validate first name
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
        isValid = false;
      } else if (formData.firstName && formData.firstName.length > 50) {
        newErrors.firstName = "First name must be between 50 charter";
        isValid = false;
      }

      // Validate middle name
      if (formData.middleName && formData.middleName.length > 25) {
        newErrors.middleName = "Middle name must be between 25 charter";
        isValid = false;
      }

      // Validate last name
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
        isValid = false;
      } else if (formData.lastName && formData.lastName.length > 50) {
        newErrors.lastName = "Last name must be between 50 charter";
        isValid = false;
      }
    }

    // Validate Gender
    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required!";
      isValid = false;
    }

    // Validate email
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!formData.email.trim() || !emailRegex.test(formData.email)) {
    //   newErrors.email = "Valid email is required";
    //   isValid = false;
    // }

    // Validate phone number
    // const phoneRegex = /^\d{11}$/;
    // if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
    //   newErrors.phone = "Valid phone number is required";
    //   isValid = false;
    // }

    // Validate password
    // if (formData.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters long";
    //   isValid = false;
    // }

    // Validate role
    // if (formData.role === "") {
    //   newErrors.role = "Role is required!";
    //   isValid = false;
    // }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next button
  const handleNextBTN = () => {
    if (validateForm()) {
      console.log("All data____:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
    setRegisterFormNumber(registerFormNumber + 1);
  };

  // handle Previous button
  const handlePreviousBTN = () => {
    setRegisterFormNumber(registerFormNumber - 1);
  };

  // Form payload
  const formPayload = {
    formData: formData,
    setFormData: setFormData,
    next: handleNextBTN,
    prev: handlePreviousBTN,
    handleInputFields: handleInputFields,
    errors: errors,
  };

  return (
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
        <Divider sx={{ mt: 1, mb: 1 }}>
          <Chip
            sx={{ fontSize: "17px", color: "green" }}
            label="Register now"
          />
        </Divider>

        {/* form pagination */}
        <div className="">
          <span>Step </span>
          <span className="font-semibold text-gray-400 text-base py-2 inline-block">
            {totalForm[totalForm.length - 1]}
          </span>
          <span className="font-semibold text-gray-400 text-base py-2 inline-block">
            /
          </span>
          <span className="font-semibold text-gray-400 text-base py-2 inline-block">
            {registerFormNumber}
          </span>
        </div>

        {registerFormNumber === 1 && <Form1 payload={formPayload} />}
        {registerFormNumber === 2 && <Form2 payload={formPayload} />}
        {registerFormNumber === 3 && <Form3 payload={formPayload} />}
        {registerFormNumber === 4 && <Form4 payload={formPayload} />}

        <p className="account-have-none text-center">
          Already have an account <Link to="/">Log in</Link>{" "}
        </p>
      </div>
    </Box>
  );
};

export default Register;
