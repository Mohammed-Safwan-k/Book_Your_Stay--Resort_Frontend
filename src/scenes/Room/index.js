import React, { useEffect, useState } from "react";
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
  CardContent,
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

  const isNonMobile = useMediaQuery("(min-width:100px)");

  const Room = ({
    _id,
    roomName,
    roomType,
    facility,
    guest,
    bedroom,
    bathroom,
    price,
    description,
    images,
    rating,
  }) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <Card
        sx={{
          backgroundImage: "none",
          backgroundColor: theme.palette.background.alt,
          borderRadius: "0.55rem",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {roomName}
          </Typography>
          <Typography variant="h5" component="div">
            {roomType.roomtype}
          </Typography>
          <Typography
            sx={{ mb: "1.5rem" }}
            color={theme.palette.secondary[400]}
          >
            ${Number(price).toFixed(2)}
          </Typography>
          <Rating value={rating} readOnly />
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout="auto"
          unmountOnExit
          sx={{ color: theme.palette.neutral[200] }}
        >
          <CardContent>
            <Typography>
              Facility:{" "}
              {facility.map((e) => {
                return (
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    sx={{ m: "2px" }}
                  >
                    {e.facility}
                  </Button>
                );
              })}
            </Typography>
            <Typography>Guest: {guest}</Typography>
            <Typography>Bedroom: {bedroom}</Typography>
            <Typography>Bathroom: {bathroom}</Typography>
            <Typography>Image: {images}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Room" subtitle="Manage Your Rooms Here." />
      {room ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{ "& >div": { gridColumn: isNonMobile ? undefined : "span 4" } }}
        >
          {room.map(
            ({
              _id,
              roomName,
              roomType,
              facility,
              guest,
              bedroom,
              bathroom,
              price,
              description,
              images,
              rating,
            }) => (
              <Room
                key={_id}
                _id={_id}
                roomName={roomName}
                roomType={roomType}
                facility={facility}
                guest={guest}
                bedroom={bedroom}
                bathroom={bathroom}
                price={price}
                description={description}
                images={images}
                rating={rating}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Room;
