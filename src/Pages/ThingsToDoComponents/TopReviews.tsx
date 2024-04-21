/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Rating,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import profile from "../../images/Profile/profile.png";
import image from "../../images/ThingsToEat/image.png";
import Adventure from "../../images/RewardSystem/Adventure.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const TopReviews = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [votes, setVotes] = useState(0);
  const [voteType, setVoteType] = useState<"upvote" | "downvote" | null>(null);

  const upvote = () => {
    if (voteType === "upvote") {
      setVotes(0);
      setVoteType(null);
    } else {
      setVotes(1);
      setVoteType("upvote");
    }
  };

  const downvote = () => {
    if (voteType === "downvote") {
      setVotes(0);
      setVoteType(null);
    } else {
      setVotes(-1);
      setVoteType("downvote");
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | Element>(null);

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ justifyContent: "flex-start" }}
      >
        <Tab label="Reviews" />
        <Tab label="Photos" />
      </Tabs>

      {value === 0 && (
        <>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Top reviews
          </Typography>
          <CardContent
            sx={{
              position: "relative",
              borderTop: "2px solid black",
              borderBlockColor: "gainsboro",
              margin: "30px",
              backgroundColor: "oldlace",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", width: "100%", justifyContent: "end" }}>
              <Box
                sx={{
                  margin: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  width: "100px",
                  height: "50px",
                  borderRadius: "50px",
                  border: "1px solid black",
                }}
              >
                <IconButton onClick={upvote} sx={{ flex: "1" }}>
                  <ArrowUpwardIcon />
                </IconButton>
                <p style={{ flex: "1", fontWeight: "bold" }}>{votes}</p>
                <IconButton onClick={downvote} sx={{ flex: "1" }}>
                  <ArrowDownwardIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={handleClick}>
                  <MoreHorizIcon sx={{ fontSize: "50px" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Report</MenuItem>
                  <MenuItem onClick={handleClose}>View Profile</MenuItem>
                </Menu>
              </Box>
            </Box>

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
                <Typography variant="subtitle1">Jasem Saleh</Typography>
                <Typography variant="caption">
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    14
                  </Box>{" "}
                  contributions
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1">Adventure </Typography>
                  <img
                    src={Adventure}
                    alt="Adventure"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginLeft: "10px",
                    }}
                  />
                </div>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Rating name="read-only" value={4} readOnly />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Title of your review for this place
              </Typography>
              <Box display="flex" alignItems="center" mt={1} mb={2}>
                <Typography variant="overline">
                  Written March 16, 2024
                </Typography>
                <CircleIcon sx={{ marginLeft: "10px", marginRight: "10px" }} />
                <Typography variant="overline"> Family</Typography>
              </Box>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                non porta dui. Nunc turpis tortor, interdum eget eros in,
                egestas dictum dolor. Pellentesque vitae neque ac elit hendrerit
                placerat. Nullam pretium quam augue, id elementum nisl molestie
                eu. Sed quis nunc ac quam semper aliquam. Vivamus ipsum turpis,
                pharetra ut purus non, viverra volutpat orci. Vivamus lacus mi,
                ultrices viverra eros eget, tristique elementum risus. Morbi
                lobortis ipsum erat, at semper tellus ornare efficitur.
              </Typography>
              <Box mt={2}>
                <Typography variant="body1">
                  <strong>Date visited:</strong> March 2024
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                sx={{ marginTop: "20px" }}
              >
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography variant="body2" component="p">
                      Service
                    </Typography>
                    <Rating name="location-rating" value={4} readOnly />
                  </Box>
                  <Box>
                    <Typography variant="body2" component="p">
                      Room Quality
                    </Typography>
                    <Rating name="food-quality-rating" value={4} readOnly />
                  </Box>
                  <Box>
                    <Typography variant="body2" component="p">
                      Facilities
                    </Typography>
                    <Rating name="money-rating" value={4} readOnly />
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography variant="body2" component="p">
                      Location
                    </Typography>
                    <Rating name="service-rating" value={4} readOnly />
                  </Box>
                  <Box>
                    <Typography variant="body2" component="p">
                      Cleanliness
                    </Typography>
                    <Rating name="menu-variety-rating" value={4} readOnly />
                  </Box>
                  <Box>
                    <Typography variant="body2" component="p">
                      Ambiance
                    </Typography>
                    <Rating name="ambience-rating" value={4} readOnly />
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </>
      )}

      {value === 1 && (
        <>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Top reviews
          </Typography>
          <CardContent
            sx={{
              position: "relative",
              borderTop: "2px solid black",
              borderBlockColor: "gainsboro",
              margin: "30px",
              backgroundColor: "oldlace",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ display: "flex", width: "100%", justifyContent: "end" }}>
              <Box
                sx={{
                  margin: "10px",
                  display: "flex",
                  backgroundColor: "white",
                  width: "100px",
                  height: "50px",
                  borderRadius: "50px",
                  border: "1px solid black",
                }}
              >
                <IconButton onClick={upvote} sx={{ flex: "1" }}>
                  <ArrowUpwardIcon />
                </IconButton>
                <p style={{ flex: "1", fontWeight: "bold" }}>{votes}</p>
                <IconButton onClick={downvote} sx={{ flex: "1" }}>
                  <ArrowDownwardIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={handleClick}>
                  <MoreHorizIcon sx={{ fontSize: "50px" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Report</MenuItem>
                  <MenuItem onClick={handleClose}>View Profile</MenuItem>
                </Menu>
              </Box>
            </Box>

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
                <Typography variant="subtitle1">Jasem Saleh</Typography>
                <Typography variant="caption">
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    14
                  </Box>{" "}
                  contributions
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1">Adventure </Typography>
                  <img
                    src={Adventure}
                    alt="Adventure"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginLeft: "10px",
                    }}
                  />
                </div>
              </Box>
            </Box>
            <Box>
              <img src={image} alt="image" style={{ width: "100%" }} />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Date: Mar 5, 2023
              </Typography>
            </Box>
          </CardContent>
        </>
      )}
    </div>
  );
};

export default TopReviews;
