import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css"; // 300 is "Light"
import "@fontsource/roboto/400.css"; // 400 is "Regular"
import "@fontsource/roboto/500.css"; // 500 is "Medium"
import "@fontsource/roboto/700.css"; // 700 is "Bold"
import vectorImage from "../../images/Home/Vector1.png"; // Import the Vector image
import vectorImage1 from "../../images/Home/Vector2.png"; // Import the Vector1 image
import vectorImage2 from "../../images/Home/Vector3.png"; // Import the Vector2 image
import backgroundImage from "../../images/Home/Back.png"; // Import the background image

const RoadMap = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Set background size to cover
        marginTop: "50px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div style={{ marginTop: "0px" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <img
            src={vectorImage}
            alt="Vector"
            style={{ maxWidth: "100%", height: "auto", marginRight: "200px" }}
          />
          <div>
            <Typography
              variant="h5"
              gutterBottom
              style={{ color: "black", fontWeight: "bold", marginTop: "200px" }}
            >
              Discover different places around Bahrain
            </Typography>
            <Typography>
              Discover the diverse wonders of Bahrain as you journey from the
              bustling streets of Manama to the tranquil shores of Amwaj
              Islands. Immerse yourself in the rich history of ancient forts,
              wander through traditional souks, and unwind amidst the natural
              beauty of Bahrain's coastal landscapes. With its myriad of
              experiences, Bahrain offers something for every traveler,
              promising unforgettable adventures at every turn.
            </Typography>
          </div>
        </Box>
      </div>

      <div>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <div style={{ padding: "200px" }}>
            <Typography
              variant="h5"
              gutterBottom
              style={{ color: "black", fontWeight: "bold" }}
            >
              Create trip & gain new experiences
            </Typography>
            <Typography>
              Craft your journey, gain new experiences. From vibrant streets to
              serene shores, delve into Bahrain's rich history, explore
              traditional souks, and savor coastal landscapes. With endless
              adventures, Bahrain ensures unforgettable memories for every
              traveler.
            </Typography>
          </div>
          <img
            src={vectorImage1}
            alt="Vector (1)"
            style={{ maxWidth: "100%", height: "auto", marginLeft: "-100px" }}
          />
        </Box>
      </div>

      <div style={{ marginBottom: "100px", paddingBottom: "260px" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <img
            src={vectorImage2}
            alt="Vector (2)"
            style={{ maxWidth: "100%", height: "auto", marginRight: "200px" }}
          />
          <div style={{ marginBottom: "100px", paddingBottom: "150px" }}>
            <Typography
              variant="h5"
              gutterBottom
              style={{ color: "black", fontWeight: "bold" }}
            >
              Gain points & rewards when you travel
            </Typography>
            <Typography>
              Earn valuable points and rewards as you embark on your travel
              adventures. With every trip, unlock exclusive perks and discounts,
              enhancing your journey with unforgettable experiences. Enroll in
              our rewards program today and start collecting points to make your
              travels even more rewarding!
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default RoadMap;
