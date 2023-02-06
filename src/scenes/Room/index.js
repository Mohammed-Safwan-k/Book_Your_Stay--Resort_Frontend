import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { tokens } from "theme";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { allRoom } from "actions/room";

const Room = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allRoom());
  }, [dispatch]);

  const room = useSelector((state) => state.room);
  console.log(room);
  return (
    <Box>
      <Header title="Room" subtitle="Manage Your Rooms Here." />
    </Box>
  );
};

export default Room;
