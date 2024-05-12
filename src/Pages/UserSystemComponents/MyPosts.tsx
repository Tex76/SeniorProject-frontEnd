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

import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MyPosts = ({ user }: { user: any }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Card>
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
                flexDirection: "column", // Change this line
                marginBottom: "10px",
              }}
            >
              {user.reviewComments.map((comment: any) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                    borderTop: "1px solid #000",
                  }}
                  key={comment._id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "10px",
                      }}
                    >
                      <img
                        src={user.avatarImage}
                        alt="profile"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Box>
                      <Typography variant="body1">@{user.userName}</Typography>
                      <Typography variant="body1">
                        {new Date(user.joinDate).toISOString().split("T")[0]}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start", // Change this line
                      marginBottom: "10px",
                    }}
                  >
                    <Rating name="read-only" value={comment.rate} readOnly />
                  </Box>
                  <Box>
                    <Typography variant="body2">
                      {comment.commentBody}
                    </Typography>
                  </Box>
                  <Typography variant="body2">
                    Date visited:{" "}
                    {new Date(comment.dateVisit).toISOString().split("T")[0]}
                  </Typography>

                  <Link
                    to={`/places/${comment.placeID._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    {/* Use Link to wrap the Card */}
                    <Card
                      sx={{
                        width: "80%", // Adjust the width of the card
                        height: "80%", // Adjust the height of the card
                        margin: "10px",
                        backgroundColor: "whitesmoke",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {/* Ensure imagePlace exists and has at least one image */}
                      {comment.placeID.imagePlace &&
                        comment.placeID.imagePlace.length > 0 && (
                          <img
                            src={`/systemImage/${comment.placeID.imagePlace[0]}`}
                            alt={comment.placeID.name}
                            style={{
                              width: "40%", // Adjust the width of the image
                              borderRadius: "10px",
                              margin: "10px",
                            }}
                          />
                        )}
                      <Box>
                        <Typography variant="h6" style={{ fontSize: "0.8rem" }}>
                          {" "}
                          {comment.placeID.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {" "}
                          {comment.placeID.region}
                        </Typography>
                        <Rating
                          name="place-rating"
                          value={comment.placeID.rate}
                          readOnly
                        />
                        <Typography
                          variant="subtitle1"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {" "}
                          {comment.placeID.description}
                        </Typography>
                      </Box>
                    </Card>
                  </Link>
                </Box>
              ))}
            </Box>
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
                flexDirection: "column", // Change this line
                marginBottom: "10px",
              }}
            ></Box>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default MyPosts;
