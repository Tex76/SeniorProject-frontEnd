import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Trips from "./Pages/Trips";
import PickTrip from "./Pages/PickTrip";
import UserSystem from "./Pages/UserSystem";
import MyTrip from "./Pages/MyTrip";
import GenerateTrip from "./Pages/GenerateTrip";
import ReviewPlace from "./Pages/ReviewPlace";
import Places from "./Pages/places";
import RewardSystem from "./Pages/RewardSystem";
import Reviews from "./Pages/Reviews";
import CreateTrip from "./Pages/CreateTrip";
import GenerateResult from "./Pages/GenerateResult";
import PointsStore from "./Pages/PointsStore";
import SessionContext from "./context";
import axios from "axios";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getSession", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          setSession(response.data); // Assuming response.data is the session information
        }
      })
      .catch((error) => {
        console.error("Failed to fetch session:", error);
      });
  }, []);

  return (
    <SessionContext.Provider value={session}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/picktrip" element={<PickTrip />} />
          <Route path="/usersystem" element={<UserSystem />} />
          <Route path="/mytrip" element={<MyTrip />} />
          <Route path="/generatetrip" element={<GenerateTrip />} />
          <Route path="/review/:id" element={<ReviewPlace />} />
          <Route path="/places/:id" element={<Places />} />
          <Route path="/rewardsystem" element={<RewardSystem />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviewplace" element={<ReviewPlace />} />
          <Route path="/createtrip" element={<CreateTrip />} />
          <Route path="/generateresult" element={<GenerateResult />} />
          <Route path="/pointsstore" element={<PointsStore />} />
        </Routes>
      </Router>
    </SessionContext.Provider>
  );
}

export default App;
