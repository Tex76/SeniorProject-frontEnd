import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import {
  Box,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  CardMedia,
  Select,
  MenuItem,
} from "@mui/material";
import Background from "../images/MyTrip/Background.png";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import AddIcon from "@mui/icons-material/Add";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MyTrip = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("name");
  function handleSortChange(event: React.ChangeEvent<{ value: unknown }>) {
    setSort(event.target.value as string);
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/user/trips/${user.id}`)
      .then((res) => {
        setTrips(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching the trip data:", err);
        setIsLoading(false);
      });
  }, [navigate]); // Only re-run the effect if `user` or `navigate` changes

  if (!user) {
    return <div>Please log in to view your trips.</div>;
  }

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <Box
        style={{
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "10px",
          width: "100%",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "1280px" }}>
          <NavBar textColor="rgb(255,255,255)" />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",

          margin: "auto",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: 1280,
            marginTop: "120px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            My Trip
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <Button
              onClick={() => {
                navigate("/pickTrip");
              }}
              variant="contained"
              style={{
                backgroundColor: "sandybrown",
                padding: "40px",
                borderRadius: "20px",
              }}
              sx={{ flex: 1 }}
            >
              <AddIcon /> Create you own trip
            </Button>
            <Button
              onClick={() => {
                navigate("/GenerateTrip");
              }}
              variant="contained"
              style={{
                backgroundColor: "sandybrown",
                padding: "40px",
                borderRadius: "20px",
              }}
              sx={{ marginLeft: "30px", flex: 1 }}
            >
              <SavedSearchIcon />
              Generate your own trip
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",

              marginTop: "120px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Sort By:</Typography>
              <Select
                value={sort}
                onChange={(event: any) => handleSortChange(event)}
                sx={{ width: "20%", marginLeft: "10px" }}
                variant="standard"
              >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"date"}>Created date</MenuItem>
                {/* Add more sorting options here */}
              </Select>
            </Box>
            {trips.map((trip: any) => {
              return (
                <Card
                  onClick={() => {
                    navigate(`/createtrip/${trip._id}`);
                  }}
                  sx={{
                    display: "flex",
                    backgroundColor: "rgba(255, 211, 52, 0.58)",
                    height: "200px",
                    mt: 2,
                    p: 2,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/systemImage/${trip.imageTrip}`}
                    alt="green iguana"
                    sx={{ width: "30%", borderRadius: "10px", height: "100%" }}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {trip.tripName}
                    </Typography>
                    <Typography variant="body1">{trip.description}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <PlaceIcon />
                        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
                          {trip.likedPlaces.length} places
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <DateRangeIcon />
                        <Typography variant="body2" sx={{ marginLeft: "5px" }}>
                          {trip.totalDays} days
                        </Typography>
                      </Box>
                      <IconButton>
                        <MoreHorizIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            margin: "auto",
            marginTop: "200px",
          }}
        ></Box>
      </Box>
      <Footer />
    </div>
  );
};

export default MyTrip;
