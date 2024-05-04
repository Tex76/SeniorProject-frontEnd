import React, { useEffect } from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Place } from "../../../../api/SchemaDb";

const PlaceContent = () => {
  const { id } = useParams();
  const [place, setPlace] = React.useState<Place>();
  useEffect(() => {
    const fetchFunction = async () => {
      const place = await axios.get(`http://localhost:4000/places/${id}`);
      setPlace(place.data);
    };

    fetchFunction();
  }, []);

  if (!place) return <div>Loading...</div>;

  return (
    <>
      <Typography
        sx={{
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "31px",
          lineHeight: "150.6%",
          color: "#000000",
          marginBottom: "40px",
          px: { xs: "2rem", sm: "0" }, // Add this line
        }}
      >
        Share with us how your visit went?
      </Typography>
      <Card
        sx={{
          width: "194px",
          height: "245px",
          background: "#FFF5E1",
          borderRadius: "10px",
          margin: { xs: "0 auto", sm: "0" }, // Modify this line
          "@media (max-width:600px)": {
            // Add this line
            width: "90%", // Add this line
          }, // Add this line
        }}
      >
        <img
          src={`/systemImage/${place.imagePlace[0]}`}
          alt="Contemplative Reptile"
          style={{
            height: "134px",
            width: "163px",
            // background: `url(/systemImages/${place.imagePlace[0]})`,
            marginLeft: "16px",
            marginRight: "16px",
            objectFit: "cover",
            marginTop: "20px",
            marginBottom: "-10px",
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "150.6%",
              color: "#000000",
            }}
          >
            {place.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "9px",
              lineHeight: "150.6%",
              color: "#6B5E5E",
            }}
          >
            {place.location}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PlaceContent;
