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
import profile from "../../images/Profile/profile.png";
import placeImage from "../../images/Profile/placeImage.png";
import postedimage from "../../images/Profile/postedimage.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MyPosts = () => {
    const [value, setValue] = useState(0);
  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div >
      <Card >
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
                <Typography variant="subtitle1">Jasem Saleh</Typography>
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
                “We are regular customers at this place, each time we want a
                good steak, this is where we go. The service is very nice, the
                meet is fresh and cotoletta Milanes...”
              </Typography>
            </Box>
            <img
              src={postedimage}
              alt="place"
              style={{ width: "50%", margin: "10px" }}
            />
            <Typography variant="body2">Date visited: March 2023</Typography>
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
                style={{ width: "50%", borderRadius: "10px", margin: "10px" }}
              />
              <Box>
                <Typography variant="h6">Bushido by Buddha-Bar</Typography>
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
                <Typography variant="subtitle1">Jasem Saleh</Typography>
                <Typography variant="caption">Mar 5, 2023</Typography>
              </Box>
            </Box>
            <img src={postedimage} alt="place" style={{ width: "100%" }} />
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default MyPosts;
