import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Rating from "@mui/material/Rating";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// this might be modify when we deploy the actual database
export interface Places {
  id: string;
  catogry: "things to eat" | "places to stay" | "things to do";
  image: string;
  placeName: string;
  rate: number;
  location: string;
  type: string;
  description: string;
  price: string; // Ensure this is spelled correctly and matches your data objects
  stars?: number;
  cuisine?: string;
  duration?: string;
}
export default function SteperCard({ place }: { place: Places }) {
  const [readMore, setReadMore] = useState(false);
  const {
    image,
    placeName,
    rate,
    location,
    catogry,
    type,
    description,
    duration,
    cuisine,
    stars,
    price,
  } = place;
  function countWords(text: string): number {
    const words = text.match(/\S+/g);
    return words ? words.length : 0;
  }
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        marginTop: "10px",
        backgroundColor: "#FFF5E1",
        borderRadius: "5px",
      }}
    >
      {/* image box */}

      <img
        src={image}
        style={{
          width: "50%",
          marginRight: "15px",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px 0px 0px 5px",
        }}
        alt=""
      />

      {/* content box */}
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        {/* location name */}

        {/* <Box
          sx={{
            backgroundColor: "#FFD334",
            borderRadius: "3px",
            width: "auto",
            height: "auto",
            marginRight: "auto",
            paddingX: "6px",
            paddingY: "3px",
            marginBottom: "3px",
            opacity: "1",
          }}
        >
          <Typography
            fontFamily={"Roboto"}
            sx={{
              fontWeight: "regular",
              fontSize: "15px",
              textAlign: "center",
              opacity: "1",
            }}
          >
            {location}
          </Typography>
        </Box> */}

        {/* place name */}
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "Bold",
            margin: "3px 0px",
            fontSize: "15x",
            textAlign: "left",
            color: "#000000",
          }}
        >
          {placeName}
        </Typography>

        <Rating
          sx={{ marginButton: "20px" }}
          name="rating"
          size="small"
          value={rate}
          readOnly
        />
        {/* things to eat content */}
        {catogry === "things to eat" && (
          <Box sx={{ display: "flex" }}>
            <DinnerDiningIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "5px",
                fontWeight: "regular",
              }}
            >
              {type}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MenuBookIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "regular",
              }}
            >
              {cuisine}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "5px",
                fontWeight: "regular",
              }}
            >
              ${price}
            </Typography>
          </Box>
        )}

        {/* things to eat content */}
        {catogry === "things to do" && (
          <Box sx={{ display: "flex" }}>
            <LocalActivityIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "9px",
                marginTop: "3px",
                fontWeight: "regular",
              }}
            >
              {type}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <AccessTimeIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "9px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              {duration} hours
            </Typography>
            <Box sx={{ width: "2px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              ${price} per adult
            </Typography>
          </Box>
        )}

        {catogry === "places to stay" && (
          <Box sx={{ display: "flex" }}>
            <StarIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "12px",
                marginTop: "2px",
                fontWeight: "regular",
              }}
            >
              {stars}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon fontSize="small" />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "2px",
                marginTop: "3px",
                fontWeight: "regular",
              }}
            >
              ${price} per night
            </Typography>
          </Box>
        )}

        <Box sx={{ width: "100%", height: "30%", mt: 1 }}>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Roboto",
              fontSize: "9px",
              fontWeight: "regular",
            }}
          >
            {readMore
              ? description
              : description
                  .split(" ")
                  .slice(0, countWords(description) / 2 / 2)
                  .join(" ") + " ..."}
          </Typography>
          <Typography
            onClick={() => setReadMore(!readMore)}
            sx={{
              fontSize: "8px",
              fontFamily: "Roboto",
              color: "#000000",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {readMore ? "Read Less" : "Read More"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
