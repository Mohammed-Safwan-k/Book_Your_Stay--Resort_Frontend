import React, { useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDispatch, useSelector } from "react-redux";
import { allfacility } from "../../actions/facility";

const initialValues = {
  roomName: "",
  roomType: "",
  facility: "",
  guest: "",
  bedroom: "",
  bathroom: "",
  price: "",
  description: "",
  images: "",
};

const couponSchema = yup.object().shape({
  roomName: yup.string().required("required"),
  roomType: yup.string().required("required"),
  facility: yup.string().required("required"),
  guest: yup.string().required("required"),
  bedroom: yup.string().required("required"),
  bathroom: yup.string().required("required"),
  price: yup.string().required("required"),
  description: yup.string().required("required"),
  images: yup.string().required("required"),
});
const AddRoom = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allfacility());
  }, [dispatch]);
  const facility = useSelector((state) => state.facility);
  console.log(facility, "789456231");

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    dispatch(values);
  };

  const clear = () => {};
  return (
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
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Room Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.roomName}
                name="roomName"
                error={!!touched.roomName && !!errors.roomName}
                helperText={touched.roomName && errors.roomName}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl
                required
                variant="filled"
                sx={{ m: 1, minWidth: 120, gridColumn: "span 4" }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Room Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={values.roomType}
                  label="Room Type"
                  onBlur={handleBlur}
                  error={!!touched.roomType && !!errors.roomType}
                  helperText={touched.roomType && errors.roomType}
                  onChange={handleChange}
                >
                  <MenuItem value={values.roomType}>{values.roomType}</MenuItem>
                  <MenuItem value={values.roomType}>{values.roomType}</MenuItem>
                  <MenuItem value={values.roomType}>{values.roomType}</MenuItem>
                </Select>
              </FormControl>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gridColumn: "span 4",
                }}
              >
                {facility.map(({ facility }) => (
                  <FormControlLabel control={<Checkbox />} label={facility} />
                ))}
              </FormGroup>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Coupon Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.couponName}
                name="couponName"
                error={!!touched.couponName && !!errors.couponName}
                helperText={touched.couponName && errors.couponName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Coupon Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.couponName}
                name="couponName"
                error={!!touched.couponName && !!errors.couponName}
                helperText={touched.couponName && errors.couponName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Coupon Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.couponCode}
                name="couponCode"
                error={!!touched.couponCode && !!errors.couponCode}
                helperText={touched.couponCode && errors.couponCode}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discount Percentage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Coupon
              </Button>
              <Button color="primary" onClick={clear} variant="contained">
                Clear
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default AddRoom;
