import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import backgroundImage from "./images/Home/Towerbg.png";
import NavBar from "./Pages/SharedComponents/NavBar";
import Welcome from "./Pages/HomeComponents/Welcome";
import PopularPlacesCards from "./Pages/HomeComponents/PopularPlacesCards";
import RoadMap from "./Pages/HomeComponents/Roadmap";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Trips from "./Pages/Trips";
import PickTrip from "./Pages/PickTrip";
import UserSystem from "./Pages/UserSystem";
import MyTrip from "./Pages/MyTrip";
import ThingsToDo from "./Pages/ThingsToDo";
import ThingsToEat from "./Pages/ThingsToEat";
import PlacesToStay from "./Pages/PlacesToStay";
import RewardSystem from "./Pages/RewardSystem";
import GenerateTrip from "./Pages/GenerateTrip";
import Reviews from "./Pages/Reviews";
import ReviewPlace from "./Pages/ReviewPlace";
import Footer from "./Pages/SharedComponents/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Trips" element={<Trips />} />
        <Route path="/PickTrip" element={<PickTrip />} />
        <Route path="/UserSystem" element={<UserSystem />} />
        <Route path="/MyTrip" element={<MyTrip />} />
        <Route path="/GenerateTrip" element={<GenerateTrip />} />
        <Route path="/ThingsToDo" element={<ThingsToDo />} />
        <Route path="/ThingsToEat" element={<ThingsToEat />} />
        <Route path="/PlacesToStay" element={<PlacesToStay />} />
        <Route path="/RewardSystem" element={<RewardSystem />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/ReviewPlace" element={<ReviewPlace />} />
        <Route
          path="/"
          element={
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  paddingBottom: "5%",
                }}
              >
                <Box sx={{ mb: 20, maxWidth: 1280, margin: "auto" }}>
                  <NavBar textColor="rgb(255,255,255)" />
                </Box>
                <Box
                  display={"flex"}
                  sx={{ mb: 15, maxWidth: 1280, margin: "auto" }}
                >
                  <Welcome />
                </Box>
              </Box>
              <Box
                style={{
                  backgroundColor: "rgb(255, 246, 228)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box sx={{ height: "32px" }} />
                <Box sx={{ width: "100%", maxWidth: 1280, margin: "auto" }}>
                  <PopularPlacesCards />
                </Box>
              </Box>

              <RoadMap />
              <Footer />
            </Box>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
