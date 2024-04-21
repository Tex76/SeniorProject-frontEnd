import React from 'react';
import { TextField, Button, Box, Rating, Typography, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';
import { styled } from '@mui/system';
import { CameraAlt } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '209px',
  background: '#D9D9D9',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10px',
  [theme.breakpoints.up('sm')]: {
    width: '388px',
  },
}));

const ResponsiveBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '388px',
  },
}));

const ReviewForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [value, setValue] = React.useState(2);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          What rating would you give your experience?
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue(newValue);
            }
          }}
          sx={{
            marginBottom: '50px',
            fontSize: isMobile ? '2em' : '3em',
          }}
        />
        <Typography variant="h6" gutterBottom>When did you go?</Typography>
        <ResponsiveBox>
          <TextField
            label="Date"
            type="date"
            defaultValue={new Date().toISOString().slice(0,10)}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                max: new Date().toISOString().slice(0,10), // Disallow dates after today
            }}
            sx={{ marginBottom: '50px' }}
          />
        </ResponsiveBox>
        <Typography variant="h6" gutterBottom>Who did you go with?</Typography>
        <ResponsiveBox>
          <RadioGroup row aria-label="position" name="position" defaultValue="Solo" sx={{ marginBottom: '50px' }}>
            <FormControlLabel value="Solo" control={<Radio color="primary" />} label="Solo" />
            <FormControlLabel value="Duo" control={<Radio color="primary" />} label="Duo" />
            <FormControlLabel value="Family" control={<Radio color="primary" />} label="Family" />
            <FormControlLabel value="Friends" control={<Radio color="primary" />} label="Friends" />
          </RadioGroup>
        </ResponsiveBox>
        <Typography variant="h6" gutterBottom>Write a review.</Typography>
        <ResponsiveBox>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            placeholder="Write your review Here!"
            InputLabelProps={{
                shrink: false,
            }}
            sx={{ 
                marginBottom: '50px',
                border: '1px solid #4E4E4E',
                borderRadius: '6px',
            }}
          />
        </ResponsiveBox>
        <Typography variant="h6" gutterBottom>Title of your review.</Typography>
        <ResponsiveBox>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Provide us with the essence of your experience."
            InputLabelProps={{
                shrink: false,
            }}
            sx={{ 
                marginBottom: '50px',
                border: '1px solid #4E4E4E',
                borderRadius: '6px',
            }}
          />
        </ResponsiveBox>
        <Typography variant="h6" gutterBottom>Add some photos.</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>Optional</Typography>
        <StyledBox>
          <CameraAlt color="action" />
          <Button variant="text" color="primary" onClick={() => {}}>Click to add photos</Button>
        </StyledBox>
        <Typography variant="body2" color="text.secondary" gutterBottom sx={{
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontSize: '9px',
            lineHeight: '11px',
            color: '#000000',
            width: '400px',
            marginBottom: '20px'
        }}>
          <span style={{ fontWeight: 700 }}>Note: </span>
          <span style={{ fontWeight: 400 }}>
              photos you will include it will be part of your review about the place if you need to upload a picture related with place you can choose the other option.
          </span>
        </Typography>
        <ResponsiveBox>
            <FormControlLabel 
                control={<Checkbox />} 
                label={
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontSize: '9px',
                    lineHeight: '11px',
                    color: '#000000',
                    width: '100%', // Changed from '400px'
                    marginBottom: '20px'
                }}>
                    I affirm that this review reflects my personal experience and genuine opinion of the place visited. I confirm that I have no personal or business affiliation with the establishment, and I have not received any incentives or payments from them to write this review. I acknowledge ClickVenture's strict stance against fake reviews and understand the consequences of review fraud.
                </Typography>
                }
            />
        </ResponsiveBox>
        <ResponsiveBox>
            <Button 
            variant="contained" 
            type="submit"
            sx={{
                width: '100%', // Changed from '400px'
                height: '45px',
                background: '#F2B764',
                borderRadius: '25px',
                '&:hover': {
                    backgroundColor: '#007B80',
                    },
            }}
            >
                Continue Submission
            </Button>
        </ResponsiveBox>
      </Box>
    </form>
  ); 
};

export default ReviewForm;