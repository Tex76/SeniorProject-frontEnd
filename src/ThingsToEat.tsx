import * as React from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Introduction from "./ThingsToEatComponents/Introduction";
import Cards from "./ThingsToEatComponents/Cards";
import Directions from "./ThingsToEatComponents/Directions";
import TopReviews from "./ThingsToEatComponents/TopReviews";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Background from "../images/ThingsToEat/Background.png";

const ThingsToEat = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        style={{
          backgroundColor: "teal",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "10px",
          width: "100%",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: 1280, width: "100%" }}>
          <NavBar textColor="rgb(255,255,255)" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          postion: "realative",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            zIndex: 12,
            left: { md: -100, xs: 10 },
            right: { md: 0 },
            top: 350,
            width: "250px",
            height: "250px",
          }}
        ></Box>
        <Introduction />

        <Cards />

        <Box
          sx={{
            backgroundColor: "oldlace",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <Box sx={{ padding: "25px" }}>
            <Directions />
          </Box>
          <Box sx={{ padding: "25px" }}>
            <TopReviews />
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            margin: "auto",
            marginTop: "50px",
          }}
        ></Box>
      </Box>
      <Footer />
    </>
  );
};

export default ThingsToEat;
