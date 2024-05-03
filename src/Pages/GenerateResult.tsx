import React, { useState } from "react";
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
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LandmarkIcon from "@mui/icons-material/Landscape";
import HotelIcon from "@mui/icons-material/Hotel";
import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import NavBar from "./SharedComponents/NavBar";
import CircuitImage from "../Pages/CreateTripComponents/Circuit.jpg"; // Import the image

const GenerateResult = () => {
  const mapStyle = {
    width: "100%",
    height: "700px",
    borderRadius: "15px",
  };

  const center = {
    lat: 26.0667,
    lng: 50.5577,
  };

  const days = [
    {
      title: "Day 1",
      description: "This is a description for Day 1",
      activities: [
        {
          title: "Activity 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imageUrl: CircuitImage,
          rating: 5,
          type: "Landmark",
          duration: "2 hours",
          budget: 200,
          position: {
            lat: 26.0667,
            lng: 50.5577,
          },
        },
        {
          title: "Activity 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: CircuitImage,
          rating: 4,
          type: "Restaurant",
          duration: "3 hours",
          budget: 500,
          position: {
            lat: 26.0767,
            lng: 50.5577,
          },
        },
        {
          title: "Activity 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imageUrl: CircuitImage,
          rating: 3,
          type: "Hotel",
          duration: "1 hour",
          budget: 1000,
          position: {
            lat: 26.0667,
            lng: 50.5477,
          },
        },
      ],
    },
    {
      title: "Day 2",
      description: "This is a description for Day 1",
      activities: [
        {
          title: "Activity 1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imageUrl: CircuitImage,
          rating: 5,
          type: "Landmark",
          duration: "2 hours",
          budget: 200,
          position: {
            lat: 26.0467,
            lng: 50.5777,
          },
        },
        {
          title: "Activity 2",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imageUrl: CircuitImage,
          rating: 4,
          type: "Restaurant",
          duration: "3 hours",
          budget: 500,
          position: {
            lat: 26.1667,
            lng: 50.5577,
          },
        },
        {
          title: "Activity 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          imageUrl: CircuitImage,
          rating: 3,
          type: "Hotel",
          duration: "1 hour",
          budget: 1000,
          position: {
            lat: 26.0467,
            lng: 50.5177,
          },
        },
      ],
    },
    // More days...
  ];

  // Define the country and calculate the number of days
  const country = "Bahrain"; // Replace with the actual country
  const numberOfDays = days.length; // Calculate the number of days
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [, setCenter] = useState({ lat: 26.0667, lng: 50.5577 });

  return (
    <Box>
      <Box sx={{ mb: 20, maxWidth: 1280, margin: "auto" }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>

      <Typography variant="h3" align="center">
        Bahrain Trip
      </Typography>
      <Divider sx={{ mb: 10 }} />

      <Box maxWidth={1280} margin="auto">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Add the title and description */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontFamily: "Roboto",
              }}
            >
              Your trip to {country} for {numberOfDays} days
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Roboto", marginBottom: "20px" }}
            >
              Bahrain is a vibrant city that offers a perfect blend of hidden
              gems, historic landmarks, and great food. As you explore the city,
              you'll come across hidden corners filled with local charm and
              unique experiences. Discover ancient ruins and impressive
              architecture that tell the tales of Bahrain's rich history.
              Indulge in a culinary adventure as you savor delicious Turkish
              cuisine, from traditional street food to exquisite restaurants.
              With three days to explore, you'll have the opportunity to immerse
              yourself in the city's diverse culture, visit iconic landmarks,
              and uncover the hidden treasures that make Bahrain a remarkable
              destination.
            </Typography>
            <Divider sx={{ marginBottom: "50px" }} />
            {/* Map through each day */}
            {days.map((day, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-day${index}-content`}
                  id={`panel-day${index}-header`}
                >
                  <Box>
                    {/* Display the title of the day */}
                    <Typography variant="h5">{day.title}</Typography>
                    {/* Display the description of the day */}
                    <Typography variant="body1">{day.description}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {/* Start of the vertical stepper */}
                    <Stepper orientation="vertical">
                      {/* Map through each activity of the day */}
                      {day.activities.map((activity, step) => (
                        <Step key={step} active>
                          <StepLabel>
                            {/* Each activity is represented as an accordion */}
                            <Accordion
                              onClick={() => {
                                setSelectedMarker(
                                  `day-${index}-activity-${step}`
                                );
                                setCenter({
                                  lat: activity.position.lat,
                                  lng: activity.position.lng,
                                });
                              }}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-activity${step}-content`}
                                id={`panel-activity${step}-header`}
                              >
                                {/* Display the title of the activity */}
                                <Typography
                                  sx={{ flexBasis: "33.33%", flexShrink: 0 }}
                                >
                                  {activity.title}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Box>
                                  <Box sx={{ position: "relative" }}>
                                    {/* Display an image for the activity */}
                                    <img
                                      src={activity.imageUrl}
                                      alt={activity.title}
                                      style={{
                                        width: "500px",
                                        height: "300px",
                                      }}
                                    />
                                    {/* Favorite button at the top right corner of the image */}
                                    <IconButton
                                      sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                      }}
                                    >
                                      <FavoriteBorderIcon />
                                    </IconButton>
                                  </Box>
                                  {/* Display the title of the activity */}
                                  <Typography variant="h6">
                                    {activity.title}
                                  </Typography>
                                  {/* Display a rating for the activity */}
                                  <Rating
                                    name={`rating-${step}`}
                                    value={activity.rating}
                                    readOnly
                                  />
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "10px",
                                    }}
                                  >
                                    {/* Display the type of the activity */}
                                    {activity.type === "Restaurant" && (
                                      <RestaurantIcon />
                                    )}
                                    {activity.type === "Landmark" && (
                                      <LandmarkIcon />
                                    )}
                                    {activity.type === "Hotel" && <HotelIcon />}
                                    <Typography>{activity.type}</Typography>
                                    {/* Display the duration of the activity */}
                                    <AccessTimeIcon />
                                    <Typography>
                                      Duration: {activity.duration}
                                    </Typography>
                                    {/* Display the budget of the activity */}
                                    <MonetizationOnIcon />
                                    <Typography>
                                      Budget: ${activity.budget}
                                    </Typography>
                                  </Box>
                                  <Divider sx={{ marginBottom: "10px" }} />
                                  {/* Display the description of the activity */}
                                  <Typography noWrap>
                                    {activity.description}
                                  </Typography>
                                </Box>
                              </AccordionDetails>
                            </Accordion>
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={6}>
            <APIProvider apiKey="AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc">
              <Map style={mapStyle} defaultCenter={center} defaultZoom={12}>
                {days.map((day, dayIndex) =>
                  day.activities.map((activity, activityIndex) => (
                    <div key={`day-${dayIndex}-activity-${activityIndex}`}>
                      <Marker
                        position={activity.position}
                        onClick={() =>
                          setSelectedMarker(
                            `day-${dayIndex}-activity-${activityIndex}`
                          )
                        }
                      />
                      {selectedMarker ===
                        `day-${dayIndex}-activity-${activityIndex}` && (
                        <InfoWindow
                          position={activity.position}
                          onCloseClick={() => setSelectedMarker(null)}
                        >
                          <Card>
                            <CardMedia
                              component="img"
                              alt={activity.title}
                              height="140"
                              image={activity.imageUrl}
                            />
                            <CardContent>
                              <Typography variant="h5" component="div">
                                {activity.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Rating: {activity.rating}
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
                    </div>
                  ))
                )}
              </Map>
            </APIProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default GenerateResult;
