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
import { format, parseISO } from "date-fns";

import profile from "../../images/Profile/profile.png";
import Adventure from "../../images/RewardSystem/Adventure.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Comment, Photo, Place } from "../../../../api/SchemaDb";

const TopReviews = ({ place }: { place: Place }) => {
  const [value, setValue] = useState(0);
  console.log(place);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [votes, setVotes] = useState(0);
  const [voteType, setVoteType] = useState<"upvote" | "downvote" | null>(null);

  const upvote = () => {
    // change the logic in order to send update on the comment server side
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
        sx={{ justifyContent: "flex-start", width: "100%" }}
      >
        <Tab label="Reviews" />
        <Tab label="Photos" />
      </Tabs>

      {value === 0 && (
        <>
          {place.comments.length === 0 ? (
            <h2 style={{ textAlign: "center" }}>No reviews yet</h2>
          ) : (
            place.comments.map((comment: any) => {
              return (
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
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
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "end",
                      }}
                    >
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
                        <p style={{ flex: "1", fontWeight: "bold" }}>
                          {comment.score}
                        </p>
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
                          <MenuItem onClick={handleClose}>
                            View Profile
                          </MenuItem>
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
                        src={`/systemImage/${comment.avatarImage}`}
                        alt="profile"
                        style={{
                          width: "70px",
                          height: "70px",
                          borderRadius: "100%",
                          objectFit: "cover",
                          marginRight: "10px",
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {comment.username}
                        </Typography>
                        <Typography variant="caption">
                          <Box component="span" sx={{ fontWeight: "bold" }}>
                            {comment.contribution}
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
                          <Typography variant="subtitle1">
                            {comment.rank}{" "}
                          </Typography>
                          <img
                            src={`/systemImage/${comment.rankImage}`}
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
                        {comment.title}
                      </Typography>
                      <Box display="flex" alignItems="center" mt={1} mb={2}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            marginRight: "10px",
                          }}
                          variant="body1"
                        >
                          Written{" "}
                          {comment.writtenDate
                            ? format(
                                parseISO(comment.writtenDate),
                                "MMMM dd, yyyy"
                              )
                            : "Date not available"}
                        </Typography>
                        <CircleIcon
                          sx={{ marginLeft: "10px", marginRight: "10px" }}
                        />
                        <Typography variant="body1">
                          {" "}
                          {comment.withWhom}
                        </Typography>
                      </Box>
                      <Typography variant="body2">
                        {comment.commentBody}
                      </Typography>
                      <Box mt={2}>
                        <Typography variant="body1">
                          <strong>Date visited:</strong>
                          {comment.dateVisit
                            ? format(
                                parseISO(comment.dateVisit),
                                "MMMM dd, yyyy"
                              )
                            : "Date not available"}
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
                              facilities
                            </Typography>
                            <Rating
                              name="location-rating"
                              value={comment.facilities}
                              readOnly
                            />
                          </Box>
                          <Box>
                            <Typography variant="body2" component="p">
                              safety
                            </Typography>
                            <Rating
                              name="food-quality-rating"
                              value={comment.safety}
                              readOnly
                            />
                          </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                          <Box>
                            <Typography variant="body2" component="p">
                              Location
                            </Typography>
                            <Rating
                              name="service-rating"
                              value={comment.location}
                              readOnly
                            />
                          </Box>
                          <Box>
                            <Typography variant="body2" component="p">
                              Convenience
                            </Typography>
                            <Rating
                              name="menu-variety-rating"
                              value={comment.convenience}
                              readOnly
                            />
                          </Box>
                          <Box>
                            <Typography variant="body2" component="p">
                              staff
                            </Typography>
                            <Rating
                              name="ambience-rating"
                              value={comment.staff}
                              readOnly
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              );
            }, [])
          )}
        </>
      )}

      {value === 1 &&
        (place.photos.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>No photos yet</h2>
        ) : (
          place.photos.map((photo: Photo) => {
            return (
              <>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Top Photos
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
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "end",
                    }}
                  >
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
                      <p style={{ flex: "1", fontWeight: "bold" }}>
                        {photo.score}
                      </p>
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
                      <Typography variant="subtitle1">
                        {photo.userName}
                      </Typography>
                      <Typography variant="caption">
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                          {photo.contributionNumber}
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
                        <Typography variant="subtitle1">
                          {photo.rank}{" "}
                        </Typography>
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
                    <img
                      src={photo.image}
                      alt="image"
                      style={{ width: "100%" }}
                    />
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Date:{" "}
                      {photo.dateOfTaken
                        ? photo.dateOfTaken.toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Date not available"}
                    </Typography>
                  </Box>
                </CardContent>
              </>
            );
          })
        ))}
    </div>
  );
};

export default TopReviews;
