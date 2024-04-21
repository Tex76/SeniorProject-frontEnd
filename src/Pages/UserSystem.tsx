import React from "react";
import { Box } from "@mui/material";
import Users from "./UserSystemComponents/Users";
import About from "./UserSystemComponents/About";
import Cards from "./UserSystemComponents/Cards";
import MyPosts from "./UserSystemComponents/MyPosts";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import profileBack from "../images/Profile/profileBack.png";
import background from "../images/Profile/background.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const UserSystem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        width: "100%",
        maxWidth: 1280,
        margin: "auto",
        backgroundImage: `url(${background})`,
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
        <Box>
          <img
            src={profileBack}
            alt="profile Back"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          <Box sx={{ flex: 1 }}>
            <Users />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Cards />
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          <Box sx={{ flex: 1 }}>
            <About />
          </Box>
          <Box sx={{ flex: 2 }}>
            <MyPosts />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", margin: "auto", marginTop: "200px" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default UserSystem;
