import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signup } from "actions/login";

const initialValues = {
  resortName: "",
  email: "",
  phone: "",
  password: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const loginSchema = yup.object().shape({
  resortName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: yup.string().required("required"),
});

const Register = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    console.log(values);
    dispatch(signup(values));
    navigate("/");
  };

  return (
    <Box>
      <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Book Your Stay
        </Typography>
      </Box>
      <Box m="20px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                maxWidth="50%"
                margin="auto"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Resort Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.resortName}
                  name="resortName"
                  error={!!touched.resortName && !!errors.resortName}
                  helperText={touched.resortName && errors.resortName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  name="phone"
                  error={!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 2" }}
                />

                <Box display="flex" mt="20px" justifyContent="flex-end">
                  <Button
                    type="submit"
                    color="error"
                    variant="contained"
                    onClick={() => navigate("/")}
                  >
                    Have Account
                  </Button>
                </Box>
                <Box display="flex" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Register
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Register;
