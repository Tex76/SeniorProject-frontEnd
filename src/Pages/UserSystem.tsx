import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import Users from "./UserSystemComponents/Users";
import About from "./UserSystemComponents/About";
import Cards from "./UserSystemComponents/Cards";
import MyPosts from "./UserSystemComponents/MyPosts";
import NavBar from "./SharedComponents/NavBar";
import Footer from "./SharedComponents/Footer";
import profileBack from "../images/Profile/profileBack.png";
import background from "../images/Profile/background.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { User } from "../../../api/SchemaDb";
import CircularProgress from '@mui/material/CircularProgress';

const UserSystem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { id } = useParams();
  // Initialize 'place' to null and define it to accept 'Place' or 'null'
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/UserSystem/${id}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlaces();
  }, [id]);

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Takes full viewport height
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  else {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1280,
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
        sx={{ mb: 15, maxWidth: 1280, margin: "auto" }}
      >
        <NavBar textColor="rgb(255,255,255)" />
      </Box>

      <Box>
        <Box>
          <img
            src={profileBack}
            alt="profile Back"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          <Box sx={{ flex: 1 }}>
            <Users user={user} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Cards user={user}/>
          </Box>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
        >
          <Box sx={{ flex: 1 }}>
          <About user={user}/>;
          </Box>
          <Box sx={{ flex: 2 }}>
            <MyPosts user={user} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", margin: "auto", marginTop: "200px" }}>
        <Footer />
      </Box>
    </Box>
  );
};
};
export default UserSystem;
