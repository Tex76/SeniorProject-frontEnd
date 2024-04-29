/* eslint-disable jsx-a11y/img-redundant-alt */

import * as React from "react";

import {
  Box,
  Typography,
  Rating,
  useMediaQuery,
  useTheme,
  Button
} from "@mui/material";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Cardimage1 from "../../images/ThingsToEat/Cardimage1.png";
import Cardimage2 from "../../images/ThingsToEat/Cardimage2.png";
import Cardimage3 from "../../images/ThingsToEat/Cardimage3.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Introduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        width: "100%",
        marginTop: "120px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="flex-end" sx={{ margin: "10px" }}>
        <Button style={{ marginRight: "10px", color: "black" }}>Review</Button>
        <Typography variant="h5" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Button style={{ color: "black" }}>Save</Button>
      </Box>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Box flex={2}>
          <Box>
            <Typography variant="h4" component="div">
              Bushido by Buddha-Bar
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <LocationOnIcon /> Road 38 Building Nr 52, Block 428, Seef Area,
              to the right of Ritz Carlton Hotel, Manama Bahrain
            </Typography>
            <Typography
              variant="overline"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <Box display="flex" alignItems="center">
                <LocalDiningIcon />
                Restaurant | 4.8
                <Rating name="place-rating" value={4} readOnly />
                <Typography variant="body2" sx={{ fontSize: "0.7em" }}>
                  1,750 reviews
                </Typography>
              </Box>
            </Typography>
            <Typography variant="body1">
              Bushido by Buddha-Bar blends traditional Japanese instruments with
              modern electronic beats, capturing the essence of the samurai
              code. This mesmerizing compilation evokes images of Zen gardens
              and martial arts, offering a unique auditory experience that
              resonates with reverence and adventure. With tracks crafted to
              evoke cherry blossoms, misty mountains, and the elegance of
              geishas, it's a captivating journey into Japanese culture.
            </Typography>
          </Box>
        </Box>
        <Box flex={1}>
          <Box>
            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              alignItems="center"
              justifyContent="center"
              gap={2} // Add this line
            >
              <Box
                flex={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <img src={Cardimage1} alt="Card Image 1" />
              </Box>
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={2} // Add this line
              >
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src={Cardimage2} alt="Card Image 2" />
                </Box>
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src={Cardimage3} alt="Card Image 3" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default Introduction;
