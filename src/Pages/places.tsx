import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ThingsToDo from "./ThingsToDo";
import ThingsToEat from "./ThingsToEat";
import PlacesToStay from "./PlacesToStay";
import { Place } from "../../../api/SchemaDb";
import { CircularProgress } from "@mui/material";
// Uncomment other imports if needed
// import ThingsToEat from "./ThingsToEat";
// import PlacesToStay from "./PlacesToStay";

export default function Places() {
  const { id } = useParams();
  // Initialize 'place' to null and define it to accept 'Place' or 'null'
  const [place, setPlace] = useState<Place | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/places/${id}`);
        setPlace(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlaces();
  }, [id]);

  // Ensure the component does not return undefined by handling all possible states
  if (!place) {
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

  if (place.category === "thingsToDo") {
    console.log(place);
    return <ThingsToDo place={place} />;
  }
  // Uncomment and adjust the following lines as necessary
 
  
  if (place.category === "thingsToEat") {
    console.log(place);
    return <ThingsToEat place={place} />;
  }

  if (place.category ==="placesToStay") {
    console.log(place);
    return <PlacesToStay place={place} />;
  }

  return null; // Default return if no condition is met
}
