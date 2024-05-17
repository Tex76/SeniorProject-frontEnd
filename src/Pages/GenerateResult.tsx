import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Rating,
  IconButton,
  Divider,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HotelIcon from "@mui/icons-material/Hotel";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import NavBar from "./SharedComponents/NavBar";
import axios from "axios";
import RegionContext from "../RegionContext";
import BudgetContext from "../BudgetContext";
import TimePeriodContext from "../TimePeriodContext";
import GroupSizeContext from "../GroupSizeContext";
import FavouriteActivitiesContext from "../FavouriteActivitiesContext";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

interface Day {
  id: string;
  description: string;
  activities: any[];
}

const GenerateResult = () => {
  const { user } = useContext(UserContext);
  const { selectedRegion } = useContext(RegionContext);
  const { budget } = useContext(BudgetContext);
  const { days } = useContext(TimePeriodContext);
  const { groupSize } = useContext(GroupSizeContext);
  const { favouriteActivities } = useContext(FavouriteActivitiesContext);
  const [userContext, setUserContext] = useState(user);
  const navigate = useNavigate();

  const [description, setDescription] = useState<string>("");
  const [itinerary, setItinerary] = useState<Day[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [zoomAnimation, setZoomAnimation] = useState("");
  const [Days, setDays] = useState(null);

  const handleZoomChange = (newZoom: any) => {
    if (newZoom > mapZoom) {
      setZoomAnimation("zoom-in");
    } else {
      setZoomAnimation("zoom-out");
    }
    setMapZoom(newZoom);
    setTimeout(() => setZoomAnimation(""), 500); // Clear animation class after animation duration
  };
  useEffect(() => {
    setUserContext(user);
  }, [user]);
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      if (!favouriteActivities.length) {
        setError("No favourite activities selected");
        setLoading(false);
        return;
      }

      console.log("Selected Region:", selectedRegion);
      console.log("Budget:", budget);
      console.log("Days:", days);
      console.log("Group Size:", groupSize);
      console.log("Favourite Activities:", favouriteActivities);

      // Make a POST request to the backend
      axios
        .post("http://localhost:5000/api/generate_itinerary", {
          selectedRegion,
          budget,
          days,
          groupSize,
          favouriteActivities,
        })
        .then((response) => {
          // Parse the response data
          const responseData = response.data;
          console.log("RESPONSE:", response);

          // Validate the response structure
          // if (!responseData || !responseData.trip || !responseData.trip.days) {
          //   setError("Invalid response from server");
          //   setLoading(false);
          //   return;
          // }

          setDays(responseData.trip.days);
          setDescription(responseData.trip.description);
          console.log("Response of Generate Trip:", responseData.trip);

          // Organize the itinerary based on the response data
          const organizedItinerary = responseData.trip.days.map(
            (day: any, index: any) => {
              return {
                id: `Day ${index + 1}`,
                activities: day.places.map((place: any, placeIndex: any) => {
                  return {
                    id: place._id,
                    name: place.name,
                    description: place.description,
                    imagePlace: place.imagePlace, // Use imagePlace directly here
                    rate: place.rate,
                    type: place.category,
                    duration: place.duration || "N/A",
                    priceRange: place.priceRange,
                    position: place.googleLocation,
                    category: place.category,
                  };
                }),
                description: day.description,
              };
            }
          );

          setItinerary(organizedItinerary);
        })
        .catch((error) => {
          console.log(error);
          setError("An error occurred while fetching data");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [selectedRegion, budget, days, groupSize, favouriteActivities]);

  const accordionRef = useRef<HTMLDivElement>(null);
  const [accordionHeight, setAccordionHeight] = useState("700px");

  useEffect(() => {
    if (accordionRef.current) {
      setAccordionHeight(`${accordionRef.current.offsetHeight}px`);
    }
  }, [accordionRef.current]);

  // Ensure that mapCenter and mapZoom are defined before rendering the Map component

  const [mapCenter, setMapCenter] = useState({ lat: 26.0667, lng: 50.5577 });
  const [mapZoom, setMapZoom] = useState(12);

  useEffect(() => {
    if (itinerary.length > 0 && itinerary[0].activities.length > 0) {
      setMapCenter(itinerary[0].activities[0].position);
    }
  }, [itinerary]);

  return (
    <Box>
      <Box maxWidth={1280} margin="auto">
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Divider sx={{ mb: 5 }} />
      <Typography sx={{ mb: 5 }} variant="h3" align="center">
        Bahrain Trip
      </Typography>
      <Divider sx={{ mb: 5 }} />
      <Box maxWidth={1280} margin="auto">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Takes full viewport height
            }}
          >
            <img
              style={{ width: "120px", height: "120px" }}
              src="/second.gif"
              alt=""
            />
          </div>
        ) : error ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh", // Takes full viewport height
            }}
          >
            <Typography color="error">{error}</Typography>
          </div>
        ) : (
          <Grid container spacing={2} style={{ minHeight: "100vh" }}>
            <Grid item xs={6} ref={accordionRef}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "20px",
                  fontFamily: "Roboto",
                }}
              >
                Your trip to {selectedRegion.join(", ")} for {days} days
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Roboto", marginBottom: "20px" }}
              >
                {description}
              </Typography>
              <Divider sx={{ marginBottom: "50px" }} />
              {itinerary.map((day) => (
                <Accordion key={day.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${day.id}-content`}
                    id={`panel-${day.id}-header`}
                  >
                    <Box display="flex" alignItems="center">
                      <Typography variant="h5">{day.id}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {day.description}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stepper orientation="vertical">
                      {day &&
                        day.activities &&
                        day.activities.map((activity: any) => (
                          <Step key={activity.id} active>
                            <StepLabel>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls={`panel-activity-${activity.id}-content`}
                                  id={`panel-activity-${activity.id}-header`}
                                >
                                  <Box display="flex" alignItems="center">
                                    {activity.category === "thingsToDo" && (
                                      <LandscapeIcon sx={{ mr: 2 }} />
                                    )}
                                    {activity.category === "placesToStay" && (
                                      <HotelIcon sx={{ mr: 2 }} />
                                    )}
                                    {activity.category === "thingsToEat" && (
                                      <RestaurantIcon sx={{ mr: 2 }} />
                                    )}
                                    <Typography variant="h5" component="div">
                                      {activity.name}
                                    </Typography>
                                  </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Card
                                    onMouseEnter={() => {
                                      setSelectedMarker(activity.id);
                                      setMapCenter(activity.googleLocation);
                                      handleZoomChange(13); // Zoom in
                                    }}
                                    onMouseLeave={() => {
                                      setSelectedMarker(null);
                                      setMapCenter(
                                        itinerary[0].activities[0].position
                                      );
                                      handleZoomChange(12); // Zoom out
                                    }}
                                  >
                                    <CardMedia
                                      component="img"
                                      image={
                                        activity.imagePlace
                                          ? `/systemImage/${activity.imagePlace}`
                                          : "/systemImage/defaultImage.jpg"
                                      }
                                      alt={activity.name}
                                      sx={{ height: 140, objectFit: "cover" }}
                                    />

                                    <CardContent>
                                      <Typography variant="h6" component="div">
                                        {activity.name}
                                      </Typography>
                                      <Box
                                        sx={{
                                          mt: 2,
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Box
                                          display="flex"
                                          alignItems="center"
                                          gap={2}
                                          sx={{ mb: 2 }}
                                        >
                                          <Rating
                                            name={`rating-${activity.id}`}
                                            value={activity.rate}
                                            readOnly
                                          />
                                          <AccessTimeIcon />
                                          <Typography>
                                            {activity.duration}
                                          </Typography>
                                          <MonetizationOnIcon />
                                          <Typography>
                                            {`$ ${activity.priceRange}`}
                                          </Typography>
                                        </Box>
                                        <IconButton sx={{ ml: 2 }}>
                                          <FavoriteBorderIcon />
                                        </IconButton>
                                      </Box>
                                      <Divider sx={{ mb: 5 }} />
                                      <Typography
                                        variant="body2"
                                        color="text.secondary"
                                      >
                                        {activity.description}
                                      </Typography>
                                    </CardContent>
                                  </Card>
                                </AccordionDetails>
                              </Accordion>
                            </StepLabel>
                          </Step>
                        ))}
                    </Stepper>
                  </AccordionDetails>
                </Accordion>
              ))}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {!loading ? (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff8c00",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#ff4500",
                      },
                    }}
                    onClick={() => {
                      axios
                        .post("http://localhost:4000/api/add_trip", {
                          selectedRegion,
                          numberOfDays: days,
                          description,
                          Days,
                          name: "AI-Generated Trip",
                          userId: userContext.id,
                        })
                        .then((response) => {
                          navigate("/createtrip/" + response.data.tripID);
                        })
                        .catch((error) => {
                          console.error("Error posting trip", error);
                        });
                    }}
                  >
                    Save Trip
                  </Button>
                ) : null}
              </Box>
            </Grid>
            <Grid item xs={6} style={{ position: "sticky", top: 0 }}>
              <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY || ""}>
                <Map
                  style={{
                    width: "100%",
                    height: accordionHeight,
                    borderRadius: "15px",
                    transition: "transform 0.5s ease-in-out", // Smooth transition for zoom
                  }}
                  className={zoomAnimation}
                  center={mapCenter}
                  zoom={mapZoom}
                >
                  {itinerary.map((day) =>
                    day.activities.map((activity: any) => (
                      <React.Fragment key={activity.id}>
                        <Marker
                          position={activity.position}
                          onClick={() => setSelectedMarker(activity.id)}
                        />
                        {selectedMarker === activity.id && (
                          <InfoWindow
                            position={activity.position}
                            onCloseClick={() => setSelectedMarker(null)}
                          >
                            <Card>
                              <CardMedia
                                component="img"
                                height="140"
                                image={`/systemImage/${activity.imagePlace}`}
                                sx={{ objectFit: "cover" }}
                                alt={activity.name}
                              />
                              <CardContent>
                                <Typography variant="h5" component="div">
                                  {activity.name}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Rating: {activity.rate}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Type: {activity.type}
                                </Typography>
                              </CardContent>
                            </Card>
                          </InfoWindow>
                        )}
                      </React.Fragment>
                    ))
                  )}
                </Map>
              </APIProvider>
            </Grid>
          </Grid>
        )}
        ,
      </Box>
    </Box>
  );
};

export default GenerateResult;
