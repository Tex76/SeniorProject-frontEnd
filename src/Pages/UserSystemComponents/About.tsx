import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import HotelLens from "../../images/RewardSystem/Hotel Lens.png";
import HotelExpert from "../../images/RewardSystem/Hotel expert.png";
import FoodHunter from "../../images/RewardSystem/Food Hunter.png";
import FoodGuider from "../../images/RewardSystem/Restaurant guider.png";

import {
  EmojiEvents as EmojiEventsIcon,
  Reviews as ReviewsIcon,
  CropOriginal as CropOriginalIcon,
  WhereToVote as WhereToVoteIcon,
} from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const About = () => {
  return (
    <div >
      <Card sx={{ margin: 2 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">About</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            auctor magna vel viverra faucibus. Fusce interdum diam arcu, sed
            viverra nisi egestas sed. Mauris semper nunc at velit pulvinar
            vulputate. Phasellus consequat, odio et molestie tempus, dolor metus
            varius risus, vitae tincidunt quam nisi et eros.
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Box sx={{ display: "flex", margin: "20px" }}>
              <EmojiEventsIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Contributions
              </Typography>
              <Typography variant="subtitle1">200</Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "20px" }}>
              <ReviewsIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Reviews
              </Typography>
              <Typography variant="subtitle1">15</Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "20px" }}>
              <CropOriginalIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Photos
              </Typography>
              <Typography variant="subtitle1">20</Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "20px" }}>
              <WhereToVoteIcon />
              <Typography
                variant="subtitle1"
                sx={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Places visited
              </Typography>
              <Typography variant="subtitle1">5</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ margin: 2,}}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Badges</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
            <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
              <img src={HotelExpert} alt="Hotel Expert" />
              <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                Hotel expert
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
              <img src={HotelLens} alt="Hotel Lens" />
              <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                Hotel Lens
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
              <img src={FoodHunter} alt="Food Hunter" />
              <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                Food Hunter
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
              <img src={FoodGuider} alt="Food Guider" />
              <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                Food Guider
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
