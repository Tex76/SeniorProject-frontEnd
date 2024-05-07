/* eslint-disable jsx-a11y/img-redundant-alt */

import * as React from "react";

import {
  Box,
  Typography,
  Button,
  Rating,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Place } from "../../../../api/SchemaDb";

const Introduction = ({ place }: { place: Place }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        width: "100%",
        marginTop: "120px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box display="flex" justifyContent="flex-end" sx={{ margin: "10px" }}>
        <Button style={{ marginRight: "10px", color: "black" }}>Review</Button>
        <Typography variant="h5" style={{ margin: "0 10px" }}>
          |
        </Typography>
        <Button style={{ color: "black" }}>Save</Button>
      </Box>
      <Grid container spacing={2} sx={{ p: { xs: 2 } }}>
        <Grid item xs={isMobile ? 12 : 6}>
          <Typography variant="h4" component="div">
          {place.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <LocationOnIcon />{place.location}
          </Typography>
          <Typography
            variant="overline"
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Box display="flex" alignItems="center">
              <LocalDiningIcon />
              {place.type}  | {place.rate}{" "}
              <Rating name="place-rating" value={4} readOnly />
              {place.totalComments} reviews
            </Box>
          </Typography>
          <Typography variant="body1">{place.description}</Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 6}>
          <Grid container direction="row">
            <Grid item xs={7}>
            <img
                src={`/systemImage/${place.imagePlace[0]}`}
                alt="Card Image 1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px 0px 0px 6px",
                }}
              />
            </Grid>
            <Grid item xs={5}>
             <img
                src={`/systemImage/${place.imagePlace[1]}`}
                alt="Card Image 2"
                style={{ width: "100%", height: "50%", objectFit: "cover" }}
              />
              <img
                src={`/systemImage/${place.imagePlace[2]}`}
                alt="Card Image 3"
                style={{
                  width: "100%",
                  height: "50%",
                  objectFit: "cover",
                  marginTop: "-4px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Introduction;
