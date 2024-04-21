import * as React from "react";
import { Box, Typography, Rating } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Directions = () => {
  return (
    <div>
      <Typography variant="h6" component="div" sx={{ fontSize: "17px" }}>
        4.8 <Rating name="read-only" value={5} readOnly /> 1,703 reviews
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Exceptional
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={5} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            1,670
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Great
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={4} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            60
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Satisfactory
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={3} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            35
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Poor
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={2} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            15
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px" }}
      >
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            Bad
          </Typography>
        </Box>
        <Box flex={1}>
          <Rating name="read-only" value={1} readOnly />
        </Box>
        <Box flex={1}>
          <Typography variant="inherit" component="div">
            6
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Directions;
