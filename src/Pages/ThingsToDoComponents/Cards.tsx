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

import LocationOnIcon from "@mui/icons-material/LocationOn";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Cards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
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
          <CardContent>
            <Typography variant="h5" component="h2">
              Rating and Reviews
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "100px" }}
            >
              4.8 <Rating name="place-rating" value={4} readOnly /> 1,703
              reviews
            </Typography>
            <hr />
            <Typography
              variant="h6"
              component="p"
              sx={{ marginTop: "50px", marginBottom: "10px" }}
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
                <GppGoodOutlinedIcon style={{ color: "black" }} /> Saftey
              </Typography>
              <Rating name="food-quality-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <StorefrontOutlinedIcon style={{ color: "black" }} /> Facilities
              </Typography>
              <Rating name="money-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <ThumbUpOutlinedIcon style={{ color: "black" }} /> Convenience
              </Typography>
              <Rating name="service-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <PeopleAltOutlinedIcon style={{ color: "black" }} /> Staff
              </Typography>
              <Rating name="menu-variety-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <TimerOutlinedIcon style={{ color: "black" }} /> Duration
              </Typography>
              <Rating name="ambience-rating" value={4} readOnly />
            </Box>
          </CardContent>
        </Card>

        <Card
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
              <Typography variant="body1" component="p">
                ACTIVITY TYPES
              </Typography>
              <Typography variant="overline" component="p">
                Entertainment, motorsport events, driving experiences, Formula
                One{" "}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
              Price
              </Typography>
              <Typography variant="overline" component="p">
              price range 4 - 15 for adult
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                Accessibility
              </Typography>
              <Typography variant="overline" component="p">
                Wheelchair Accessible, Pet-Friendly, Family-Friendly, Rest
                Areas, Food and Beverage Options, Shuttle Services, Information
                Desks, First Aid Stations, Lost and Found Services,
                Accessibility Amenities.
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                DURATION
              </Typography>
              <Typography variant="overline" component="p">
                Average 2 - 3 hours
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                What to expect
              </Typography>
              <Typography variant="overline" component="p">
                <Typography variant="overline" component="ul">
                  <li>Thrilling Motorsport Action</li>
                  <li>State-of-the-Art Facilities</li>
                  <li>Vibrant Atmosphere</li>
                  <li>Entertainment for All</li>
                  <li>Unforgettable Experiences</li>
                </Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card
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
              Location and contact
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.043484916671!2d50.513002984973575!3d26.03213318351472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e484d66f7114f99%3A0xb08bbfbdc59c2dc!2z2K3ZhNio2Kkg2KfZhNio2K3YsdmK2YYg2KfZhNiv2YjZhNmK2Kk!5e0!3m2!1sar!2sbh!4v1712646555106!5m2!1sar!2sbh"
              width="100%"
              height="200px"
              style={{ border: "0", borderRadius: "20px", marginTop: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Typography variant="body1" component="p">
              <LocationOnIcon style={{ color: "black", marginTop: "20px" }} />
              Gate 255, Gulf of Bahrain Avenue Umm Jidar, Manama 1062 Bahrain
            </Typography>
            <Typography variant="body1" component="p">
              <CallIcon style={{ color: "black", marginTop: "20px" }} /> +973
              1758 3555
            </Typography>
            <Typography variant="body1" component="p">
              <EmailIcon style={{ color: "black", marginTop: "20px" }} />{" "}
              Reservation@bushido.com.bh{" "}
            </Typography>
          </CardContent>
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
