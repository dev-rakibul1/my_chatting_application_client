import { Box, Chip, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form1 from "./form/Form1";
import Form2 from "./form/Form2";
import Form3 from "./form/Form3";
import Form4 from "./form/Form4";

const Register = () => {
  const totalForm = [1, 2, 3, 4];
  const [registerFormNumber, setRegisterFormNumber] = useState(totalForm[0]);
  const [errors, setErrors] = useState({});
  const [userBirthday, setUserBirthday] = React.useState("");

  // User birthday
  const handleDateChange = (date) => {
    setUserBirthday(date.format("YYYY-MM-DD"));
  };

  console.log(userBirthday);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    address: "",
    birthday: userBirthday,
    gender: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      birthday: userBirthday,
    }));
  }, [userBirthday]);

  console.log(formData);

  const getRequiredFieldsForStep = (step) => {
    switch (step) {
      case 1:
        return ["firstName", "lastName"];
      case 2:
        return ["gender", "birthday", "address"];
      case 3:
        return ["email", "phone", "password", "confirmPassword"];
      default:
        return [];
    }
  };

  const handleInputFields = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required!";
      isValid = false;
    } else if (formData.firstName.length > 30) {
      newErrors.firstName = "First name must be 30 characters or less!";
      isValid = false;
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required!";
      isValid = false;
    } else if (formData.lastName.length > 30) {
      newErrors.lastName = "Last name must be 30 characters or less!";
      isValid = false;
    }

    // Validate gender, birthday, and address for step 2
    if (registerFormNumber === 2) {
      if (!formData.gender.trim()) {
        newErrors.gender = "Gender is required!";
        isValid = false;
      }

      if (!formData.birthday.trim()) {
        newErrors.birthday = "Birthday is required!";
        isValid = false;
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required!";
        isValid = false;
      }
    }

    // Validate email, phone, newPassword, and confirmPassword for step 3
    if (registerFormNumber === 3) {
      // Validate email
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!formData.email.trim()) {
        newErrors.email = "Email is required!";
        isValid = false;
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email is not valid!";
        isValid = false;
      }

      // Validate phone number
      // Assuming the phone number should be exactly 15 characters
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required!";
        isValid = false;
      }

      // Validate password
      if (!formData.password.trim()) {
        newErrors.password = "Password is required!";
        isValid = false;
      } else if (
        formData.password.length < 6 ||
        formData.password.length > 64
      ) {
        newErrors.password =
          "Password must be at least 6 to 64 characters long!";
        isValid = false;
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Password does not match!";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNextBTN = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const currentStepRequiredFields =
        getRequiredFieldsForStep(registerFormNumber);
      const missingFields = currentStepRequiredFields.filter(
        (field) => !formData[field]
      );

      if (missingFields.length === 0) {
        setRegisterFormNumber(registerFormNumber + 1);
      } else {
        console.log(
          "Please fill in all required fields for the current step:",
          missingFields
        );
      }
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  const handlePreviousBTN = () => {
    setRegisterFormNumber(registerFormNumber - 1);
  };

  const formPayload = {
    formData: formData,
    setFormData: setFormData,
    next: handleNextBTN,
    prev: handlePreviousBTN,
    handleInputFields: handleInputFields,
    errors: errors,
    handleDateChange: handleDateChange,
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: "60%", md: "40%", background: "#fff" },
      }}
      className="register"
    >
      <div className="register-wrapper">
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
              color: "green",
              fontSize: { xs: "14px", sm: "17px", md: "17px" },
            }}
            label="Register now"
          />
        </Divider>

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

        <Box
          sx={{
            my: 1,
            fontSize: "15px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          <Divider sx={{ my: 1 }}>
            <Chip label="OR" />
          </Divider>

          <p className="account-have-none text-center">
            Already have an account{" "}
            <Link to="/auth/login" style={{ color: "green" }}>
              Log in
            </Link>{" "}
          </p>
        </Box>
      </div>
    </Box>
  );
};

export default Register;
