/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Introduction from "./ThingsToDoComponents/Introduction";
import Cards from "./ThingsToDoComponents/Cards";
import Directions from "./ThingsToDoComponents/Directions";
import TopReviews from "./ThingsToDoComponents/TopReviews";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import Background from "../images/ThingsToDo/Background.jpg";
import { Place } from "../../../api/SchemaDb";

const ThingsToDo = ({ place }: { place: Place }) => {
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
          position: "relative",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            zIndex: -1,
            left: { md: -110, xs: 10 },
            right: { md: 0 },
            top: 350,
            width: "250px",
            height: "250px",
          }}
        ></Box>

        <Introduction place={place} />

        <Cards place={place} />

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
            <Directions place={place} />
          </Box>
          <Box sx={{ padding: "25px" }}>
            <TopReviews place={place} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          marginTop: "200px",
        }}
      ></Box>
      <Footer />
    </>
  );
};

export default ThingsToDo;
