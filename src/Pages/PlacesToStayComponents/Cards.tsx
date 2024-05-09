/* eslint-disable jsx-a11y/iframe-has-title */
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
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Place } from "../../../../api/SchemaDb";

const Cards = ({ place }: { place: Place }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Box
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
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
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <Box
                    sx={{
                      marginTop: "15px",
                      marginRight: "10px",
                    }}
                  >
                    <Typography>{place.rate}</Typography>
                  </Box>
                  <Box>
                    <Rating
                      sx={{
                        marginTop: "15px",
                      }}
                      name="place-rating"
                      value={place.rate}
                      readOnly
                    />{" "}
                  </Box>
                  <Box
                    sx={{
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                  >
                    <Typography>{place.totalComments + " "} reviews</Typography>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <HowToRegOutlinedIcon style={{ color: "black" }} /> Service
                  </Typography>
                  <Rating
                    name="food-quality-rating"
                    value={place.serviceRate}
                    readOnly
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <BedOutlinedIcon style={{ color: "black" }} /> Room Quality
                  </Typography>
                  <Rating
                    name="money-rating"
                    value={place.roomQuality}
                    readOnly
                  />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2" component="p">
                    <CleaningServicesOutlinedIcon style={{ color: "black" }} />{" "}
                    Cleanliness
                  </Typography>
                  <Rating
                    name="service-rating"
                    value={place.cleanliness}
                    readOnly
                  />
                </Box>
              </CardContent>

              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "roboto",
                    fontWeight: "bold",
                  }}
                  variant="h5"
                  component="h2"
                >
                  Location and contact
                </Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.3231787283516!2d50.545328747888334!3d26.240677949579055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a5c96a6f9721%3A0x2b4c4bdd19a1c061!2z2KjZiNi02YrYqtmI!5e0!3m2!1sar!2sbh!4v1712562450448!5m2!1sar!2sbh"
                  width="100%"
                  height="200px"
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
                  {place.location}
                </Typography>
                <Typography variant="body1" component="p">
                  <CallIcon style={{ color: "black", marginTop: "20px" }} />
                  {place.phoneNumber}
                </Typography>
                <Typography variant="body1" component="p">
                  <EmailIcon style={{ color: "black", marginTop: "20px" }} />
                  {place.email}
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
                    {!!place.accommodationType &&
                      place.accommodationType
                        .map((accommodationType) => {
                          return accommodationType;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <ChairOutlinedIcon sx={{ color: "black" }} /> Amenities
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.amenities &&
                      place.amenities
                        .map((amenities) => {
                          return amenities;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <BedroomParentOutlinedIcon sx={{ color: "black" }} /> ROOM
                    TYPE
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.roomType &&
                      place.roomType
                        .map((roomType) => {
                          return roomType;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <PinDropOutlinedIcon sx={{ color: "black" }} /> Location
                    Type
                  </Typography>
                  <Typography variant="overline" component="p">
                    {place.locationType}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <SupportAgentOutlinedIcon sx={{ color: "black" }} />{" "}
                    Additional Services
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.additionalServices &&
                      place.additionalServices
                        .map((additionalServices) => {
                          return additionalServices;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <GTranslateOutlinedIcon sx={{ color: "black" }} /> LANGUAGE
                    SPOKEN
                  </Typography>
                  <Typography variant="overline" component="p">
                    {!!place.languagesSpoken &&
                      place.languagesSpoken
                        .map((languagesSpoken) => {
                          return languagesSpoken;
                        })
                        .join(", ")}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <LocalAtmOutlinedIcon sx={{ color: "black" }} /> PRICE RANGE
                  </Typography>
                  <Typography variant="overline" component="p">
                    {place.priceRange}
                  </Typography>
                </Box>
                <Box mt={3}>
                  <Typography variant="subtitle1" component="p">
                    <StarsOutlinedIcon sx={{ color: "black" }} /> Hotel Class
                  </Typography>
                  <Rating
                    name="location-rating"
                    value={place.hotelClass}
                    readOnly
                  />
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
                onClick={() => {
                  window.location.href = `/review/${place._id}`;
                }}
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
