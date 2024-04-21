import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Adventure from "../../images/RewardSystem/Adventure.png";

import { MonetizationOn as MonetizationOnIcon } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Cards = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flex: 3,
        }}
      >
        <Card
          sx={{
            margin: 2,
            backgroundColor: "oldlace",
            flex: 1,
            minWidth: "150px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Rank</Typography>
            <img src={Adventure} alt="Adventure" />
            <Typography variant="body1">Adventure</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            margin: 2,
            backgroundColor: "oldlace",
            flex: 1,
            minWidth: "150px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">Points</Typography>
            <MonetizationOnIcon sx={{ color: "gold", fontSize: 70 }} />
            <Typography variant="body1">1000</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Cards;
