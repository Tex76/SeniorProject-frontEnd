import * as React from 'react';
import { Box, Typography, ButtonBase, CardContent } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

export default function GroupSize() {
  const groupSizes = [
    { title: 'Solo traveler', icon: <PersonIcon fontSize="large" /> },
    { title: 'Duo travelers', icon: <PeopleIcon fontSize="large" /> },
    { title: 'Friends', icon: <GroupsIcon fontSize="large" /> },
    { title: 'Family', icon: <FamilyRestroomIcon fontSize="large" /> },
  ];

  const [selectedGroup, setSelectedGroup] = React.useState('');

  const handleSelect = (group: string) => {
    setSelectedGroup(group);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h1" style={{ fontFamily: 'Roboto', fontSize: 28, fontWeight: 'bold' }}>
        Who are you traveling with?
      </Typography>
      <Box maxWidth={480} mt={3}>
        <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: 13 }}>
          Please select the size of your group. This will help us provide the best recommendations for your trip.
        </Typography>
      </Box>
      <Box mt={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {groupSizes.map((groupSize) => (
          <ButtonBase
            focusRipple
            key={groupSize.title}
            onClick={() => handleSelect(groupSize.title)}
            sx={{
              width: 345,
              height: 194,
              borderRadius: 1,
              border: selectedGroup === groupSize.title ? '2px solid #205E60' : 'none',
            }}
          >
            {groupSize.icon}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {groupSize.title}
              </Typography>
            </CardContent>
          </ButtonBase>
        ))}
      </Box>
    </Box>
  );
}