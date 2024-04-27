import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepIconProps } from "@mui/material/StepIcon";
import Rest from "./Rest.jpg";
import Circuit from "./Circuit.jpg";

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

/*
export interface Places {
  id: string;
  name: string;
  image: string;
  location: string;
  liked: boolean;
}
*/
// this dum function that just showing random data
// const getRandomDescription = () => {
//   const descriptions = [
//     "This is a random description for step ",
//     "Another exciting step with details: ",
//     "Learn more about this random step: ",
//     "Discover what this step has for you: ",
//     "Explore the contents of step: ",
//   ];
//   return descriptions[Math.floor(Math.random() * descriptions.length)];
// };
interface ColorlibStepIconProps extends StepIconProps {
  completed?: boolean;
  icon: React.ReactNode;
}

const ColorlibStepIcon = (props: ColorlibStepIconProps) => {
  const { completed, icon } = props;

  const iconStyles = {
    backgroundColor: "#007B80", // Customize this color
    color: "#fff",
    width: 30,
    height: 30,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={{
        ...iconStyles,
        backgroundColor: completed ? "#16473C" : "#007B80",
      }}
    >
      {icon}
    </div>
  );
};

export default function VerticalLinearStepper({
  Places,
}: {
  Places: Places[];
}) {
  const [activeStep, setActiveStep] = React.useState(Places.length); // Start with no active step
  //we fetch places of day from the days array

  const [steps, setSteps] = React.useState<Places[]>(Places); // Start with an empty steps array

  const handleNext = (newStep: number) => {
    setActiveStep(newStep);
  };

  const addStep = () => {
    if (activeStep === -1) {
      // The foolwing must be
      const newPlace: Places = {
        id: "",
        catogry: "things to eat",
        image: "",
        placeName: "New Place",
        rate: 0,
        location: "",
        type: "",
        description: "",
        price: "",
        stars: 0,
        cuisine: "",
        duration: "",
      };
      setSteps([newPlace]); // Add the first step
      handleNext(0); // Set the first step as active
    } else {
      const newStepNumber = steps.length + 1;
      const newPlace: Places = {
        id: "",
        catogry: "things to eat",
        image: "",
        placeName: `New Place ${newStepNumber}`,
        rate: 0,
        location: "",
        type: "",
        description: "",
        price: "",
        stars: 0,
        cuisine: "",
        duration: "",
      };
      setSteps([...steps, newPlace]); // Add the new step
      handleNext(steps.length); // Move to the next step
    }
  };

  const deleteLastStep = () => {
    if (steps.length > 0) {
      const newSteps = steps.slice(0, -1);
      setSteps(newSteps);
      setActiveStep(newSteps.length - 1);
      // here must sure that when we delete something it will be delete it from everything else
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.length === 0 ? ( // If no steps, show a placeholder
          <Step>
            <StepLabel>Click on Add to add new place</StepLabel>
          </Step>
        ) : (
          // here we must add the logic of the cards to make sure it's added correctly
          steps.map((place: Places) => (
            <Step key={place.id} expanded={true}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {place.placeName}
              </StepLabel>
              <StepContent>
                {/* card logic here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
              </StepContent>
            </Step>
          ))
        )}
      </Stepper>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Button
          variant="contained"
          onClick={addStep}
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#007B80",
            borderRadius: "15px",
            ":hover": {
              backgroundColor: "#16473C",
            },
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          onClick={deleteLastStep}
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#007B80",
            borderRadius: "15px",
            ":hover": {
              backgroundColor: "#16473C",
            },
          }}
          disabled={steps.length === 0}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
