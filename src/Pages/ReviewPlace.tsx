import React from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import PlaceContent from "./ReviewPlaceComponents/PlaceContent";
import SuccessSubmit from "./ReviewPlaceComponents/SuccessSubmit";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Place } from "../../../api/SchemaDb";
import { useEffect } from "react";
import { useState } from "react";
import { Comment } from "../../../api/SchemaDb";

import {
  TextField,
  Button,
  Rating,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { styled } from "@mui/system";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "388px",
  },
}));

const ReviewPlace = () => {
  const [form, setForm] = useState({
    rating: 0,
    whenDate: new Date().toISOString().slice(0, 10),
    with: "Solo",
    review: "",
    title: "",
    subRateOne: 0,
    subRateTwo: 0,
    subRateThree: 0,
    subRateFour: 0,
    subRateFive: 0,
    advice: "",
  });

  const [details, setDetails] = useState({
    detailsOne: "",
    detailsTwo: "",
    detailsThree: "",
    detailsFour: "",
    detailsFive: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", 1280));
  const { id } = useParams();
  const [place, setPlace] = React.useState<Place>();
  useEffect(() => {
    const fetchFunction = async () => {
      const place = await axios.get(`http://localhost:4000/places/${id}`);
      setPlace(place.data);
    };

    fetchFunction();
  }, [id]);

  function onSubmit() {
    // let commentValue: Comment;

    // if category is thingsToDo
    // const review: Comment = {
    //   rate: form.rating,
    //   writtenDate: new Date(),
    //   visitDate: new Date(form.whenDate),
    //   whithWhom: form.with,
    //   commentBody: form.review,
    //   title: form.title,
    //   score: 0,
    //   location: form.subRateOne,
    //   safety: form.subRateTwo,
    //   facilities: form.subRateThree,
    //   convenience: form.subRateFour,
    //   staff: form.subRateFive,
    //   helpfulTip: form.advice,
    // };
    // console.log(review);

    // here we need to setup session ID in order to know the who is submitting the review
    // here must we done the logic of adding the review to the database
    // adding to the place reviews array
    // adding to the user reviews array
    // adding to the review collection
    console.log("Form submitted", form);
  }

  useEffect(() => {
    if (!place) return;
    if (place.category === "thingsToDo") {
      setDetails({
        detailsOne: "location",
        detailsTwo: "safety",
        detailsThree: "facilities",
        detailsFour: "convenience",
        detailsFive: "staff",
      });
    } else if (place.category === "thingsToEat") {
      setDetails({
        detailsOne: "food quality",
        detailsTwo: "money",
        detailsThree: "service",
        detailsFour: "menu variety",
        detailsFive: "ambiance",
      });
    } else {
      setDetails({
        detailsOne: "location",
        detailsTwo: "service",
        detailsThree: "room quality",
        detailsFour: "cleanliness",
        detailsFive: "ambiance",
      });
    }
  }, [place]);

  return (
    <Box>
      <Box sx={{ maxWidth: "1280px", margin: "0 auto" }}>
        <NavBar textColor="rgb(0,0,0)" />
        <Box sx={{ marginTop: "100px", marginBottom: "50px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={isMobile ? 12 : 4}
              sx={{ borderRight: isMediumScreen ? "none" : "1px solid #000" }}
            >
              <Box
                sx={{
                  paddingLeft: isMediumScreen ? theme.spacing(2) : 0,
                }}
              >
                {isSubmitted ? (
                  <SuccessSubmit />
                ) : place ? (
                  <PlaceContent place={place} />
                ) : (
                  <div>Loading...</div>
                )}
              </Box>
            </Grid>
            <Grid item xs={isMobile ? 12 : 8}>
              {isSubmitted ? (
                <Box
                  sx={{
                    width: isMobile ? "100%" : "466px",
                    height: "741px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: isMobile ? "0px" : "50px",
                    px: isMobile ? "2rem" : "0", // Add this line
                    boxSizing: "border-box", // Add this line
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      fontSize: "26px",
                      lineHeight: "150.6%",
                      color: "#000000",
                    }}
                  >
                    Just one more thing...
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "150.6%",
                      color: "#000000",
                    }}
                  >
                    What about sharing more details?
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "-10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "150.6%",
                        color: "#000000",
                      }}
                    >
                      {details.detailsOne}
                    </Typography>
                    <Rating
                      name={details.detailsOne}
                      sx={{ fontWeight: "bold", fontSize: "2rem" }}
                      value={form.subRateOne}
                      onChange={(event, newValue) => {
                        if (newValue !== null) {
                          setForm({ ...form, subRateOne: newValue });
                        }
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "-10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "150.6%",
                        color: "#000000",
                      }}
                    >
                      {details.detailsTwo}
                    </Typography>
                    <Rating
                      onChange={(event, newValue) => {
                        if (newValue !== null) {
                          setForm({ ...form, subRateTwo: newValue });
                        }
                      }}
                      value={form.subRateTwo}
                      name={details.detailsTwo}
                      sx={{ fontWeight: "bold", fontSize: "2rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "-10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "150.6%",
                        color: "#000000",
                      }}
                    >
                      {details.detailsThree}
                    </Typography>
                    <Rating
                      value={form.subRateThree}
                      onChange={(event, newValue) => {
                        if (newValue !== null) {
                          setForm({ ...form, subRateThree: newValue });
                        }
                      }}
                      name={details.detailsThree}
                      sx={{ fontWeight: "bold", fontSize: "2rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "-10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "150.6%",
                        color: "#000000",
                      }}
                    >
                      {details.detailsFour}
                    </Typography>
                    <Rating
                      name={details.detailsFour}
                      value={form.subRateFour}
                      onChange={(event, newValue) => {
                        if (newValue !== null) {
                          setForm({ ...form, subRateFour: newValue });
                        }
                      }}
                      sx={{ fontWeight: "bold", fontSize: "2rem" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "-10px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "20px",
                        lineHeight: "150.6%",
                        color: "#000000",
                      }}
                    >
                      {details.detailsFive}
                    </Typography>
                    <Rating
                      name={details.detailsFive}
                      value={form.subRateFive}
                      onChange={(event, newValue) => {
                        if (newValue !== null) {
                          setForm({ ...form, subRateFive: newValue });
                        }
                      }}
                      sx={{ fontWeight: "bold", fontSize: "2rem" }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "150.6%",
                      color: "#000000",
                    }}
                  >
                    Do you have any helpful tips for future travelers?
                  </Typography>
                  <Typography>Optional</Typography>
                  <TextField
                    value={form.advice}
                    onChange={(e) =>
                      setForm({ ...form, advice: e.target.value })
                    }
                    multiline
                    rows={4}
                    placeholder="e.g. the park get crowded in week ends."
                    variant="outlined"
                    sx={{
                      width: isMobile ? "100%" : "388px",
                      height: "131px",
                      border: "none",
                      borderRadius: "6px",
                      mb: "1rem",
                    }}
                  />
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      onClick={onSubmit}
                      sx={{
                        width: isMobile ? "100%" : "388px",
                        height: "45px",
                        background: "#007B80",
                        borderRadius: "25px",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#F2B764",
                        },
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6" gutterBottom>
                      What rating would you give your experience?
                    </Typography>
                    <Rating
                      name="simple-controlled"
                      value={form.rating}
                      onChange={(event, newValue) => {
                        if (newValue !== null) {
                          setForm({ ...form, rating: newValue });
                        }
                      }}
                      sx={{
                        marginBottom: "50px",
                        fontSize: isMobile ? "2em" : "3em",
                      }}
                    />
                    <Typography variant="h6" gutterBottom>
                      When did you go?
                    </Typography>
                    <ResponsiveBox>
                      <TextField
                        label="Date"
                        type="date"
                        defaultValue={form.whenDate}
                        onChange={(e) =>
                          setForm({ ...form, whenDate: e.target.value })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          max: new Date().toISOString().slice(0, 10), // Disallow dates after today
                        }}
                        sx={{ marginBottom: "50px" }}
                      />
                    </ResponsiveBox>
                    <Typography variant="h6" gutterBottom>
                      Who did you go with?
                    </Typography>
                    <ResponsiveBox>
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue={form.with}
                        onChange={(e) =>
                          setForm({ ...form, with: e.target.value })
                        }
                        sx={{ marginBottom: "50px" }}
                      >
                        <FormControlLabel
                          value="Solo"
                          control={<Radio color="primary" />}
                          label="Solo"
                        />
                        <FormControlLabel
                          value="Duo"
                          control={<Radio color="primary" />}
                          label="Duo"
                        />
                        <FormControlLabel
                          value="Family"
                          control={<Radio color="primary" />}
                          label="Family"
                        />
                        <FormControlLabel
                          value="Friends"
                          control={<Radio color="primary" />}
                          label="Friends"
                        />
                      </RadioGroup>
                    </ResponsiveBox>
                    <Typography variant="h6" gutterBottom>
                      Write a review.
                    </Typography>
                    <ResponsiveBox>
                      <TextField
                        fullWidth
                        value={form.review}
                        onChange={(e) =>
                          setForm({ ...form, review: e.target.value })
                        }
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="Write your review Here!"
                        InputLabelProps={{
                          shrink: false,
                        }}
                        sx={{
                          marginBottom: "50px",
                          border: "1px solid #4E4E4E",
                          borderRadius: "6px",
                        }}
                      />
                    </ResponsiveBox>
                    <Typography variant="h6" gutterBottom>
                      Title of your review.
                    </Typography>
                    <ResponsiveBox>
                      <TextField
                        fullWidth
                        value={form.title}
                        onChange={(e) =>
                          setForm({ ...form, title: e.target.value })
                        }
                        variant="outlined"
                        placeholder="Provide us with the essence of your experience."
                        InputLabelProps={{
                          shrink: false,
                        }}
                        sx={{
                          marginBottom: "50px",
                          border: "1px solid #4E4E4E",
                          borderRadius: "6px",
                        }}
                      />
                    </ResponsiveBox>
                    <ResponsiveBox>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          width: "100%", // Changed from '400px'
                          height: "45px",
                          background: "#F2B764",
                          borderRadius: "25px",
                          "&:hover": {
                            backgroundColor: "#007B80",
                          },
                        }}
                      >
                        Continue Submission
                      </Button>
                    </ResponsiveBox>
                  </Box>
                </form>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ReviewPlace;
