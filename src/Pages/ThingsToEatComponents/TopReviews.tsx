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
import Adventure from "../../images/RewardSystem/Adventure.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Comment, Photo, Place } from "../../../../api/SchemaDb";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

const TopReviews = ({ place }: { place: Place }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [, setVotes] = useState(0);
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
        sx={{ justifyContent: "flex-start", width: "100%" }}
      >
        <Tab label="Reviews" />
        <Tab label="Photos" />
      </Tabs>

      {value === 0 && (
        <>
          {place.comments.length === 0 ||
          Object.keys(place.comments[0]).length === 0 ? (
            <h2 style={{ textAlign: "center" }}>No reviews yet</h2>
          ) : (
            place.comments.map((comment: any) => {
              return (
                <Box
                  sx={{
                    overflow: "hidden",
                    width: "90%",
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
                        height: "40px",
                        justifyContent: "end",
                      }}
                    >
                      <Box
                        sx={{
                          margin: "10px",
                          display: "flex",
                          backgroundColor: "white",
                          width: "100px",
                          height: "35px",
                          borderRadius: "50px",
                          border: "1px solid black",
                        }}
                      >
                        <IconButton onClick={upvote} sx={{ flex: "1" }}>
                          <ArrowUpwardIcon />
                        </IconButton>
                        <Typography
                          sx={{
                            flex: "1",
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "20px",
                            mt: "2px",
                          }}
                        >
                          {comment.score}
                        </Typography>
                        <IconButton onClick={downvote} sx={{ flex: "1" }}>
                          <ArrowDownwardIcon />
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton onClick={handleClick}>
                          <MoreHorizIcon
                            sx={{
                              fontSize: "30px",
                              color: "black",
                              padding: "10px",
                            }}
                          />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Report</MenuItem>
                          <MenuItem
                            onClick={() => {
                              navigate(`/usersystem/${comment.userID}`);
                            }}
                          >
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
                        src={`${comment.avatarImage}`}
                        alt="profile"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "100%",
                          objectFit: "cover",
                          marginRight: "10px",
                          objectPosition: "center",
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
                      <Rating name="read-only" value={comment.rate} readOnly />
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
                              <Rating
                                name="location-rating"
                                value={comment.service}
                                readOnly
                              />
                            </Box>
                            <Box>
                              <Typography variant="body2" component="p">
                                Food Quality
                              </Typography>
                              <Rating
                                name="food-quality-rating"
                                value={comment.foodQuality}
                                readOnly
                              />
                            </Box>
                          </Box>
                          <Box display="flex" justifyContent="space-between">
                            <Box>
                              <Typography variant="body2" component="p">
                                value for money
                              </Typography>
                              <Rating
                                name="service-rating"
                                value={comment.valueForMoney}
                                readOnly
                              />
                            </Box>
                            <Box>
                              <Typography variant="body2" component="p">
                                menu variety
                              </Typography>
                              <Rating
                                name="menu-variety-rating"
                                value={comment.menuVariety}
                                readOnly
                              />
                            </Box>
                            <Box>
                              <Typography variant="body2" component="p">
                                Ambiance
                              </Typography>
                              <Rating
                                name="ambience-rating"
                                value={comment.ambiance}
                                readOnly
                              />
                            </Box>
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
