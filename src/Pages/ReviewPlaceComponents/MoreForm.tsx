import React from 'react';
import { Box, Typography, Button, Rating, TextField, useMediaQuery, useTheme } from '@mui/material';

interface MoreFormProps {
  onSubmit: () => void;
}

const MoreForm: React.FC<MoreFormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Box sx={{ 
        width: isMobile ? '100%' : '466px', 
        height: '741px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        marginLeft: isMobile ? '0px' : '50px',
        px: isMobile ? '2rem' : '0', // Add this line
        boxSizing: 'border-box', // Add this line
      }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: '26px', lineHeight: '150.6%', color: '#000000' }}>
        Just one more thing...
      </Typography>
      <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>
        What about sharing more details?
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '-10px' }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>Location</Typography>
        <Rating name="location" sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '-10px' }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>Service</Typography>
        <Rating name="service" sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '-10px' }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>Room Quality</Typography>
        <Rating name="roomQuality" sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '-10px' }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>Cleanliness</Typography>
        <Rating name="cleanliness" sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '-10px' }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>Facilities</Typography>
        <Rating name="facilities" sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
        <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>Ambiance</Typography>
        <Rating name="ambiance" sx={{ fontWeight: 'bold', fontSize: '2rem' }} />
      </Box>
      <Typography sx={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '150.6%', color: '#000000' }}>
        Do you have any helpful tips for future travelers?
      </Typography>
      <Typography>
        Optional
      </Typography>
      <TextField 
          multiline 
          rows={4} 
          placeholder="e.g. the park get crowded in week ends." 
          variant="outlined"
          sx={{ 
              width: isMobile ? '100%' : '388px', 
              height: '131px', 
              border: 'none',
              borderRadius: '6px', 
              mb: '1rem' 
          }} 
      />    
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button 
        onClick={onSubmit} 
        sx={{ 
          width: isMobile ? '100%' : '388px', 
          height: '45px', 
          background: '#007B80', 
          borderRadius: '25px', 
          color: 'white',
          '&:hover': {
            backgroundColor: '#F2B764',
          },
        }}
      >
        Submit
      </Button> 
     </Box>
    </Box>
  );
};

export default MoreForm;