import * as React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase, lighten } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '15px',
  backgroundColor: '#C5C5C5', // base color
  '&:hover': {
    backgroundColor: lighten('#C5C5C5', 0.15), // lighter on hover
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  maxWidth: '600px', // prevent the Search component from stretching beyond 600px
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '40ch',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50ch',
    },
  },
}));

export default function SearchBar() {
  return (
    <Search sx={{ backgroundColor: "#E4E4E4", borderRadius: "30px" }}>
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#6D7D8B" }} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ color: "#6D7D8B" }}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}