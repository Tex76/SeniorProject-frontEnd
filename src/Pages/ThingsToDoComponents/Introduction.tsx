import * as React from "react";

import {
  Box,
  Typography,
  Button,
  Rating,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Modal,
  Divider,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Introduction = ({ place }: { place: any }) => {
  const { user } = useContext(UserContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [trips, setTrips] = React.useState([]); // [trip1, trip2, trip3, ...]
  React.useEffect(() => {
    if (!user) navigate("/login");
    axios
      .get(`/user/trips/${user.id}`)
      .then((res) => {
        console.log("getting trips from user id");
        setTrips(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user._id]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    width: isMobile ? "90%" : 586,
    height: isMobile ? "90%" : 516,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        marginTop: "120px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="flex-end" sx={{ margin: "10px" }}>
        {/* pop up */}
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="save-to-trip"
            aria-describedby="save-to-trip-description"
          >
            <Box sx={style}>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ position: "absolute", right: 8, top: 8 }}
              >
                <CloseIcon />
              </IconButton>
              <Typography
                id="save-to-trip"
                variant="h5"
                component="h2"
                sx={{ fontFamily: "Roboto", fontWeight: "bold", fontSize: 25 }}
              >
                Save to trip
              </Typography>
              {/* Map over the cards array to create a Card component for each object */}
              {trips ? (
                trips.map((trip: any, index: any) => (
                  <Card
                    onClick={() => {
                      axios
                        .post(`/trip/places/addLiked`, {
                          placeId: place._id,
                          tripId: trip._id,
                        })
                        .then((res) => {
                          console.log(res.data);
                          handleClose();
                        })
                        .catch((err) => {
                          alert(err.response.data.message);
                        });
                    }}
                    key={index}
                    sx={{
                      display: "flex",
                      backgroundColor: "rgba(255, 211, 52, 0.58)",
                      mt: 2,
                      p: 2,
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 113, height: 94, borderRadius: 1 }}
                      image={`/systemImage/${trip.imageTrip}`}
                      alt={trip.tripName}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontFamily: "Roboto",
                          fontWeight: "bold",
                          fontSize: 14,
                        }}
                      >
                        {trip.tripName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <DateRangeIcon />
                        <Typography variant="body2" color="text.secondary">
                          {trip.totalDays}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <LocationOnIcon />
                        <Typography variant="body2" color="text.secondary">
                          {trip.region.join(", ")}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: 14,
                    color: "text.secondary",
                    textAlign: "center",
                    mt: 5,
                  }}
                >
                  There is no trip created yet. Create New Trip
                </Typography>
              )}

              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="primary" aria-label="add to trip">
                  <AddIcon />
                </IconButton>
                <Typography variant="body1">Create Trip</Typography>
              </Box>
            </Box>
          </Modal>
        </div>

        <Button
          onClick={() => {
            navigate(`/review/${place._id}`);
          }}
          style={{ marginRight: "10px", color: "black" }}
        >
          Review
        </Button>
        <Typography variant="h5" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Button onClick={handleOpen} style={{ color: "black" }}>
          Save
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ p: { xs: 2 } }}>
        <Grid item xs={isMobile ? 12 : 6}>
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            {place.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <LocationOnIcon /> {place.location}
          </Typography>
          <Typography
            variant="overline"
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Box display="flex" alignItems="center">
              <PinDropOutlinedIcon />
              {place.type} | {place.rate}{" "}
              <Rating name="place-rating" value={place.rate} readOnly />{" "}
              {place.totalComments} reviews
            </Box>
          </Typography>
          <Typography variant="body1">{place.description}</Typography>
        </Grid>

        <Grid item xs={isMobile ? 12 : 6}>
          <Grid container direction="row">
            <Grid item xs={7}>
              <img
                src={`/systemImage/${place.imagePlace[0]}`}
                alt="Card Image 1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px 0px 0px 6px",
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <img
                src={`/systemImage/${place.imagePlace[1]}`}
                alt="Card Image 2"
                style={{ width: "100%", height: "50%", objectFit: "cover" }}
              />
              <img
                src={`/systemImage/${place.imagePlace[2]}`}
                alt="Card Image 3"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  marginTop: "-4px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Introduction;
