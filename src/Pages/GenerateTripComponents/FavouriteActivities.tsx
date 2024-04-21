import * as React from 'react';
import { Box, Typography, Button, TextField, IconButton, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function FavouriteActivities() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const activities = [
    'Culture', 'History', 'Beaches', 'Middle Eastern', 'Dessert',
    'Lunch', 'Shopping', 'Museums', 'Entertainment', 'Ancient Ruins'
  ];

  const [selectedActivities, setSelectedActivities] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSelect = (activity: string) => {
    if (!selectedActivities.includes(activity)) {
      setSelectedActivities(prev => [...prev, activity]);
    }
  };

  const handleDeselect = (activity: string) => {
    setSelectedActivities(prev => prev.filter(item => item !== activity));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredActivities = activities.filter(activity =>
    activity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ fontFamily: 'Roboto', fontSize: isMobile ? 20 : 28, fontWeight: 'bold' }}>
        How would you like to utilize your time?
      </Typography>
      <Box maxWidth={isMobile ? 360 : 480} mt={3}>
        <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: isMobile ? 11 : 13 }}>
          Order the following tags with your favourites up to 10 preferences.
        </Typography>
      </Box>
      <Box mt={2} sx={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: '1rem' }}>
        {filteredActivities.map((activity) => (
          <Button
            variant="outlined"
            key={activity}
            onClick={() => handleSelect(activity)}
            sx={{
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px',
            }}
          >
            {activity}
          </Button>
        ))}
      </Box>
      <Box mt={2}>
        <TextField
          label="Search Activities"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
        />
      </Box>
      <Box mt={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {selectedActivities.map((activity) => (
          <Button
            variant="outlined"
            key={activity}
            sx={{
              color: 'black',
              borderColor: 'black',
              borderRadius: '5px',
              marginRight: '1rem',
              marginBottom: '1rem',
            }}
          >
            {activity}
            <IconButton onClick={() => handleDeselect(activity)} size="small">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Button>
        ))}
      </Box>
    </Box>
  );
}