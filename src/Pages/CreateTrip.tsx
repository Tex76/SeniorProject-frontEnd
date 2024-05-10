import { Box } from "@mui/material";
import Footer from "./SharedComponents/Footer";
import NavBar from "./SharedComponents/NavBar";
import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";
import background from "../images/CreateTrip/HeroImage.jpg";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CreateTripPopUpContent from "./CreateTripComponents/CreateTripPopUpContent";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddToDaysLikedElementForm from "./CreateTripComponents/AddToDaysLikedElementForm";

import { useContext, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import UpdateTripInfo from "./CreateTripComponents/UpdateCreateInfo";
import { UserContext } from "../UserContext";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import axios from "axios";
// this component must contain the hero section of create trip page
import { CircularProgress } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StepperCreateTrip from "./CreateTripComponents/StepperCreateTrip";
import CreateTripCard from "./CreateTripComponents/CreateTripCard";
import PlacesSearchLikedAddFunction from "./CreateTripComponents/PlacesSearchLikedAddFunction";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

axios.defaults.baseURL = "http://localhost:4000";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface AccordionProps {
  children?: React.ReactNode; // data inside it
  index: number; // id or index of accordion
  value: string; // name of the accordion
}

function formatTripLikedPlacesBaseOnCategory(
  trip: any,
  setThingsToDo: any,
  setThingsToEat: any,
  setPlacesToStay: any
) {
  trip.likedPlaces.forEach((place: any) => {
    if (place.category === "things to do") {
      setThingsToDo((prev: any) => [...prev, place]);
    } else if (place.category === "things to eat") {
      setThingsToEat((prev: any) => [...prev, place]);
    } else if (place.category === "places to stay") {
      setPlacesToStay((prev: any) => [...prev, place]);
    }
  });
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ width: "100%" }}>{children}</Box>}
    </div>
  );
}

