/* eslint-disable */
import * as React from 'react';
import { useState } from 'react';
import NavBar from './SharedComponents/NavBar';
import Footer from './SharedComponents/Footer';

import {
  Tabs,
  Tab,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Rating,
  Slider,
  LinearProgress
} from '@mui/material';


import Reviews from '../images/RewardSystem/Reviews.png';
import Photos from '../images/RewardSystem/Photos.png';
import Placesvisited from '../images/RewardSystem/Places visited.png';
import HotelHunter from '../images/RewardSystem/Hotel Hunter.png';
import HotelGuider from '../images/RewardSystem/Hotel guider.png';
import HotelLens from '../images/RewardSystem/Hotel Lens.png';
import HotelExpert from '../images/RewardSystem/Hotel expert.png';
import FoodHunter from '../images/RewardSystem/Food Hunter.png';
import FoodGuider from '../images/RewardSystem/Restaurant guider.png';
import FoodLens from '../images/RewardSystem/Restaurant Lens.png';
import FoodExpert from '../images/RewardSystem/Restaurants expert.png';
import RunisHunter from '../images/RewardSystem/Runis Hunter.png';
import Guider from '../images/RewardSystem/Guider.png';
import HeritageLens from '../images/RewardSystem/Heritage Lens.png';
import Explorerplace from '../images/RewardSystem/Explorer place.png';
import Trailblazer from '../images/RewardSystem/Trailblazer.png';
import Adventure from '../images/RewardSystem/Adventure.png';
import Explorer from '../images/RewardSystem/Explorer.png';
import Back from '../images/RewardSystem/Back.png';

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const RewardSystem = () => {
  
  const labels1 = ['Reviews', '1', '5', '10', '15', '20', '40', '80', '100', '150', '200', '300', '500', ''];
  const labels2 = ['Points', '10', '15', '30', '50', '100', '200', '300', '400', '600', '700', '800', '1000', ''];

  const marks1 = labels1.map((label, i) => {
    const value = i * (500 / 13);
    return { value, label };
  });

  const marks2 = labels2.map((label, i) => {
    const value = i * (500 / 13);
    return { value, label };
  });

  const sliderStyles = {
    '& .MuiSlider-thumb': {
      display: 'none',
    },
    '& .MuiSlider-mark': {
      height: '30px',
      width: '3px',
      backgroundColor: 'white',
    },
    '& .MuiSlider-markLabel': {
      top: '-10px', 
      fontSize: '0.5em', 
    },
    '& .MuiSlider-markActive': {
      backgroundColor: 'white',
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'darkslategray',
    },
    '& .MuiSlider-track': {
      backgroundColor: 'darkslategray',
    },
  };
    
  return (
    <Box>
      <Box         sx={{ width: '100%', maxWidth: 1280, margin: 'auto', backgroundImage: `url(${Back})` }} >
      <Box
        style={{ backgroundColor: 'teal', backgroundSize: 'cover', backgroundPosition: 'center', paddingBottom: '10px', width: '100%' }}
        sx={{ mb: 15, maxWidth: 1280, margin: 'auto' }}
      >
        <NavBar textColor="rgb(255,255,255)"/>
      </Box>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center'
        }}
      >
        <Box sx={{ width: '1240px', maxWidth: 1280, margin: '20px', padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <Box p={3} sx={{marginTop:10}}>
            <Typography variant="h4" sx={{fontWeight:'bold'}}>
              Your Achievements
            </Typography>
            <Typography variant="body1" gutterBottom sx={{fontWeight:'bold'}}>
              Get rewarded for exploring, reviewing, and photographing places. Your adventures earn you valuable perks with every step you take.
            </Typography>
          </Box>

          <Box>
            <Card sx={{ backgroundColor: 'oldlace' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Achievements
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Unlock new milestones and, as a bonus, assist travelers along the way.
                </Typography>
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Card sx={{flex:1, marginRight: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
                        <Box style={{ 
                          width: '100px',
                          height: '100px', 
                          borderRadius: '50%', 
                          marginRight: '10px',
                          backgroundColor: 'lightBlue',
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center' 
                        }}>
                          <img src={Reviews} alt="Reviews" style={{ width: '70px' }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1">Reviews</Typography>
                          <Typography variant="caption">Beginner</Typography>
                        </Box>
                      </Box>
                      <div style={{margin:'20px'}}>
                        <Box sx={{ position: 'relative' }}>
                          <Slider 
                            style={{ height: '30px', borderRadius: '50px', position: 'absolute', top: '50px' }}
                            min={0}
                            max={500}
                            step={500 / 13}
                            value={10 * (500 / 13)}
                            marks={marks2}
                            disabled
                            sx={{
                              ...sliderStyles,
                              '& .MuiSlider-rail': {
                                display: 'none',
                              },
                              '& .MuiSlider-track': {
                                display: 'none',
                              },
                              '& .MuiSlider-thumb': {
                                display: 'none',
                              },
                            }}
                          />
                          <Slider 
                            style={{ height: '30px', borderRadius: '50px',margin:'-6px' }}
                            min={0}
                            max={500}
                            step={500 / 13}
                            value={1 * (500 / 13)}
                            marks={marks1}
                            disabled
                            sx={sliderStyles}
                          />
                        </Box>
                      </div>
                      <Typography variant="body2" sx={{marginTop: 10}}>Write reviews to gain points</Typography>
                      <Button variant="contained"style={{ marginTop: 20,backgroundColor:'teal', borderRadius: '50px'}}>
                        Write a review
                      </Button>
                    </CardContent>
                  </Card>
                  <Card sx={{flex:1, marginRight: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
                        <Box style={{ 
                          width: '100px',
                          height: '100px', 
                          borderRadius: '50%', 
                          marginRight: '10px',
                          backgroundColor: 'lightBlue',
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center' 
                        }}>
                          <img src={Photos} alt="Photos" style={{ width: '70px' }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1">Photos</Typography>
                          <Typography variant="caption">Beginner</Typography>
                        </Box>
                      </Box>
                      <div style={{margin:'20px'}}>
                        <Box sx={{ position: 'relative' }}>
                          <Slider 
                            style={{ height: '30px', borderRadius: '50px', position: 'absolute', top: '50px' }}
                            min={0}
                            max={500}
                            step={500 / 13}
                            value={10 * (500 / 13)}
                            marks={marks2}
                            disabled
                            sx={{
                              ...sliderStyles,
                              '& .MuiSlider-rail': {
                                display: 'none',
                              },
                              '& .MuiSlider-track': {
                                display: 'none',
                              },
                              '& .MuiSlider-thumb': {
                                display: 'none',
                              },
                            }}
                          />
                          <Slider 
                            style={{ height: '30px', borderRadius: '50px',margin:'-6px' }}
                            min={0}
                            max={500}
                            step={500 / 13}
                            value={1 * (500 / 13)}
                            marks={marks1}
                            disabled
                            sx={sliderStyles}
                          />
                        </Box>
                      </div>
                      <Typography variant="body2" sx={{marginTop: 10}}>Take a Photos to gain points</Typography>
                      <Button variant="contained"style={{ marginTop: 20,backgroundColor:'teal', borderRadius: '50px'}}>
                        Take a Photo
                      </Button>
                    </CardContent>
                  </Card>
                  <Card sx={{flex:1, marginRight: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
                        <Box style={{ 
                          width: '100px',
                          height: '100px', 
                          borderRadius: '50%', 
                          marginRight: '10px',
                          backgroundColor: 'lightBlue',
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center' 
                        }}>
                          <img src={Placesvisited} alt="Placesvisited" style={{ width: '70px' }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1">Places visited</Typography>
                          <Typography variant="caption">Beginner</Typography>
                        </Box>
                      </Box>
                      <div style={{margin:'20px'}}>
                        <Box sx={{ position: 'relative' }}>
                          <Slider 
                            style={{ height: '30px', borderRadius: '50px', position: 'absolute', top: '50px' }}
                            min={0}
                            max={500}
                            step={500 / 13}
                            value={10 * (500 / 13)}
                            marks={marks2}
                            disabled
                            sx={{
                              ...sliderStyles,
                              '& .MuiSlider-rail': {
                                display: 'none',
                              },
                              '& .MuiSlider-track': {
                                display: 'none',
                              },
                              '& .MuiSlider-thumb': {
                                display: 'none',
                              },
                            }}
                          />
                          <Slider 
                            style={{ height: '30px', borderRadius: '50px',margin:'-6px' }}
                            min={0}
                            max={500}
                            step={500 / 13}
                            value={1 * (500 / 13)}
                            marks={marks1}
                            disabled
                            sx={sliderStyles}
                          />
                        </Box>
                      </div>
                      <Typography variant="body2" sx={{marginTop: 10}}>Visit a places to gain points</Typography>
                      <Button variant="contained"style={{ marginTop: 20,backgroundColor:'teal', borderRadius: '50px'}}>
                        Start Trip
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }}>
            <Box flex={1} pt={1} pr={1}>
              <Card sx={{backgroundColor:'oldlace'}}>
              <CardContent>
    <Typography variant="h5">Badges</Typography>
    <Typography variant="body1">Begin sharing to earn badges and showcase your skills! Every badge will give you 300 points.</Typography>

    <Typography variant="h6">Places to stay</Typography>
    <hr/>
    <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={HotelHunter} alt="Hotel Hunter" style={{ width: '50px' }} />
    </Box>
    <Typography variant="body2" sx={{fontWeight:'bold'}}>0/3</Typography>
    <Typography variant="body2" sx={{fontWeight:'bold'}}>Hotel Hunter</Typography>
    <Typography variant="overline">Visit 3 hotels</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={HotelGuider} alt="Hotel Guider" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/5</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Hotel guider</Typography>
        <Typography variant="overline">Write 5 reviews</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={HotelLens} alt="Hotel Lens" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/3</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Hotel Lens</Typography>
        <Typography variant="overline">Upload pictures</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={HotelExpert} alt="Hotel Expert" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/1</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Hotel expert</Typography>
        <Typography variant="overline">Visit hotel</Typography>
    </Box>
</Box>

<Typography variant="h6">Things to eat</Typography>
    <hr/>
    <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={FoodHunter} alt="Food Hunter" style={{ width: '50px' }} />
    </Box>
    <Typography variant="body2" sx={{fontWeight:'bold'}}>0/3</Typography>
    <Typography variant="body2" sx={{fontWeight:'bold'}}>Food Hunter</Typography>
    <Typography variant="overline">Visit 3 restaurant</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={FoodGuider} alt="Food Guider" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/5</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Restaurant guider</Typography>
        <Typography variant="overline">Write 5 reviews</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={FoodLens} alt="Food Lens" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/3</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Restaurant Lens</Typography>
        <Typography variant="overline">Upload pictures</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={FoodExpert} alt="Food Expert" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/15</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Restaurants expert</Typography>
        <Typography variant="overline">Visit Restaurants</Typography>
    </Box>
</Box>

<Typography variant="h6">Things to do</Typography>
    <hr/>
    <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={RunisHunter} alt="Runis Hunter" style={{ width: '50px' }} />
    </Box>
    <Typography variant="body2" sx={{fontWeight:'bold'}}>0/3</Typography>
    <Typography variant="body2" sx={{fontWeight:'bold'}}>Runis Hunter</Typography>
    <Typography variant="overline">Visit 3 places</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Guider} alt="Guider" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/5</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Guider</Typography>
        <Typography variant="overline">Write 5 reviews</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={HeritageLens} alt="Heritage Lens" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/3</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Heritage Lens</Typography>
        <Typography variant="overline">Upload pictures</Typography>
    </Box>
    <Box sx={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Box sx={{backgroundColor: 'white', borderRadius: '50%', width: '70px', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Explorerplace} alt="Explorer place" style={{ width: '50px' }} />
    </Box>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>0/10</Typography>
        <Typography variant="body2" sx={{fontWeight:'bold'}}>Explorer</Typography>
        <Typography variant="overline">Visit 10 places</Typography>
    </Box>
</Box>
</CardContent>
              </Card>
            </Box>
            <Box flex={1} pt={1} pl={1}>
              <Card sx={{backgroundColor:'oldlace'}}>
                <CardContent>
                <Typography variant="h5">Ranks</Typography>
                <Typography variant="overline">Accrue points to ascend in rank.</Typography>

                <Box sx={{display:'flex', alignItems: 'center', margin:'20px',marginTop:'30px'}}>
    <img src={Trailblazer} alt="Trailblazer" style={{ width: '70px', borderRadius: '50%' }} />
    <Box sx={{width: '300px',margin:'10px'}}>
    <Typography variant="h6">Trailblazer</Typography>
        <LinearProgress color="inherit"  variant="determinate" value={0} style={{ height: '20px', backgroundColor: 'white', borderRadius:'50px' }} />
    </Box>
    <Typography variant="body1">2,000</Typography>
    <MonetizationOnIcon style={{ color: 'gold' }} />
</Box>

<Box sx={{display:'flex', alignItems: 'center', margin:'20px',marginTop:'30px'}}>
    <img src={Adventure} alt="Adventure" style={{ width: '70px', borderRadius: '50%' }} />
    <Box sx={{width: '300px',margin:'10px'}}>
    <Typography variant="h6">Trailblazer</Typography>
        <LinearProgress color="inherit"  variant="determinate" value={0} style={{ height: '20px', backgroundColor: 'white', borderRadius:'50px' }} />
    </Box>
    <Typography variant="body1">1,000</Typography>
    <MonetizationOnIcon style={{ color: 'gold' }} />
</Box>

<Box sx={{display:'flex', alignItems: 'center', margin:'20px',marginTop:'30px'}}>
    <img src={Explorer} alt="Explorer" style={{ width: '70px', borderRadius: '50%' }} />
    <Box sx={{width: '300px',margin:'10px'}}>
    <Typography variant="h6">Explorer</Typography>
        <LinearProgress color="inherit"  variant="determinate" value={25} style={{ height: '20px', backgroundColor: 'white', borderRadius:'50px' }} />
    </Box>
    <Typography variant="body1">500</Typography>
    <MonetizationOnIcon style={{ color: 'gold' }} />
</Box>

<Typography variant="h5" style={{marginTop:'100px',marginBottom:'31px'}}>Why there’s ranks</Typography>
<Typography variant="body2">Our site's ranks offer recognition and engagement, unlocking privileges as users ascend from beginner to expert. Each rank signifies dedication and expertise, granting access to exclusive benefits and rewards. Dive deeper into the community, unlock special content, and enjoy premium features. Join us on a journey of exploration, learning, and connection, showcasing your commitment to adventure and discovery.</Typography>


               </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      
      </Box>
        <Footer />

    </Box>
  );
}

export default RewardSystem;
