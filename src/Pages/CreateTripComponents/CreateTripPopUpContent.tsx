import {
  Box,
  Typography,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Circuit from "./Circuit.jpg";
import Hotel from "./Hotel.jpg";
import { PlacesSearch, Places } from "./PlacesSearch"; // Correct import for default export

import Rest from "./Rest.jpg";

const fakeData = [
  {
    id: "Id-fake-from-database",
    name: "Rest",
    image: Rest,
    location: "Northern",
    liked: false,
  },
  {
    id: "Id2-fake-from-database",
    name: "Circuit",
    image: Circuit,
    location: "Sourthern",
    liked: false,
  },
  {
    id: "Id3-fake-from-database",
    name: "Hotel",
    image: Hotel,
    location: "Capital",
    liked: false,
  },
];

export default function CreateTripPopUpContent({
  location: locationsArray,
  setBlackBox, // Renamed for clarity
}: {
  location: string[];
  setBlackBox: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter places based on the search query, exclude liked places, and match location from props
  const filteredData = fakeData.filter(
    (place) =>
      locationsArray
        .map((loc) => loc.toLowerCase())
        .includes(place.location.toLowerCase()) &&
      (place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const [filterArray, setFilterArray] = useState(filteredData);

  console.log("filterArray: ", filterArray);

  return (
    <Box
      sx={{
        width: "90%",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "26px",
          lineHeight: "150.6%",
          color: "#000000",
        }}
      >
        Search for place
      </Typography>
      <Typography
        sx={{
          marginTop: "5px",
          fontFamily: "Roboto",
          fontWeight: "regular",
          fontSize: "13px",
          color: "#000000",
        }}
      >
        Do you already have certain activities in mind that you don't want to
        miss? Locate and bookmark them for your trip.
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { borderRadius: "40px" },
          }}
          placeholder="Search" // Using placeholder instead of label
        />

        <Box
          sx={{
            borderTop: "1px solid #E4E4E4",
            marginTop: "20px",
            width: "100%",
            height: "100%",
            overflowY: "auto",
            paddingY: "10px",
          }}
        >
          <Box
            sx={{
              borderTop: "1px solid #E4E4E4",
              marginTop: "20px",
              width: "100%",
              height: "100%",
              overflowY: "auto",
              paddingY: "10px",
            }}
          >
            {filteredData.length > 0 ? (
              filteredData.map((place: Places) => (
                <PlacesSearch
                  places={place}
                  filterArray={filterArray}
                  setFilterArray={setFilterArray}
                />
              ))
            ) : (
              <Typography
                sx={{
                  marginTop: "20px",
                  fontFamily: "Roboto",
                  fontWeight: "regular",
                  fontSize: "16px",
                  textAlign: "center",
                  color: "grey",
                }}
              >
                No places found
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          borderTop: "1px solid #E4E4E4",
          paddingY: "15px",
        }}
      >
        <Button
          onClick={() => {
            setBlackBox(false);
          }}
          sx={{
            borderRadius: "25px",
            color: "#fff",
            backgroundColor: "#205E60",
            "&:hover": { backgroundColor: "#16473C" },
            padding: "10px 20px",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            // here you must add the new places with like state into the trip
          }}
          type="submit"
          sx={{
            borderRadius: "25px",
            color: "#fff",
            backgroundColor: "#205E60",
            "&:hover": { backgroundColor: "#16473C" },
            padding: "10px 20px",
          }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
}
