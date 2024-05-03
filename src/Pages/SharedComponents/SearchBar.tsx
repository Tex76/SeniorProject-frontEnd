import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  InputBase,
  lighten,
  Box,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchSample from "../../images/NavBar/SearchSample.png";

// This is the main Search component that wraps the search bar

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "15px",
  backgroundColor: "#C5C5C5", // base color
  "&:hover": {
    backgroundColor: lighten("#C5C5C5", 0.2), // lighter on hover
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  maxWidth: "600px", // prevent the Search component from stretching beyond 600px
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

// This is the wrapper for the search icon
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// This is the input field for the search bar
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontWeight: "bold", // make the text bold
    color: "#000", // make the text more black
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40ch",
    },
    [theme.breakpoints.up("xl")]: {
      width: "50ch",
    },
  },
}));

// Temporary array data
const data = [
  {
    category: "Things To Do",
    items: [
      { image: SearchSample, title: "Cinema", link: "/ThingsToDo" },
      { image: SearchSample, title: "Bowling", link: "/ThingsToDo" },
    ],
  },
  {
    category: "Things To Eat",
    items: [
      { image: SearchSample, title: "Restaurant 1", link: "/ThingsToEat" },
      { image: SearchSample, title: "Restaurant 2", link: "/ThingsToEat" },
    ],
  },
  {
    category: "Places To Stay",
    items: [
      { image: SearchSample, title: "Hotel 1", link: "/PlacesToStay" },
      { image: SearchSample, title: "Hotel 2", link: "/PlacesToStay" },
    ],
  },
];

// This is the main function that renders the search bar
export default function SearchBar() {
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const filteredData = data
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <Search
      sx={{
        backgroundColor: "#E4E4E4",
        borderRadius: "30px",
        position: "relative",
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "#6D7D8B" }} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={{ color: "#6D7D8B" }}
        placeholder={showPlaceholder ? "Search Places!" : ""}
        inputProps={{ "aria-label": "search" }}
        onMouseEnter={() => setShowPlaceholder(true)}
        onMouseLeave={() => setShowPlaceholder(false)}
        onFocus={() => {
          setShowPlaceholder(true);
          setShowDropdown(true);
        }}
        onBlur={() => {
          setShowPlaceholder(false);
          setShowDropdown(false);
        }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {showDropdown && (
        <Box
          sx={{
            backgroundColor: "white",
            mt: 1,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            position: "absolute",
            width: "100%",
            zIndex: 1,
          }}
        >
          {filteredData.map((category, index) => (
            <Box key={index} sx={{ borderBottom: "1px solid #ddd" }}>
              <Box
                sx={{
                  p: 2,
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "teal",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                }}
              >
                {category.category}
              </Box>
              {category.items.map((item, index) => (
                <Link
                  to={item.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem
                    key={index}
                    sx={{
                      borderBottom: "1px solid #ddd",
                      "&:hover": { backgroundColor: "lightgrey" },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={item.title}
                        src={item.image}
                        sx={{
                          width: "64px",
                          height: "48px",
                          borderRadius: "10px",
                          mr: "20px",
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        color: "black",
                        fontFamily: "Roboto",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    />
                  </ListItem>
                </Link>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Search>
  );
}
