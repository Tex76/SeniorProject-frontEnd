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
import { Place } from "../../../../api/SchemaDb";

const Cards = ({ place }: { place: Place }) => {
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
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <LocationOnIcon style={{ color: "black" }} /> Location
              </Typography>
              <Rating
                name="location-rating"
                value={place.locationRate}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <GppGoodOutlinedIcon style={{ color: "black" }} /> Saftey
              </Typography>
              <Rating
                name="food-quality-rating"
                value={place.safety}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <StorefrontOutlinedIcon style={{ color: "black" }} /> Facilities
              </Typography>
              <Rating name="money-rating" value={place.facilities} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <ThumbUpOutlinedIcon style={{ color: "black" }} /> Convenience
              </Typography>
              <Rating
                name="service-rating"
                value={place.convenience}
                readOnly
              />
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" component="p">
                <PeopleAltOutlinedIcon style={{ color: "black" }} /> Staff
              </Typography>
              <Rating name="menu-variety-rating" value={place.staff} readOnly />
            </Box>
            <Box display="flex" justifyContent="space-between">
              {/* <Typography variant="body2" component="p">
                <TimerOutlinedIcon style={{ color: "black" }} /> Duration
              </Typography> */}
              {/* <Rating name="ambience-rating" value={0} readOnly /> */}
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
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                component="p"
              >
                ACTIVITY TYPES
              </Typography>
              <Typography variant="overline" component="p">
                {!!place.activityType &&
                  place.activityType
                    .map((activity) => {
                      return activity;
                    })
                    .join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                variant="body1"
                component="p"
              >
                Accessibility
              </Typography>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  textTransform: "capitalize",
                }}
                variant="overline"
                component="p"
              >
                {!!place.accessibility &&
                  place.accessibility
                    .map((accessibility) => {
                      return accessibility;
                    })
                    .join(", ")}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                variant="body1"
                component="p"
              >
                DURATION
              </Typography>
              <Typography variant="overline" component="p">
                {place.duration}
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography
                sx={{
                  fontFamily: "roboto",
                  fontWeight: "bold",
                }}
                variant="body1"
                component="p"
              >
                What to expect
              </Typography>
              <Typography variant="overline" component="p">
                <Typography
                  sx={{
                    fontFamily: "roboto",
                    fontSize: "12px",
                    textTransform: "capitalize",
                  }}
                  variant="overline"
                  component="ul"
                >
                  {!!place.whatToExpect &&
                    place.whatToExpect.map((except) => {
                      return <li>{except.toLowerCase()}</li>;
                    })}
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
            {/* need to be modified  */}
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
              {place.location}
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
