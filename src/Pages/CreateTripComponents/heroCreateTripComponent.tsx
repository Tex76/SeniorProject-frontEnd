// this component must contain the hero section of create trip page
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import CreateTripCard from "./CreateTripCard";
import Rest from "../images/CreateTrip/Rest.jpg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// interfaces for the functions
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
// this function will return the tab skeleton for create trip
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
  const [expanded, setExpanded] = useState(false);
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
            p: 3,
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
// end of function accordion

export default function HeroCreateTripComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        mt: 3,
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
          mt: 2,
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
          <Typography>5 items</Typography>
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <Accordion value="Things to do" index={0}>
              <CreateTripCard
                catogry="things to eat"
                image={Rest}
                placeName="Restaurant Sufra"
                rate={5}
                location="Capital"
                type="Restuant"
                description="Welcome to Restaurant Sufra, where every dish tells a story of tradition and taste. Inspired by the rich culinary heritage of the Mediterranean, Sufra invites you on a journey of flavor exploration. From sizzling kebabs to aromatic tagines, our menu is a celebration of authentic flavors and fresh ingredients meticulously crafted to delight your senses. Whether you're seeking a cozy dinner with loved ones or a vibrant gathering with friends, let Restaurant Sufra be your culinary sanctuary, where every meal is a cherished memory in the making."
                price="250"
                cuisine="Indian"
              />
            </Accordion>
          </Box>
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <Accordion value="Things to eat" index={1}></Accordion>
          </Box>{" "}
          <Box sx={{ width: "100%", mt: 2, mb: 2 }}>
            <Accordion value="Places to stay" index={2}></Accordion>
          </Box>
        </CustomTabPanel>

        {/* this tab view for days */}
        <CustomTabPanel value={value} index={1}>
          Days
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
