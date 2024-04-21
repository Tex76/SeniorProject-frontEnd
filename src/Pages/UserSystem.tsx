import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import profileBack from "../images/Profile/profileBack.png";
import profile from "../images/Profile/profile.png";
import placeImage from "../images/Profile/placeImage.png";
import postedimage from "../images/Profile/postedimage.png";
import background from "../images/Profile/background.png";
import person from "../images/Profile/person.png";
import Adventure from "../images/RewardSystem/Adventure.png";
import HotelLens from "../images/RewardSystem/Hotel Lens.png";
import HotelExpert from "../images/RewardSystem/Hotel expert.png";
import FoodHunter from "../images/RewardSystem/Food Hunter.png";
import FoodGuider from "../images/RewardSystem/Restaurant guider.png";

import {
  CalendarToday as CalendarTodayIcon,
  MonetizationOn as MonetizationOnIcon,
  EmojiEvents as EmojiEventsIcon,
  Reviews as ReviewsIcon,
  CropOriginal as CropOriginalIcon,
  WhereToVote as WhereToVoteIcon,
} from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const UserSystem = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log("You selected ", event.target.files[0]);
      // Handle the selected image file here
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",
          margin: "auto",
          backgroundImage: `url(${background})`,
        }}
      >
        <Box
          style={{
            backgroundColor: "teal",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: "10px",
            width: "100%",
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "1280px" }}>
            <NavBar textColor="rgb(255,255,255)" />
          </Box>
        </Box>

        <img src={profileBack} style={{ width: "100%" }} alt="profile Back" />
        <Box>
          <Box sx={{ maxWidth: 1280 }}>
            <Box
              sx={{
                display: "flex",
                position: "relative",
                width: "100%",
                maxWidth: 1280,
                height: "100%",
                maxHeight: "720px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  marginLeft: "100px",
                  top: "-25%",
                  flex: 1,
                }}
              >
                <button
                  style={{ backgroundColor: "transparent", border: "none" }}
                  onClick={handleClick}
                >
                  <img
                    src={profile}
                    alt="profile"
                    style={{ width: "70%", borderRadius: "50%" }}
                  />
                </button>

                <Dialog open={showForm} onClose={handleClick}>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="raised-button-file"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="raised-button-file"
                    style={{ margin: "100px" }}
                  >
                    <Button
                      variant="contained"
                      component="span"
                      style={{ backgroundColor: "transparent", border: "none" }}
                      onClick={handleClick}
                    >
                      <img
                        src={person}
                        alt="profile"
                        style={{
                          backgroundColor: "darkslategray",
                          width: "100%",
                          borderRadius: "50%",
                          padding: "50px",
                          marginLeft: "50px",
                        }}
                      />
                      Choose Image
                    </Button>
                  </label>

                  <DialogContent>
                    <form style={{ width: "500px", height: "" }}>
                      <h3>Name</h3>
                      <TextField
                        margin="dense"
                        id="name"
                        placeholder="Enter your name..."
                        type="text"
                        fullWidth
                        variant="outlined"
                      />
                      <h3>Username</h3>
                      <TextField
                        margin="dense"
                        id="username"
                        placeholder="Enter your username..."
                        type="text"
                        fullWidth
                        variant="outlined"
                      />
                      <h3>About</h3>
                      <TextField
                        margin="dense"
                        id="about"
                        placeholder="Tell us about yourself..."
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                      />
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          style={{
                            backgroundColor: "darkslategray",
                            color: "white",
                            margin: "10px",
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                <Typography variant="body1">@Jasem Saleh</Typography>
                <Typography variant="body1">
                  <CalendarTodayIcon
                    sx={{ fontSize: 16, marginRight: "5px" }}
                  />{" "}
                  Joined in Dec 2023
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "500px",
                  marginTop: "100px",
                  flex: 3,
                  paddingRight: "100px",
                }}
              >
                <Card sx={{ margin: 2, backgroundColor: "oldlace", flex: 1 }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6">Rank</Typography>
                    <img src={Adventure} alt="Adventure" />
                    <Typography variant="body1">Adventure</Typography>
                  </CardContent>
                </Card>
                <Card sx={{ margin: 2, backgroundColor: "oldlace", flex: 1 }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6">Points</Typography>
                    <MonetizationOnIcon sx={{ color: "gold", fontSize: 70 }} />
                    <Typography variant="body1">1000</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ flex: 1 }}>
                <Card sx={{ margin: 2, backgroundColor: "", flex: 1 }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h6">About</Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus auctor magna vel viverra faucibus. Fusce interdum
                      diam arcu, sed viverra nisi egestas sed. Mauris semper
                      nunc at velit pulvinar vulputate. Phasellus consequat,
                      odio et molestie tempus, dolor metus varius risus, vitae
                      tincidunt quam nisi et eros.
                    </Typography>
                    <Box
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Box sx={{ display: "flex", margin: "20px" }}>
                        <EmojiEventsIcon />
                        <Typography
                          variant="subtitle1"
                          sx={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                          Contributions
                        </Typography>
                        <Typography variant="subtitle1">200</Typography>
                      </Box>
                      <Box sx={{ display: "flex", margin: "20px" }}>
                        <ReviewsIcon />
                        <Typography
                          variant="subtitle1"
                          sx={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                          Reviews
                        </Typography>
                        <Typography variant="subtitle1">15</Typography>
                      </Box>
                      <Box sx={{ display: "flex", margin: "20px" }}>
                        <CropOriginalIcon />
                        <Typography
                          variant="subtitle1"
                          sx={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                          Photos
                        </Typography>
                        <Typography variant="subtitle1">20</Typography>
                      </Box>
                      <Box sx={{ display: "flex", margin: "20px" }}>
                        <WhereToVoteIcon />
                        <Typography
                          variant="subtitle1"
                          sx={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                          Places visited
                        </Typography>
                        <Typography variant="subtitle1">5</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Card sx={{ margin: 2, backgroundColor: "", flex: 1 }}>
                  <CardContent
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="h6">Badges</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        textAlign: "center",
                      }}
                    >
                      <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
                        <img src={HotelExpert} alt="Hotel Expert" />
                        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                          Hotel expert
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
                        <img src={HotelLens} alt="Hotel Lens" />
                        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                          Hotel Lens
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
                        <img src={FoodHunter} alt="Food Hunter" />
                        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                          Food Hunter
                        </Typography>
                      </Box>
                      <Box sx={{ marginBottom: "10px", marginRight: "10px" }}>
                        <img src={FoodGuider} alt="Food Guider" />
                        <Typography variant="body1" sx={{ marginLeft: "5px" }}>
                          Food Guider
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 2 }}>
                <Card sx={{ margin: 2, backgroundColor: "", flex: 1 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{ justifyContent: "flex-start" }}
                  >
                    <Tab label="Reviews" />
                    <Tab label="Photos" />
                  </Tabs>
                  {value === 0 && (
                    <CardContent
                      sx={{
                        margin: "30px",
                        backgroundColor: "oldlace",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <img
                          src={profile}
                          alt="profile"
                          style={{
                            width: "70px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle1">
                            Jasem Saleh
                          </Typography>
                          <Typography variant="caption">Mar 5, 2023</Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <Rating name="read-only" value={4} readOnly />{" "}
                        {/* Replace 4 with the actual rating */}
                      </Box>
                      <Box>
                        <Typography variant="body2">
                          “We are regular customers at this place, each time we
                          want a good steak, this is where we go. The service is
                          very nice, the meet is fresh and cotoletta Milanes...”
                        </Typography>
                      </Box>
                      <img
                        src={postedimage}
                        alt="place"
                        style={{ width: "50%", margin: "10px" }}
                      />
                      <Typography variant="body2">
                        Date visited: March 2023
                      </Typography>
                      <Card
                        sx={{
                          margin: "10px",
                          backgroundColor: "whitesmoke",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <img
                          src={placeImage}
                          alt="place"
                          style={{
                            width: "50%",
                            borderRadius: "10px",
                            margin: "10px",
                          }}
                        />
                        <Box>
                          <Typography variant="h6">
                            Bushido by Buddha-Bar
                          </Typography>
                          <Typography variant="subtitle1">Northern</Typography>
                          <Rating name="place-rating" value={4} readOnly />{" "}
                          {/* Replace 4 with the actual place rating */}
                        </Box>
                      </Card>
                    </CardContent>
                  )}

                  {value === 1 && (
                    <CardContent
                      sx={{
                        margin: "30px",
                        backgroundColor: "oldlace",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <img
                          src={profile}
                          alt="profile"
                          style={{
                            width: "70px",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <Box>
                          <Typography variant="subtitle1">
                            Jasem Saleh
                          </Typography>
                          <Typography variant="caption">Mar 5, 2023</Typography>
                        </Box>
                      </Box>
                      <img
                        src={postedimage}
                        alt="place"
                        style={{ width: "100%" }}
                      />
                    </CardContent>
                  )}
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%", margin: "auto", marginTop: "200px" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default UserSystem;
