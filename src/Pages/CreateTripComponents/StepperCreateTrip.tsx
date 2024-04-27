import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepIconProps } from "@mui/material/StepIcon";
// this dum function that just showing random data
const getRandomDescription = () => {
  const descriptions = [
    "This is a random description for step ",
    "Another exciting step with details: ",
    "Learn more about this random step: ",
    "Discover what this step has for you: ",
    "Explore the contents of step: ",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};
interface ColorlibStepIconProps extends StepIconProps {
  completed?: boolean;
  icon: React.ReactNode;
}

const ColorlibStepIcon = (props: ColorlibStepIconProps) => {
  const { active, completed, icon } = props;

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

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(-1); // Start with no active step
  interface Step {
    label: string;
    description: string;
  }

  const [steps, setSteps] = React.useState<Step[]>([]); // Start with an empty steps array

  const handleNext = (newStep: number) => {
    setActiveStep(newStep);
  };

  const addStep = () => {
    if (activeStep === -1) {
      // The foolwing must be
      const newStep = {
        label: `Step 1`,
        description: getRandomDescription() + "1",
      };
      setSteps([newStep]); // Add the first step
      handleNext(0); // Set the first step as active
    } else {
      const newStepNumber = steps.length + 1;
      const newStep = {
        label: `Step ${newStepNumber}`,
        description: getRandomDescription() + newStepNumber,
      };
      setSteps(steps.concat(newStep)); // Add the new step
      handleNext(steps.length); // Move to the next step
    }
  };

  const deleteLastStep = () => {
    if (steps.length > 0) {
      const newSteps = steps.slice(0, -1);
      setSteps(newSteps);
      setActiveStep(newSteps.length - 1);
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
          steps.map((step) => (
            <Step key={step.label} expanded={true}>
              {/* <StepLabel>{step.label}</StepLabel> */}
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
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