// this accordion will return the accordion skeleton
function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState(true);
  const { children, index, value } = props;

  return (
    <Box id={index.toString()} sx={{ width: "100%" }}>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            fontFamily: "Roboto",
          }}
        >
          {value}
        </Typography>

        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => {}}
          sx={{ color: "black" }}
        >
          {/* if expanded true show upper arrow if not show lower arrow */}
          {expanded ? (
            <KeyboardArrowUpIcon onClick={() => setExpanded(!expanded)} />
          ) : (
            <KeyboardArrowDownIcon onClick={() => setExpanded(!expanded)} />
          )}
        </IconButton>
      </Box>
      {expanded && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* if we expand the items it will show the childrens */}
          {children}
        </Box>
      )}
    </Box>
  );
}
export default function CreateTrip() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [trip, setTrip] = useState({
    tripName: "",
    region: [],
    description: "",
    likedPlaces: [],
    days: [],
  }); // [trip, setTrips]

  const [isLoading, setIsLoading] = useState(true);
  const [blackBox, setBlackBox] = useState(false);
  const [blackBox2, setBlackBox2] = useState(false);
  const [blackBox3, setBlackBox3] = useState(false);
  const [value, setValue] = useState(0);
  const [thingsToDo, setThingsToDo] = useState<any>([]);
  const [thingsToEat, setThingsToEat] = useState([]);
  const [placesToStay, setPlacesToStay] = useState([]);
  const [likedPlaces, setLikedPlaces] = useState([]); // [likedPlaces, setLikedPlaces
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/trips/${id}`)
      .then((res) => {
        console.log("Trip data fetched:", res.data.trip);

        // Check user permission
        // if (!user || res.data.trip.userID.toString().trim() !== user.id) {
        //   alert("You do not have permission to view this page");
        //   window.location.replace("/");
        //   return; // Stop further execution in this block
        // }

        // Set trip data and categorize liked places
        setTrip(res.data.trip);
        formatTripLikedPlacesBaseOnCategory(
          res.data.trip,
          setThingsToDo,
          setThingsToEat,
          setPlacesToStay
        );
        setDays(res.data.trip.days);
        setLikedPlaces(res.data.trip.likedPlaces);
      })
      .catch((error) => {
        console.error("Error fetching the trip data:", error);
      })
      .finally(() => {
        setIsLoading(false); // Ensure loading is set to false regardless of outcome
      });
  }, [id, user]); // Depend on `id` and `user` to ensure re-run when these values change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter places based on the search query, exclude liked places, and match location from props
  const filteredData = likedPlaces.filter((place: any) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [Days, setDays] = useState([[]]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (isLoading) {
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

  if (!trip) {
    return <div>Could not find trip</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* popup */}
      <Box
        onClick={function (e) {
          setBlackBox(false);
          setBlackBox2(false);

          setBlackBox3(false);
        }}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,

          display: blackBox || blackBox2 || blackBox3 ? "flex" : "none",

          position: "fixed",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1000,
        }}
      ></Box>
      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "90%", sm: "85%", xs: "85%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* example of location must be same as location from CreateTripPopUp  */}
        {/* this will be executed when more button is ***clicked*** */}
        <CreateTripPopUpContent setBlackBox={setBlackBox} trip={trip} />
      </Box>
      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "85%", sm: "85%", xs: "85%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox2 ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* example of location must be same as location from CreateTripPopUp */}
        <UpdateTripInfo trip={trip} passFunction={setBlackBox2} />
      </Box>

      <Box
        sx={{
          width: { md: "40%", sm: "60%", xs: "80%" },
          height: { md: "90%", sm: "85%", xs: "85gi%" },

          backgroundColor: "white",
          zIndex: 1000,
          opacity: 1,
          borderRadius: "8px",
          display: blackBox3 ? "flex" : "none",
          position: "fixed", // Changed from 'absolute' to 'fixed'
          top: "50%",
          flexDirection: "column",
          left: "50%",
          padding: "15px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer", // Optional: Changes cursor on hover to indicate it's clickable
        }}
      >
        {/* this will show the form of choose from liked places */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* example of location must be same as location from CreateTripPopUp */}
        {/* <AddToDaysLikedElementForm trip={trip} passFunction={setBlackBox3} /> */}
        <Box
          sx={{
            width: "90%",
            height: "100%",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "26px",
              lineHeight: "150.6%",
              color: "#000000",
            }}
          >
            Choose liked place
          </Typography>
          <Typography
            sx={{
              marginTop: "5px",
              fontFamily: "Roboto",
              fontWeight: "regular",
              fontSize: "13px",
              color: "#000000",
            }}
          >
            Select place that you want to add to your day, or search among
            different places that you have liked!
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: { borderRadius: "40px" },
              }}
              placeholder="Search" // Using placeholder instead of label
            />

            <Box
              sx={{
                borderTop: "1px solid #E4E4E4",
                marginTop: "20px",
                width: "100%",
                height: "100%",
                overflowY: "auto",
                paddingY: "10px",
              }}
            >
              <Box
                sx={{
                  borderTop: "1px solid #E4E4E4",
                  marginTop: "20px",
                  width: "100%",
                  height: "100%",
                  overflowY: "auto",
                  paddingY: "10px",
                }}
              >
                {filteredData.length > 0 ? (
                  filteredData.map((place: any) => (
                    <Box
                      sx={{ width: "100%" }}
                      onClick={() => {}}
                      // here must when we click we do something like added place into the main Array
                    >
                      <PlacesSearchLikedAddFunction places={place} />
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontFamily: "Roboto",
                      fontWeight: "regular",
                      fontSize: "16px",
                      textAlign: "center",
                      color: "grey",
                    }}
                  >
                    No places found
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              borderTop: "1px solid #E4E4E4",
              paddingY: "15px",
            }}
          >
            <Button
              onClick={() => {
                setBlackBox3(false);
              }}
              sx={{
                borderRadius: "25px",
                color: "#fff",
                backgroundColor: "#205E60",
                "&:hover": { backgroundColor: "#16473C" },
                padding: "10px 20px",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", maxWidth: 1280 }}>
        <NavBar textColor="rgb(0,0,0)" />
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          maxWidth: 1280,

          paddingY: "20px",
          paddingX: { md: "0", xs: "8px" },
        }}
      >
        {/* Trip information */}
        <Box
          sx={{
            display: "flex",
            padding: { md: "0", xs: "10px" },
            flexDirection: "column",
            height: "100%",

            marginRight: { md: "5%", xs: "0" },
            width: { xs: "100%", lg: "49%" },
          }}
        >
          {/* image box */}
          <Box
            sx={{
              display: "flex",
              padding: "15px",
              borderRadius: "15px",
              justifyContent: "space-between",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${background})`, // Combined linear gradient and background image
              backgroundSize: "cover",
              flexDirection: "column",
              width: { md: "100%", xs: "95%" },
              height: { md: "305px", xs: "300px" },
            }}
          >
            {/* Button icon box */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton
                onClick={() => setBlackBox2(true)}
                sx={{
                  backgroundColor: "white",
                  "&:hover": { backgroundColor: "white" },
                }}
              >
                <SettingsIcon sx={{ color: "black" }} fontSize="large" />
              </IconButton>
            </Box>

            {/* title  box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
              }}
            >
              <Typography
                onClick={() => setBlackBox2(true)}
                sx={{
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                variant="h3"
              >
                {trip.tripName ? trip.tripName : "Trip Name"}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <AddLocationIcon sx={{ color: "black" }} fontSize="large" />
                <Typography
                  onClick={() => setBlackBox2(true)}
                  sx={{
                    color: "white",
                    fontFamily: "Roboto",
                    mt: 0.5,
                    cursor: "pointer",
                  }}
                  variant="body1"
                >
                  {trip.region && trip.region.length > 0
                    ? trip.region.join(", ")
                    : "region"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              onClick={() => setBlackBox2(true)}
              sx={{
                fontFamily: "Roboto",
                fontWeight: "small",
                color: "#6D7D8B",
                cursor: "pointer",
              }}
            >
              {trip.description ? trip.description : "Description"}
            </Typography>

            {/* content must be getting form other componenet */}
            {/* this is the old heroSection*/}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 3,
                height: "100%",
                flexDirection: "column",
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Saves" />
                  <Tab label="Days" />
                </Tabs>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  mt: 1,
                }}
              >
                {/* this tab view for saves */}
                <CustomTabPanel value={value} index={0}>
                  {/*
        the following is pseudo structure of what will be create trip page
    {
        "things to do": [array of things to do objects],
        "things to eat": [array of things to eat],
        "places to stay": [array of places to stay],   
    }        
        */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>
                      {trip
                        ? trip.likedPlaces.length
                        : "You don't have liked places yet"}
                    </Typography>
                    <Button
                      onClick={() => {
                        setBlackBox(true);
                      }}
                      sx={{
                        backgroundColor: "#FFD334",
                        fontFamily: "Roboto",
                        textTransform: "capitalize",
                        color: "white",
                        fontWeight: "medium",
                        fontSize: "15px",
                        borderRadius: "35px",
                        padding: "10px 25px",
                        lineHeight: "140%",
                        ":hover": { backgroundColor: "#FFC700" },
                      }}
                    >
                      More
                    </Button>
                  </Box>
                  <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                    <Accordion value="Things to do" index={0}>
                      {thingsToDo.map((place: any, index: any) => {
                        return (
                          <CreateTripCard
                            key={index}
                            catogry="things to do"
                            image={`/systemImage/${place.placeImage[0]}`}
                            placeName={place.name}
                            rate={place.rate}
                            location={place.location}
                            type={place.type}
                            description={place.description}
                            price={place.price}
                            duration={place.duration}
                            googleLocation={place.googleLocation}
                          />
                        );
                      })}
                    </Accordion>
                  </Box>
                  <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                    <Accordion value="Things to eat" index={1}>
                      {thingsToEat.map((place: any, index: any) => {
                        return (
                          <CreateTripCard
                            key={index}
                            catogry="things to eat"
                            image={`/systemImage/${place.placeImage[0]}`}
                            placeName={place.name}
                            rate={place.rate}
                            location={place.location}
                            type={place.type}
                            description={place.description}
                            price={place.price}
                            duration={place.duration}
                            googleLocation={place.googleLocation}
                          />
                        );
                      })}
                    </Accordion>
                  </Box>{" "}
                  <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                    <Accordion value="Places to stay" index={2}>
                      {placesToStay.map((place: any, index: any) => {
                        return (
                          <CreateTripCard
                            key={index}
                            catogry="places to stay"
                            image={`/systemImage/${place.placeImage[0]}`}
                            placeName={place.name}
                            rate={place.rate}
                            location={place.location}
                            type={place.type}
                            description={place.description}
                            price={place.price}
                            duration={place.duration}
                            googleLocation={place.googleLocation}
                          />
                        );
                      })}
                    </Accordion>
                  </Box>
                </CustomTabPanel>

                {/* this tab view for days */}
                <CustomTabPanel value={value} index={1}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #E4E4E4",
                      paddingY: "10px",
                    }}
                  >
                    {Days
                      ? Days.map((dayContent: any, DayIndex: any) => {
                          return (
                            <Box
                              sx={{
                                backgroundColor: "#404040",
                                width: "10%",
                                paddingY: "4px",
                                paddingX: "7px",
                                borderRadius: "15px",
                                borderBottom: "1px solid #E4E4E4",
                              }}
                            >
                              <Typography
                                sx={{
                                  textAlign: "center",
                                  color: "white",
                                  fontFamily: "Roboto",
                                  fontSize: "11px",
                                  fontWeight: "regular",
                                  lineHeight: "22px",
                                }}
                              >
                                Day {DayIndex + 1}
                              </Typography>
                            </Box>
                          );
                        })
                      : "No days set yet"}
                  </Box>

                  {Days
                    ? Days.map((dayContent: any, DayIndex: any) => {
                        return (
                          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
                            <Accordion
                              value={`Day ${DayIndex + 1}`}
                              index={DayIndex}
                            >
                              {/* this is the stepper for the day */}
                              <StepperCreateTrip
                                key={DayIndex}
                                Places={dayContent}
                                setBlackBox3={setBlackBox3}
                              />
                            </Accordion>
                          </Box>
                        );
                      })
                    : "No days set yet"}
                </CustomTabPanel>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* map box */}
        <Box
          sx={{
            width: "48%",
            height: "100%", // Ensure this height fits within your layout
            display: { xs: "none", md: "flex" },
          }}
        >
          <LoadScriptNext googleMapsApiKey="AIzaSyBwl3lX-lX7dO4bXGfLzTj-LwtcdtnV-Tc">
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "85%",
                borderRadius: "15px",
              }}
              center={{ lat: 26.0667, lng: 50.5577 }}
              zoom={8}
            />
          </LoadScriptNext>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
