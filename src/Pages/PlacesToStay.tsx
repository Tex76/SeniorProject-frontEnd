import * as React from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import Introduction from "./PlacesToStayComponents/Introduction";
import Cards from "./PlacesToStayComponents/Cards";
import Directions from "./PlacesToStayComponents/Directions";
import TopReviews from "./PlacesToStayComponents/TopReviews";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Background from "../images/ThingsToDo/Background.png";

const PlacesToStay = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          backgroundImage: `url(${Background})`,
        }}
      >
        <Box
          style={{
            backgroundColor: "teal",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: "10px",
            width: "100%",
          }}
          sx={{ mb: 15, maxWidth: 1280, margin: "auto" }}
        >
          <NavBar textColor="rgb(255,255,255)" />
        </Box>

        <Box>
          {" "}
          <Introduction />{" "}
        </Box>
        <Box>
          <Cards />
        </Box>

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
          <Box sx={{ margin: 2 }}>
            <Directions />{" "}
          </Box>
          <Box>
            {" "}
            <TopReviews />{" "}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          margin: "auto",
          marginTop: "50px",
        }}
      >
      </Box>
      <Footer />
    </>
  );
};

export default PlacesToStay;
