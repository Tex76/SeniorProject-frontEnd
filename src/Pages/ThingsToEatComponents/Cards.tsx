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
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
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
          <CardContent>
            <Typography variant="h5" component="h2">
              Rating and Reviews
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "100px" }}
            >
              4.8
              <Rating name="place-rating" value={4} readOnly />
              1,703 reviews
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
                <DinnerDiningIcon style={{ color: "black" }} /> Food Quality
              </Typography>
              <Rating name="food-quality-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <LocalAtmIcon style={{ color: "black" }} /> Money
              </Typography>
              <Rating name="money-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <VolunteerActivismIcon style={{ color: "black" }} /> Service
              </Typography>
              <Rating name="service-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <MenuBookIcon style={{ color: "black" }} /> Menu Variety
              </Typography>
              <Rating name="menu-variety-rating" value={4} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <TableRestaurantIcon style={{ color: "black" }} /> Ambience
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
                PRICE RANGE
              </Typography>
              <Typography variant="overline" component="p">
                35$ - $120
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                CUISINES
              </Typography>
              <Typography variant="overline" component="p">
                Japanese, Sushi, Asian
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                MEALS
              </Typography>
              <Typography variant="overline" component="p">
                Lunch, Dinner, Brunch, Late Night
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                FEATURES
              </Typography>
              <Typography variant="overline" component="p">
                Delivery, Takeout, Reservations, Outdoor Seating, Private
                Dining, Seating, Parking Available, Validated Parking, Valet
                Parking, Highchairs Available, Wheelchair Accessible, Serves
                Alcohol, Full Bar, Accepts American Express, Accepts Mastercard,
                Accepts Visa, Free Wifi, Accepts Credit Cards, Table Service,
                Live Music
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.3231787283516!2d50.545328747888334!3d26.240677949579055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49a5c96a6f9721%3A0x2b4c4bdd19a1c061!2z2KjZiNi02YrYqtmI!5e0!3m2!1sar!2sbh!4v1712562450448!5m2!1sar!2sbh"
              width="100%"
              height="200px"
              style={{ border: "0", borderRadius: "20px", marginTop: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Typography variant="body1" component="p">
              <LocationOnIcon style={{ color: "black", marginTop: "20px" }} />
              Road 38 Building Nr 52, Block 428, Seef Area, to the right of Ritz
              Carlton Hotel, Manama Bahrain
            </Typography>
            <Typography variant="body1" component="p">
              <CallIcon style={{ color: "black", marginTop: "20px" }} /> +973
              1758 3555
            </Typography>
            <Typography variant="body1" component="p">
              <EmailIcon style={{ color: "black", marginTop: "20px" }} />{" "}
              Reservation@bushido.com.bh
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
