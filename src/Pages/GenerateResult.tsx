/* eslint-disable @typescript-eslint/no-unused-vars */
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
  CircularProgress
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LandscapeIcon from '@mui/icons-material/Landscape';
import HotelIcon from "@mui/icons-material/Hotel";
import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import NavBar from "./SharedComponents/NavBar";
import axios from 'axios';
import RegionContext from '../RegionContext';
import BudgetContext from '../BudgetContext';
import TimePeriodContext from '../TimePeriodContext';
import GroupSizeContext from '../GroupSizeContext';
import FavouriteActivitiesContext from "../FavouriteActivitiesContext";
import { Place } from "../../../api/SchemaDb";

interface Day {
  id: string;
  description: string;
  activities: Place[];
}

const GenerateResult = () => {
  const { selectedRegion } = useContext(RegionContext);
  const { budget } = useContext(BudgetContext);
  const { days } = useContext(TimePeriodContext);
  const { groupSize } = useContext(GroupSizeContext);
  const { favouriteActivities } = useContext(FavouriteActivitiesContext);

  const [description, setDescription] = useState<string>('');
  const [itinerary, setItinerary] = useState<Day[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!favouriteActivities.length) {
          setError('No favourite activities selected');
          setLoading(false);
          return;
        }
  
      // Make a POST request to the backend
      const response = await axios.post('http://localhost:5000/api/generate_itinerary', {
        selectedRegion,
        budget,
        days,
        groupSize,
        favouriteActivities
      });
  
        // Parse the response data
        const responseData = response.data;
        setDescription(responseData.trip.description);
  
        // Organize the itinerary based on the response data
        const organizedItinerary = responseData.trip.days.map((day: any, index: number) => {
          return {
            id: `day${index + 1}`,
            activities: day.places.map((place: any, placeIndex: number) => {
              return {
                id: `activity${placeIndex + 1}`,
                name: place.name,
                description: place.description,
                imageUrl: place.imagePlace ? `/systemImage/${place.imagePlace}` : '/defaultImage.jpg',
                rating: place.rate,
                type: place.category,
                duration: place.duration || 'N/A',
                budget: place.priceRange,
                position: place.googleLocation,
                category: place.category
              };
            }),
            description: day.description
          };
        });
        setItinerary(organizedItinerary);
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [selectedRegion, budget, days, groupSize, favouriteActivities]);

  const accordionRef = useRef<HTMLDivElement>(null);
  const [accordionHeight, setAccordionHeight] = useState('700px');

  useEffect(() => {
    if (accordionRef.current) {
      setAccordionHeight(`${accordionRef.current.offsetHeight}px`);
    }
  }, [accordionRef.current]);

    // Ensure that mapCenter and mapZoom are defined before rendering the Map component
  const defaultMapCenter = { lat: 26.0667, lng: 50.5577 };
  const defaultMapZoom = 12;

  const [mapCenter, setMapCenter] = useState({ lat: 26.0667, lng: 50.5577 });
  const [mapZoom, setMapZoom] = useState(12);
  
  useEffect(() => {
    if (itinerary.length > 0 && itinerary[0].activities.length > 0) {
      setMapCenter(itinerary[0].activities[0].googleLocation);
    }
  }, [itinerary]);

return (
  <Box>
    <Box maxWidth={1280} margin="auto">
      <NavBar textColor="rgb(0,0,0)" />
    </Box>
    <Divider sx={{ mb: 5 }} />
    <Typography sx={{ mb: 5 }} variant="h3" align="center">Bahrain Trip</Typography>
    <Divider sx={{ mb: 5 }} />
    <Box maxWidth={1280} margin="auto">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={2} style={{ minHeight: '100vh' }}>
          <Grid item xs={6} ref={accordionRef}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "20px", fontFamily: "Roboto" }}>
              Your trip to {selectedRegion} for {days} days
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "Roboto", marginBottom: "20px" }}>
              {description}
            </Typography>
            <Divider sx={{ marginBottom: "50px" }} />
          {itinerary.map((day) => (
            <Accordion key={day.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${day.id}-content`} id={`panel-${day.id}-header`}>
              <Box display="flex" alignItems="center">
                <Typography variant="h5">{day.id}</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">{day.description}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stepper orientation="vertical">
                  {day && day.activities && day.activities.map((activity: Place) => (
                    <Step key={activity.id} active>
                      <StepLabel>
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-activity-${activity.id}-content`} id={`panel-activity-${activity.id}-header`}>
                            <Box display="flex" alignItems="center">
                            {activity.category === "thingsToDo" && <LandscapeIcon sx={{ mr: 2 }}/>}
                            {activity.category === "PlacesToStay" && <HotelIcon sx={{ mr: 2 }}/>}
                            {activity.category === "thingsToEat" && <RestaurantIcon sx={{ mr: 2 }}/>}
                            <Typography variant="h5" component="div">{activity.name}</Typography>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Card
                              onMouseEnter={() => {
                                setSelectedMarker(activity.id);
                                setMapCenter(activity.googleLocation);
                                setMapZoom(15);
                              }}
                              onMouseLeave={() => {
                                setSelectedMarker(null);
                                setMapCenter({ lat: 26.0667, lng: 50.5577 });
                                setMapZoom(12);
                              }}
                            >
                            <CardMedia
                              component="img"
                              image={activity.imagePlace && activity.imagePlace.length > 0 ? activity.imagePlace[0] : 'defaultImage.jpg'}
                              alt={activity.name}
                              sx={{ height: 140 }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                  {activity.name}
                                </Typography>
                              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box display="flex" alignItems="center" gap={2} sx={{ mb: 2 }}>
                                <Rating name={`rating-${activity.id}`} value={activity.rate} readOnly />
                                <AccessTimeIcon />
                                <Typography>{activity.duration}</Typography>
                                <MonetizationOnIcon />
                                <Typography>
                                  {typeof activity.priceRange === 'number' 
                                    ? `$${activity.priceRange}` 
                                    : 'Not available'}
                                </Typography>
                              </Box>
                                <IconButton sx={{ ml: 2 }}><FavoriteBorderIcon /></IconButton>
                              </Box>
                              <Divider sx={{ mb: 5 }} />
                              <Typography variant="body2" color="text.secondary">{activity.description}</Typography>
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
        </Grid>
          <Grid item xs={6} style={{ position: 'sticky', top: 0 }}>
            <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY || ''}>
            <Map
              style={{ width: "100%", height: accordionHeight, borderRadius: "15px" }}
              center={mapCenter}
              zoom={mapZoom}
            >
              {itinerary.map((day) =>
                day.activities.map((activity: Place) => (
                  <React.Fragment key={activity.id}>
                    <Marker position={activity.googleLocation} onClick={() => setSelectedMarker(activity.id)} />
                    {selectedMarker === activity.id && (
                      <InfoWindow position={activity.googleLocation} onCloseClick={() => setSelectedMarker(null)}>
                        <Card>
                          <CardMedia
                            component="img"
                            height="140"
                            // image={activity.imagePlace[0]}
                            alt={activity.name}
                          />
                          <CardContent>
                            <Typography variant="h5" component="div">{activity.name}</Typography>
                            <Typography variant="body2" color="text.secondary">Rating: {activity.rate}</Typography>
                            <Typography variant="body2" color="text.secondary">Type: {activity.type}</Typography>
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
      )},
    </Box>
  </Box>
);
};

export default GenerateResult;