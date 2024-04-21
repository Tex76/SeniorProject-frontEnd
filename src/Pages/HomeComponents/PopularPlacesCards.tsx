import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  CardMedia,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "@fontsource/roboto/300.css"; //300 is "Light"
import "@fontsource/roboto/400.css"; // 400 is "Regular"
import "@fontsource/roboto/500.css"; // 500 is "Medium"
import "@fontsource/roboto/700.css"; // 700 is "Bold"
import cardImg1 from "../../images/Home/cardimg1.png";
import cardImg2 from "../../images/Home/cardimg2.png";
import cardImg3 from "../../images/Home/cardimg3.png";
import cardImg4 from "../../images/Home/cardimg4.png";

const PopularPlacesCards = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        if (element) {
          element.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft === scrollWidth - clientWidth);
    }
  };

  // Sample data for the cards
  const cards = [
    {
      id: 1,
      name: "Haus Restaurant & Lounge",
      rating: 4.4,
      category: "Restaurant",
      text: "Things to eat",
      image: cardImg1,
    },
    {
      id: 2,
      name: "Sheikh Salman Bin Ahmed Al Fateh Fort",
      rating: 4.1,
      category: "Ancient Ruins",
      text: "Things to do",
      image: cardImg2,
    },
    {
      id: 3,
      name: "Tree Of Life",
      rating: 4.5,
      category: "Landmark",
      text: "Things to do",
      image: cardImg3,
    },
    {
      id: 4,
      name: "Hilton Bahrain",
      rating: 4.6,
      category: "Hotel",
      text: "Places to Stay",
      image: cardImg4,
    },
  ];

  return (
    <Box>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: 600,
          color: "rgb(242, 183, 100)",
        }}
      >
        Trending Places
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: "center", mb: 4, fontWeight: 500 }}
      >
        Check Popular Places
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {!isMobile && (
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgb(138, 171, 198)",
              p: 1,
            }}
          >
            <IconButton style={{ color: isAtStart ? "gray" : "white" }}>
              <ArrowBackIcon />
            </IconButton>
          </Box>
        )}
        <Box
          ref={scrollContainerRef}
          sx={{ overflowX: "auto", display: "flex" }}
        >
          {cards.map((card) => (
            <Box key={card.id} sx={{ minWidth: 275, mx: 1 }}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "none",
                  overflow: "hidden",
                  transform: "scale(0.95)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="256"
                  width="256"
                  image={card.image}
                  alt="card image"
                />
                <CardContent
                  sx={{
                    height: "150px",
                    overflow: "hidden",
                    backgroundColor: "rgb(255, 246, 228)",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ height: "3em", overflow: "hidden" }}
                  >
                    {card.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating name="read-only" value={card.rating} readOnly />
                    <Typography variant="body2" component="span">
                      {card.rating}
                    </Typography>
                  </Box>
                  <Typography variant="body1" component="div">
                    {card.text} {" • "} {card.category}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        {!isMobile && (
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "rgb(138, 171, 198)",
              p: 1,
            }}
          >
            <IconButton style={{ color: isAtEnd ? "gray" : "white" }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PopularPlacesCards;
