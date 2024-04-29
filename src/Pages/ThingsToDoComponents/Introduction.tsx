/* eslint-disable jsx-a11y/img-redundant-alt */

import * as React from "react";

import {
  Box,
  Typography,
  Button,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Cardimage1 from "../../images/ThingsToDo/Cardimage1.png";
import Cardimage2 from "../../images/ThingsToDo/CardImage2.jpg";
import Cardimage3 from "../../images/ThingsToDo/CardImage3.jpg";

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
              International Circuit
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              <LocationOnIcon /> RGate 255, Gulf of Bahrain Avenue Umm Jidar,
              Manama 1062 Bahrain
            </Typography>
            <Typography
              variant="overline"
              sx={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <Box display="flex" alignItems="center">
                <PinDropOutlinedIcon />
                LANDMARK | 4.8
                <Rating name="place-rating" value={4} readOnly />
                <Typography variant="body2" sx={{ fontSize: "0.7em" }}>
                  1,750 reviews
                </Typography>
              </Box>
            </Typography>
            <Typography variant="body1">
              The Bahrain International Circuit, situated in Sakhir, has been a
              hub of motorsport excellence since 2004. Hosting prestigious
              events like the Formula One Bahrain Grand Prix, it offers
              thrilling races and entertainment, attracting global audiences.
              With its state-of-the-art facilities and commitment to innovation,
              the circuit continues to be a symbol of speed and excitement in
              the Middle East.
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
