import React, { useState } from 'react';
import NavBar from './SharedComponents/NavBar';
import Footer from './SharedComponents/Footer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Trips = () => {
  const [markers, setMarkers] = useState<{ lat: number; lng: number; }[]>([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleDay1ButtonClick = () => {
    console.log('Day 1 button clicked');
  };

  const handleCancelTripButtonClick = () => {
    console.log('Cancel Trip button clicked');
    setMarkers([]); // Clear all markers
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const newMarker = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      setMarkers([...markers, newMarker]);
    }
  };

  return (
      <Box>
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ width: '100%', maxWidth: 1280, margin: 'auto' }}>
          <Box style={{ paddingBottom: '10px', width: '100%' }}>
            <Box sx={{ mb: 15, maxWidth: 1280, margin: 'auto' }}>
              <NavBar textColor="rgb(0,0,0)"/>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ margin: '10px', padding: '20px', textAlign: isMobile ? 'center' : 'left' }}>
                <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Trip Name</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <FmdGoodIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="subtitle1">Northern</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <AccessTimeIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="subtitle1">4 Days</Typography>
                </Box>
                <Typography variant="body1" sx={{ margin: '10px' }}>
                  Embark on a captivating journey through Bahrain, where ancient heritage blends with modern allure. Explore Manama's vibrant streets, delve into history at the Bahrain National Museum and Fort, and immerse yourself in local culture at the bustling souq and grand mosque. Enjoy leisure time at pristine beaches before departing with cherished memories and a desire to return.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <Typography variant="h2" mt={5} sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '50px' }}>Live map</Typography>
                <LoadScript googleMapsApiKey="AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc">
                  <Box sx={{ position: 'relative' }}>
                    <GoogleMap
                      mapContainerStyle={{ height: isMobile ? '644px' : '500px', width: isMobile ? '430px' : '100%' }}
                      zoom={13}
                      center={{ lat: 26.0667, lng: 50.5577 }}
                      onClick={handleMapClick}
                    >
                      {markers.map((marker, index) => (
                        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                      ))}
                    </GoogleMap>
                    <Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
                      <Button variant="contained" onClick={handleDay1ButtonClick}>Day 1</Button>
                      <Button variant="contained" onClick={handleCancelTripButtonClick} sx={{ marginLeft: '10px' }} color="error">Cancel Trip</Button>
                    </Box>
                  </Box>
                </LoadScript>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Footer/>             
      </Box>
  );
};
export default Trips;