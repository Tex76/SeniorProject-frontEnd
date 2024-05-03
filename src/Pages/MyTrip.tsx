import * as React from "react";
import { useState } from "react";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";

import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  CardMedia,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import PlaceIcon from "@mui/icons-material/Place";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Tripimage from "../images/MyTrip/Tripimage.png";
import Background from "../images/MyTrip/Background.png";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useNavigate } from "react-router-dom";

// Inside your component

const MyTrip = () => {
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    // Add your sorting logic here
  };

  return (
    <div>
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

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          width: "100%",

          margin: "auto",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: 1280,
            marginTop: "120px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            My Trip
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
          >
            <Button
              onClick={() => {
                navigate("/CreateTrip");
              }}
              variant="contained"
              style={{
                backgroundColor: "sandybrown",
                padding: "40px",
                borderRadius: "20px",
              }}
              sx={{ flex: 1 }}
            >
              <AddIcon /> Create you own trip
            </Button>
            <Button
              onClick={() => {
                navigate("/GenerateTrip");
              }}
              variant="contained"
              style={{
                backgroundColor: "sandybrown",
                padding: "40px",
                borderRadius: "20px",
              }}
              sx={{ marginLeft: "30px", flex: 1 }}
            >
              <SavedSearchIcon />
              Generate your own trip
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",

              marginTop: "120px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">Sort By:</Typography>
              <Select
                value={sort}
                onChange={handleSortChange}
                sx={{ width: "20%", marginLeft: "10px" }}
                variant="standard"
              >
                <MenuItem value={"name"}>Name</MenuItem>
                <MenuItem value={"date"}>Created date</MenuItem>
                {/* Add more sorting options here */}
              </Select>
            </Box>

            <Card sx={{ marginTop: "50px", borderRadius: "20px" }}>
              <Box
                display="flex"
                sx={{ backgroundColor: "powderblue", position: "relative" }}
              >
                <IconButton
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <MoreHorizIcon />
                </IconButton>
                <CardMedia
                  component="img"
                  image={Tripimage}
                  alt="Trip image"
                  style={{ width: "40%" }}
                />
                <Box p={2}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Trip Name
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: "10px", marginTop: "10px" }}
                    >
                      Small description about the Trip places and Days
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <PlaceIcon /> Muharraq, Northern
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <DateRangeIcon /> 5 Days
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: "darkslategray",
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      Start Trip
                    </Button>
                  </CardContent>
                </Box>
              </Box>
            </Card>

            <Card sx={{ marginTop: "50px", borderRadius: "20px" }}>
              <Box
                display="flex"
                sx={{ backgroundColor: "powderblue", position: "relative" }}
              >
                <IconButton
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <MoreHorizIcon />
                </IconButton>
                <CardMedia
                  component="img"
                  image={Tripimage}
                  alt="Trip image"
                  style={{ width: "40%" }}
                />
                <Box p={2}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Trip Name
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginBottom: "10px", marginTop: "10px" }}
                    >
                      Small description about the Trip places and Days
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <PlaceIcon /> Muharraq, Northern
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <DateRangeIcon /> 5 Days
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        backgroundColor: "darkslategray",
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        borderRadius: "20px",
                      }}
                    >
                      Start Trip
                    </Button>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1280,
            margin: "auto",
            marginTop: "200px",
          }}
        ></Box>
      </Box>
      <Footer />
    </div>
  );
};

export default MyTrip;
