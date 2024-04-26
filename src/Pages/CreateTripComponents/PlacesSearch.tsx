import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import for the filled heart icon

export interface Places {
  id: string;
  name: string;
  image: string;
  location: string;
  liked: boolean;
}

export function PlacesSearch({
  places,
  filterArray,
  setFilterArray,
}: {
  places: Places;
  filterArray: Places[];
  setFilterArray: React.Dispatch<React.SetStateAction<Places[]>>;
}) {
  const { name, location, image, id } = places;
  const [like, setLike] = useState(false); // Initial like state based on props
  function toggleLike(id: string) {
    setLike(!like);
    // this logic I put Not like because it's not yet update it
    setFilterArray(
      filterArray.map((place) =>
        place.id === id ? { ...place, liked: !like } : place
      )
    );
  }

  return (
    <Box
      sx={{
        width: "95%",
        height: "auto",
        marginX: "auto",
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
      }}
    >
      {/* image and information box */}
      <Box sx={{ display: "flex", width: "50%", height: "100%" }}>
        <Box sx={{ width: "40%", height: "100%" }}>
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            marginLeft: "15px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "regular",
              fontSize: "12px",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "regular",
              fontSize: "9px",
              marginTop: "3px",
              color: "gray",
            }}
          >
            {location}
          </Typography>
        </Box>
      </Box>
      {/* like box button */}
      <Box
        sx={{
          width: "10%",
          height: "100%",
          marginTop: "5px",
          padding: "5px 10px",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "100px",
        }}
      >
        <Button
          onClick={() => {
            toggleLike(id);
          }}
          size="medium"
          sx={{
            backgroundColor: "white", // Corrected from "wihte" to "white"
            color: "black",
            borderRadius: "100%",
            minWidth: "0px",
            height: "100%",
            border: "1px solid black",
          }}
        >
          {like ? (
            <FavoriteIcon fontSize="medium" sx={{ color: "red" }} /> // Filled heart icon when liked
          ) : (
            <FavoriteBorderIcon fontSize="medium" />
          )}
        </Button>
      </Box>
    </Box>
  );
}
