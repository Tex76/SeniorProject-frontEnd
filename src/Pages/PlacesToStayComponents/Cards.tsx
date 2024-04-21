import * as React from "react";
import {
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Cards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
        }}
      >
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "10px",
            borderRadius: "10px",
            color: "white",
            height: "Auto",
          }}
        >
          <Box
            sx={{
              width: "90%",
              height: "Auto",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "10px",
            }}
          >
            <Box
              sx={{ bgcolor: "teal", flex: 1, color: "white", height: "Auto" }}
            >
              <Typography variant="h4" component="h2" sx={{ margin: "20px" }}>
                About Hotel
              </Typography>
              <CardContent sx={{ borderBottom: "1px solid white" }}>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ marginBottom: "20px" }}
                >
                  4.8 <Rating name="place-rating" value={4} readOnly /> 1,703
                  reviews
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ marginBottom: "10px" }}
                >
                  RATINGS{" "}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <LocationOnIcon style={{ color: "black" }} /> Location
                  </Typography>
                  <Rating name="location-rating" value={4} readOnly />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <HowToRegOutlinedIcon style={{ color: "black" }} /> Service
                  </Typography>
                  <Rating name="food-quality-rating" value={4} readOnly />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <BedOutlinedIcon style={{ color: "black" }} /> Room Quality
                  </Typography>
                  <Rating name="money-rating" value={4} readOnly />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <CleaningServicesOutlinedIcon style={{ color: "black" }} />{" "}
                    Cleanliness
                  </Typography>
                  <Rating name="service-rating" value={4} readOnly />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <StorefrontOutlinedIcon style={{ color: "black" }} />{" "}
                    Facilities
                  </Typography>
                  <Rating name="menu-variety-rating" value={4} readOnly />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <SportsEsportsOutlinedIcon style={{ color: "black" }} />{" "}
                    intertaint
                  </Typography>
                  <Rating name="ambience-rating" value={4} readOnly />
                </Box>
              </CardContent>

              <CardContent>
                <Typography variant="h5" component="h2">
                  Location and contact
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.043484916671!2d50.513002984973575!3d26.03213318351472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e484d66f7114f99%3A0xb08bbfbdc59c2dc!2z2K3ZhNio2Kkg2KfZhNio2K3YsdmK2YYg2KfZhNiv2YjZhNmK2Kk!5e0!3m2!1sar!2sbh!4v1712646555106!5m2!1sar!2sbh"
                  width="100%"
                  height="300px"
                  style={{
                    border: "0",
                    borderRadius: "20px",
                    marginTop: "20px",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <Typography variant="body1" component="p">
                  <LocationOnIcon
                    style={{ color: "black", marginTop: "20px" }}
                  />
                  Gate 255, Gulf of Bahrain Avenue Umm Jidar, Manama 1062
                  Bahrain
                </Typography>
                <Typography variant="body1" component="p">
                  <CallIcon style={{ color: "black", marginTop: "20px" }} />{" "}
                  +973 1758 3555
                </Typography>
                <Typography variant="body1" component="p">
                  <EmailIcon style={{ color: "black", marginTop: "20px" }} />{" "}
                  Reservation@bushido.com.bh{" "}
                </Typography>
              </CardContent>
            </Box>

            <Box
              sx={{
                bgcolor: "teal",
                flex: 1,
                margin: "10px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2">
                  Characteristic
                </Typography>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <ApartmentOutlinedIcon sx={{ color: "black" }} />{" "}
                    ACCOMMODATION TYPE
                  </Typography>
                  <Typography variant="overline" component="p">
                    Deluxe Rooms, Executive Rooms, Suites (Junior, Executive,
                    and Presidential), Accessible Rooms
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <ChairOutlinedIcon sx={{ color: "black" }} /> Amenities
                  </Typography>
                  <Typography variant="overline" component="p">
                    High-speed Wi-Fi, outdoor swimming pool, fitness center,
                    spa, dining options, business center, concierge services,
                    valet parking, meeting spaces, and laundry services are
                    among the amenities offered at Hilton Bahrain.
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <BedroomParentOutlinedIcon sx={{ color: "black" }} /> ROOM
                    TYPE
                  </Typography>
                  <Typography variant="overline" component="p">
                    Standard Rooms, Executive Rooms, Suites (Junior, Executive,
                    and Presidential), and Accessible Rooms to cater to diverse
                    guest preferences.
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <PinDropOutlinedIcon sx={{ color: "black" }} /> Location
                    Type
                  </Typography>
                  <Typography variant="overline" component="p">
                    In the heart of Manama, Bahrain, offering convenient access
                    to business districts, cultural attractions, and shopping
                    destinations.
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <SupportAgentOutlinedIcon sx={{ color: "black" }} />{" "}
                    Additional Services
                  </Typography>
                  <Typography variant="overline" component="p">
                    Airport transportation, car rental desk, currency exchange,
                    24-hour room service, babysitting, tour desk, express
                    check-in/out, gift shop, and executive lounge access.
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <GTranslateOutlinedIcon sx={{ color: "black" }} /> LANGUAGE
                    SPOKEN
                  </Typography>
                  <Typography variant="overline" component="p">
                    English, Arabic, Afrikaans, Filipino, Hindi, Hungarian,
                    Swahili, Tamil, Turkish
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <LocalAtmOutlinedIcon sx={{ color: "black" }} /> PRICE RANGE
                  </Typography>
                  <Typography variant="overline" component="p">
                    $115 - $138 (Based on Average Rates for a Standard Room)
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <StarsOutlinedIcon sx={{ color: "black" }} /> Hotel Class
                  </Typography>
                  <Rating name="location-rating" value={3} readOnly />
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>

      <Box>
        <Card sx={{ bgcolor: "teal", borderRadius: "10px", color: "white" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Characteristic
            </Typography>
            <Box>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "sandybrown",
                  margin: "20px",
                  borderRadius: "50px",
                }}
              >
                Write review
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "sandybrown",
                  margin: "20px",
                  borderRadius: "50px",
                }}
              >
                Upload Image
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Cards;
