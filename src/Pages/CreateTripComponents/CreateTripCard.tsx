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
interface CreateTripCardProps {
  catogry: "things to eat" | "places to stay" | "things to do";
  image: string;
  placeName: string;
  rate: number;
  location: string;
  type: string;
  description: string;
  price: string;
  stars?: number;
  cuisine?: string;
  duration?: string;
}
export default function CreateTripCard(Props: CreateTripCardProps) {
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
  } = Props;
  function countWords(text: string): number {
    const words = text.match(/\S+/g);
    return words ? words.length : 0;
  }
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      {/* image box */}
      {/* make the image no-repate */}
      <Box
        sx={{
          width: "45%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      {/* content box */}
      <Box sx={{ width: "45%", display: "flex", flexDirection: "column" }}>
        {/* location name */}

        <Box
          sx={{
            backgroundColor: "#FFD334",
            borderRadius: "3px",
            width: "auto",
            height: "auto",
          }}
        >
          <Typography
            fontFamily={"Roboto"}
            sx={{
              fontWeight: "regular",
              fontSize: "11px",
              textAlign: "center",
            }}
          >
            {location}
          </Typography>
        </Box>

        {/* place name */}
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "regualr",
            fontSize: "24px",
            color: "#000000",
          }}
        >
          {placeName}
        </Typography>

        <Rating name="read-only" value={rate} readOnly />
        {/* things to eat content */}
        {catogry === "things to eat" && (
          <Box sx={{ display: "flex" }}>
            <DinnerDiningIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              {type}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MenuBookIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              {cuisine}
            </Typography>
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
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
            <LocalActivityIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              {type}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <AccessTimeIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              {duration} hours
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              ${price} per adult
            </Typography>
          </Box>
        )}

        {catogry === "places to stay" && (
          <Box sx={{ display: "flex" }}>
            <StarIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              {stars}
            </Typography>
            <Box sx={{ width: "2px", height: "20px", margin: "0 5px" }}></Box>
            <MonetizationOnIcon />
            <Typography
              sx={{
                marginLeft: "3px",
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "regular",
              }}
            >
              ${price} per night
            </Typography>
          </Box>
        )}

        <Box sx={{ width: "100%", height: "30%" }}>
          <Typography
            sx={{
              width: "100%",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "regular",
            }}
          >
            {readMore
              ? description
              : description
                  .split(" ")
                  .slice(0, countWords(description) / 2)
                  .join(" ") && " ..."}
          </Typography>
          <Typography
            onClick={() => setReadMore(!readMore)}
            sx={{
              fontSize: "7px",
              fontFamily: "Roboto",
              color: "#000000",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Read More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
