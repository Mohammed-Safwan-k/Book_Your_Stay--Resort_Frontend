import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import { GoogleLogin } from "react-google-login";

const initialValues = {
  email: "",
  password: "",
};

const couponSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    console.log(values);
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
          validationSchema={couponSchema}
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
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 2" }}
                />
                <Box display="flex" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Login
                  </Button>
                  <Button
                    type="submit"
                    color="error"
                    variant="contained"
                    sx={{ marginLeft: "10px" }}
                  >
                    Google Login
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

export default Login;
