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
import { Place } from "../../../../api/SchemaDb";

const Cards = ({ place }: { place: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        display: "flex",
        marginTop: "50px",
        flexDirection: "column",
      }}
    >
      <Box
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "0 10px 10px 0",
            borderRadius: "10px",
            color: "white",
            height: "Auto",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                fontFamily: "roboto",
                fontWeight: "bold",
              }}
              variant="h5"
              component="h2"
            >
              Rating and Reviews
            </Typography>
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
            <hr />
            <Typography
              variant="h6"
              component="p"
              sx={{ marginTop: "50px", marginBottom: "10px" }}
            >
              RATINGS{" "}
            </Typography>
            <Box display="flex" justifyContent="space-between"></Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <DinnerDiningIcon style={{ color: "black" }} /> Food Quality
              </Typography>
              <Rating
                name="food-quality-rating"
                value={place.subRatings.foodQuality}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <LocalAtmIcon style={{ color: "black" }} /> Money
              </Typography>
              <Rating
                name="money-rating"
                value={place.subRatings.valueForMoney}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <VolunteerActivismIcon style={{ color: "black" }} /> Service
              </Typography>
              <Rating
                name="service-rating"
                value={place.subRatings.service}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <MenuBookIcon style={{ color: "black" }} /> Menu Variety
              </Typography>
              <Rating
                name="menu-variety-rating"
                value={place.subRatings.menuVariety}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <TableRestaurantIcon style={{ color: "black" }} /> Ambience
              </Typography>
              <Rating
                name="ambience-rating"
                value={place.subRatings.ambiance}
                readOnly
              />
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "0 0 10px 0",
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
                {place.priceRange}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                CUISINES
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.cuisines &&
                  place.cuisines
                    .map((cuisines: any) => {
                      return cuisines;
                    })
                    .join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                MEALS
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.meals &&
                  place.meals
                    .map((meals: any) => {
                      return meals;
                    })
                    .join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="body1" component="p">
                FEATURES
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.featuresList &&
                  place.featuresList
                    .map((featuresList: any) => {
                      return featuresList;
                    })
                    .join(", ")}
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            bgcolor: "teal",
            flex: 1,
            margin: "0 0 10px 10px",
            borderRadius: "10px",
            color: "white",
          }}
        >
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
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc&q=${place.googleLocation.lat},${place.googleLocation.lng}`}
              width="100%"
              height="200px"
              style={{ border: "0", borderRadius: "20px", marginTop: "20px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Typography variant="body1" component="p">
              <LocationOnIcon style={{ color: "black", marginTop: "20px" }} />
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
        </Card>
      </Box>
      <Box>
        <Card
          sx={{
            bgcolor: "teal",
            borderRadius: "10px",
            color: "white",
          }}
        >
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
    </Box>
  );
};

export default Cards;
