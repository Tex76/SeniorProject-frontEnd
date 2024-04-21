import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import Place from '../../images/ReviewPlace/place.png';

const PlaceContent = () => {
  return (
    <>
      <Typography sx={{ 
        fontFamily: 'Ubuntu', 
        fontStyle: 'normal', 
        fontWeight: 700, 
        fontSize: '31px', 
        lineHeight: '150.6%', 
        color: '#000000' , 
        marginBottom: '40px',
        px: { xs: '2rem', sm: '0' }, // Add this line
      }}>
        Share with us how your visit went?
      </Typography>
      <Card sx={{ 
        width: '194px', 
        height: '245px', 
        background: '#FFF5E1', 
        borderRadius: '10px',
        margin: { xs: '0 auto', sm: '0' }, // Modify this line
        '@media (max-width:600px)': { // Add this line
          width: '90%', // Add this line
        }, // Add this line
      }}>
        <CardMedia
          sx={{ 
            height: '134px', 
            width:'163px', 
            background: `url(${Place})`, 
            marginLeft: '16px', 
            marginRight: '16px', 
            marginTop: '20px', 
            marginBottom: '-10px'
          }}
          image={Place}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 700, fontSize: '16px', lineHeight: '150.6%', color: '#000000' }}>
            Bahrain International Circuit
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '9px', lineHeight: '150.6%', color: '#6B5E5E' }}>
            Gate 255, Gulf of Bahrain Avenue Umm Jidar, Manama 1062 Bahrain
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PlaceContent;