import { Box } from "@mui/material";
import backgroundImage from "./images/Home/Towerbg.png";
import NavBar from "./Pages/SharedComponents/NavBar";
import Welcome from "./Pages/HomeComponents/Welcome";
import PopularPlacesCards from "./Pages/HomeComponents/PopularPlacesCards";
import RoadMap from "./Pages/HomeComponents/Roadmap";
import Footer from "./Pages/SharedComponents/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  // const [session, setSession] = useState(null);

  return (
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
        <Box sx={{ maxWidth: 1280, margin: "auto" }}>
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

      {matches && <RoadMap />}
      <Footer />
    </Box>
  );
}

export default App;
