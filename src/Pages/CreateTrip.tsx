import { Box } from "@mui/material";
import Footer from "./SharedComponents/Footer";
import NavBar from "./SharedComponents/NavBar";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";
import background from "../images/CreateTrip/HeroImage.jpg";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import HeroCreateTripComponent from "./CreateTripComponents/heroCreateTripComponent";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function CreateTrip() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1280 }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Box
        sx={{ display: "flex", width: "100%", height: "100%", maxWidth: 1280 }}
      >
        {/* Trip information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "50%",
          }}
        >
          {/* image box */}
          <Box
            sx={{
              display: "flex",
              padding: "15px",
              borderRadius: "15px",
              justifyContent: "space-between",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${background})`, // Combined linear gradient and background image
              backgroundSize: "cover",
              flexDirection: "column",
              width: "100%",
              height: "305px",
            }}
          >
            {/* Button icon box */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                sx={{
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <SettingsIcon sx={{ color: "black" }} fontSize="large" />
              </IconButton>
            </Box>

            {/* title  box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
                variant="h3"
              >
                Trip Name
              </Typography>
              <Box sx={{ display: "flex" }}>
                <AddLocationIcon sx={{ color: "black" }} fontSize="large" />
                <Typography
                  sx={{ color: "white", fontFamily: "Roboto", mt: 0.5 }}
                  variant="body1"
                >
                  Capital, Northen, Muharraq
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: "small",
                color: "#6D7D8B",
              }}
            >
              Small description about the Trip places and Days.
            </Typography>

            {/* content must be getting form other componenet */}
            <HeroCreateTripComponent />
          </Box>
        </Box>
        {/* map box */}
        <Box></Box>
      </Box>

      <Footer />
    </Box>
  );
}
