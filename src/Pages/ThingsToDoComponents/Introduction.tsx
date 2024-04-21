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

import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Cardimage1 from "../../images/ThingsToDo/Cardimage1.png";
import Cardimage2 from "../../images/ThingsToDo/CardImage2.jpg";
import Cardimage3 from "../../images/ThingsToDo/CardImage3.jpg";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Introduction = () => {
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
          <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
            International Circuit
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            <LocationOnIcon /> RGate 255, Gulf of Bahrain Avenue Umm Jidar,
            Manama 1062 Bahrain
          </Typography>
          <Typography
            variant="overline"
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Box display="flex" alignItems="center">
              <PinDropOutlinedIcon />
              Landmark | 4.8 <Rating
                name="place-rating"
                value={4}
                readOnly
              />{" "}
              1,750 reviews
            </Box>
          </Typography>
          <Typography variant="body1">
            The Bahrain International Circuit, situated in Sakhir, has been a
            hub of motorsport excellence since 2004. Hosting prestigious events
            like the Formula One Bahrain Grand Prix, it offers thrilling races
            and entertainment, attracting global audiences. With its
            state-of-the-art facilities and commitment to innovation, the
            circuit continues to be a symbol of speed and excitement in the
            Middle East.
          </Typography>
        </Grid>

        <Grid item xs={isMobile ? 12 : 6}>
          <Grid container direction="row">
            <Grid item xs={7}>
              <img
                src={Cardimage1}
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
                src={Cardimage3}
                alt="Card Image 2"
                style={{ width: "100%", height: "50%", objectFit: "cover" }}
              />
              <img
                src={Cardimage3}
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
