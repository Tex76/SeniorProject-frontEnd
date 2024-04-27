import { Box } from "@mui/material";
import Footer from "./SharedComponents/Footer";
import NavBar from "./SharedComponents/NavBar";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";
import background from "../images/CreateTrip/HeroImage.jpg";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import HeroCreateTripComponent from "./CreateTripComponents/heroCreateTripComponent";
import CreateTripPopUpContent from "./CreateTripComponents/CreateTripPopUpContent";
import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import UpdateTripInfo from "./CreateTripComponents/UpdateCreateInfo";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function CreateTrip() {
  const [blackBox, setBlackBox] = useState(false);
  const [blackBox2, setBlackBox2] = useState(false);
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
      {/* popup */}
      <Box
        onClick={function (e) {
          setBlackBox(false);
          setBlackBox2(false);
        }}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,
          display: blackBox || blackBox2 ? "flex" : "none",
          position: "fixed",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1000,
        }}
      ></Box>
      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "90%", sm: "85%", xs: "85gi%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* example of location must be same as location from CreateTripPopUp  */}
        {/* this will be executed when more button is ***clicked*** */}
        <CreateTripPopUpContent
          location={["Northern", "Sourthern", "Capital"]}
          setBlackBox={setBlackBox}
        />
      </Box>
      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "85%", sm: "85%", xs: "85%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox2 ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* example of location must be same as location from CreateTripPopUp */}
        <UpdateTripInfo passFunction={setBlackBox2} />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 1280 }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          maxWidth: 1280,
          padding: "20px",
        }}
      >
        {/* Trip information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            marginRight: "5%",
            width: { xs: "100%", lg: "49%" },
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
                onClick={() => setBlackBox2(true)}
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
                onClick={() => setBlackBox2(true)}
                sx={{
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                variant="h3"
              >
                Trip Name
              </Typography>
              <Box sx={{ display: "flex" }}>
                <AddLocationIcon sx={{ color: "black" }} fontSize="large" />
                <Typography
                  onClick={() => setBlackBox2(true)}
                  sx={{
                    color: "white",
                    fontFamily: "Roboto",
                    mt: 0.5,
                    cursor: "pointer",
                  }}
                  variant="body1"
                >
                  Capital, Northen, Muharraq
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              onClick={() => setBlackBox2(true)}
              sx={{
                fontFamily: "Roboto",
                fontWeight: "small",
                color: "#6D7D8B",
                cursor: "pointer",
              }}
            >
              Small description about the Trip places and Days.
            </Typography>

            {/* content must be getting form other componenet */}
            <HeroCreateTripComponent setBlackBox={setBlackBox} />
          </Box>
        </Box>
        {/* map box */}
        <Box
          sx={{
            width: "48%",
            height: "100%", // Ensure this height fits within your layout
            display: { xs: "none", md: "flex" },
          }}
        >
          <LoadScript googleMapsApiKey="AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc">
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "85%",
                borderRadius: "15px",
              }}
              center={{ lat: 26.0667, lng: 50.5577 }}
              zoom={8}
            />
          </LoadScript>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
