import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import "./createTripStyles.css";
import Button from "@mui/material/Button";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Padding } from "@mui/icons-material";
interface CreateTripFormProps {
  passFunction: Dispatch<SetStateAction<boolean>>;
}

export default function CreateTripForm({ passFunction }: CreateTripFormProps) {
  function validateFields() {
    let tempErrors = { ...errors };
    tempErrors.tripName = !(
      document.getElementById("tripName") as HTMLInputElement
    ).value
      ? "This field is required"
      : "";
    tempErrors.region =
      selectedRegions.length === 0 ? "This field is required" : "";
    tempErrors.description = !(
      document.getElementById("description") as HTMLTextAreaElement
    ).value
      ? "This field is required"
      : "";
    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === ""); // Returns true if all errors are empty strings
  }

  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateFields()) {
      console.log("Form is valid");
      // Handle form submission here
      // here we need to send the data to the server
    } else {
      console.log("Validation failed");
    }
  }
  function setBlackBoxFalse() {
    setErrors({ tripName: "", region: "", description: "" });
    passFunction(false);
    setSelectedRegions([]);
    setDays(1);
    (document.getElementById("tripName") as HTMLInputElement).value = ""; // Correct type assertion for input
    (document.getElementById("description") as HTMLTextAreaElement).value = ""; // Correct type assertion for textarea
  }
  // Define theme and constants

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  // Define places and MenuProps
  const places = ["Northern", "Southern", "Muharraq", "Capital"];
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  // State for selected regions and number of days
  const [selectedRegions, setSelectedRegions] = React.useState<string[]>([]);
  const [days, setDays] = React.useState(1);
  const [errors, setErrors] = useState({
    tripName: "",
    region: "",
    description: "",
  });

  // Event handlers for region selection and day count
  const handleRegionChange = (
    event: SelectChangeEvent<typeof selectedRegions>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedRegions(typeof value === "string" ? value.split(",") : value);
  };

  const handleIncrement = () => {
    if (days < 7) {
      setDays(days + 1);
    }
  };

  const handleDecrement = () => {
    if (days > 1) {
      setDays(days - 1);
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <Typography
        variant="h4"
        style={{ textAlign: "left", fontFamily: "Roboto" }}
      >
        Create Trip
      </Typography>
      <FormControl
        onSubmit={formSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          marginTop: "20px",
        }}
        action=""
      >
        {/* Trip Name */}
        <Box>
          <Typography variant="subtitle1">Trip Name:</Typography>
          <TextField
            fullWidth
            id="tripName"
            name="tripName"
            placeholder="Enter your trip name"
            error={!!errors.tripName}
            helperText={errors.tripName}
            onChange={() => validateFields()}
            onBlur={() => validateFields()}
          />
        </Box>

        {/* Select multiple regions */}
        <Box>
          <Typography variant="subtitle1">Region:</Typography>
          <Select
            fullWidth
            id="region"
            multiple
            value={selectedRegions}
            onChange={handleRegionChange}
            onBlur={() => validateFields()}
            error={!!errors.region}
            input={<OutlinedInput label="Region" />}
            MenuProps={MenuProps}
          >
            {places.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {errors.region && (
            <Typography
              color="error"
              style={{
                marginTop: 1,
                color: "red",
                fontSize: "0.75rem",
                fontStyle: "italic",
              }}
            >
              {errors.region}
            </Typography>
          )}
        </Box>

        {/* Number of days selector */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="subtitle1">Total Days:</Typography>
            <Typography variant="body2" color="textSecondary">
              You can select from 1 up to 7 days
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleDecrement} sx={{ color: "#007B80" }}>
              <RemoveIcon />
            </IconButton>
            <TextField
              value={days}
              inputProps={{ min: 1, max: 7, type: "number", readOnly: true }}
              variant="outlined"
              size="small"
              sx={{ width: "55px", textAlign: "center" }}
            />
            <IconButton onClick={handleIncrement} sx={{ color: "#007B80" }}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Trip Description */}
        <Box>
          <Typography variant="subtitle1">Trip Description:</Typography>
          <textarea
            rows={3}
            className={errors.description ? "error" : ""}
            style={{
              width: "96%",
              resize: "none",
              fontFamily: "Roboto",
              padding: "10px",
              border: errors.description
                ? "1px solid red"
                : "1px solid #ced4da",
              borderRadius: "4px",
              transition: "border-color 0.2s ease-in-out",
            }}
            id="description"
            name="description"
            placeholder="Enter your trip description"
            onBlur={() => validateFields()}
          />
          {errors.description && (
            <Typography
              color="error"
              style={{
                marginTop: 1,
                color: "red",
                fontSize: "0.75rem",
                fontStyle: "italic",
              }}
            >
              {errors.description}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "#007B80",
            marginTop: "20px",
          }}
        ></Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={setBlackBoxFalse}
            sx={{
              borderRadius: "25px",
              color: "#fff",
              backgroundColor: "#205E60",
              "&:hover": { backgroundColor: "#16473C" },
              padding: "10px 20px",
            }}
          >
            Cancle
          </Button>
          <Button
            type="submit"
            sx={{
              borderRadius: "25px",
              color: "#fff",
              backgroundColor: "#205E60",
              "&:hover": { backgroundColor: "#16473C" },
              padding: "10px 20px",
            }}
          >
            Create
          </Button>
        </Box>
      </FormControl>
    </div>
  );
}
