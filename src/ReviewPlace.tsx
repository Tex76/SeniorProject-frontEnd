import React from 'react';
import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import NavBar from './SharedComponents/NavBar';
import Footer from './SharedComponents/Footer';
import PlaceContent from './ReviewPlaceComponents/PlaceContent';
import ReviewForm from './ReviewPlaceComponents/ReviewForm';
import SuccessSubmit from './ReviewPlaceComponents/SuccessSubmit';
import MoreForm from './ReviewPlaceComponents/MoreForm';

const ReviewPlace = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm',1280));

  return (
    <Box>
      <Box sx={{ maxWidth: '1280px', margin: '0 auto' }}>
      <NavBar textColor="rgb(0,0,0)"/>
      <Box sx={{ marginTop: '100px', marginBottom: '50px'}}>
        <Grid container spacing={2}>
          <Grid item xs={isMobile ? 12 : 4} sx={{ borderRight: isMediumScreen ? 'none' : '1px solid #000' }}>
            <Box sx={{ paddingLeft: isMediumScreen ? theme.spacing(2) : 0 }}>
              {isSubmitted ? <SuccessSubmit /> : <PlaceContent />}
            </Box>
          </Grid>
          <Grid item xs={isMobile ? 12 : 8}>
            {isSubmitted ? <MoreForm onSubmit={() => console.log('Second form submitted')} /> : <ReviewForm onSubmit={() => setIsSubmitted(true)} />}
          </Grid>
        </Grid>
      </Box>
      
    </Box>
    <Footer/>
    </Box>
  );
};

export default ReviewPlace;