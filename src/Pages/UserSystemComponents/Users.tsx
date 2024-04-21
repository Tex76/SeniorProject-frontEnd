import React, { useState, ChangeEvent } from "react";
import { Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import profile from "../../images/Profile/profile.png";
import person from "../../images/Profile/person.png";

import { CalendarToday as CalendarTodayIcon } from "@mui/icons-material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Users = () => {
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
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1280,
          height: "100%",
          maxHeight: "720px",
        }}
      >
        <Box sx={{ marginLeft: "100px" }}>
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
            <label htmlFor="raised-button-file" style={{ margin: "100px" }}>
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
                    margin: "50px",
                  }}
                />
              </Button>
            </label>

            <DialogContent>
              <form style={{ width: "100%" }}>
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
                <div style={{ display: "flex", justifyContent: "center" }}>
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
            <CalendarTodayIcon sx={{ fontSize: 16, marginRight: "5px" }} />{" "}
            Joined in Dec 2023
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Users;
