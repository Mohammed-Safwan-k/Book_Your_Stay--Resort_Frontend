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
import { SelectChangeEvent } from "@mui/material/Select";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDispatch, useSelector } from "react-redux";
import { allfacility } from "../../actions/facility";
import { allroomtype } from "../../actions/roomtype";

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

  useEffect(() => {
    dispatch(allroomtype());
  }, [dispatch]);
  const facility = useSelector((state) => state.facility);
  const roomtype = useSelector((state) => state.roomtype);

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    dispatch(values);
  };


  const [roomType, setRoomtype] = React.useState('');
  const handleChangeRoomType = (event: SelectChangeEvent) => {
    setRoomtype(event.target.value);
  };
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
                  onChange={handleChangeRoomType}
                >
                  {roomtype.map(({ roomtype }) => (
                    <MenuItem key={roomtype} value={roomtype}>
                      {roomtype}
                    </MenuItem>
                  ))}
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
                  <FormControlLabel
                    key={facility}
                    control={<Checkbox />}
                    label={facility}
                  />
                ))}
              </FormGroup>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Guest"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.guest}
                name="guest"
                error={!!touched.guest && !!errors.guest}
                helperText={touched.guest && errors.guest}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Bedroom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bedroom}
                name="bedroom"
                error={!!touched.bedroom && !!errors.bedroom}
                helperText={touched.bedroom && errors.bedroom}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Bathroom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bathroom}
                name="bathroom"
                error={!!touched.bathroom && !!errors.bathroom}
                helperText={touched.bathroom && errors.bathroom}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="error" variant="contained">
                Add New Coupon
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default AddRoom;
