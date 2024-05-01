import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/system";
import formPhoto from "../images/Signup/FormPhoto.png";
import backgroundImage from "../images/Signup/Background.png";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

export default function Signup() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault(); // Prevent the default behavior, which is form submission
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    });

    axios
      .post("http://localhost:5050/signin", {
        name: data.get("name"),
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
        confirmPassword: data.get("confirmPassword"),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const FormBox = styled(Box)(({ theme }) => ({
    borderRadius: "15px",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
    padding: theme.spacing(3),
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: "cover",
    width: isMobile ? "100%" : "600px", // Adjust width for mobile screens
    height: "654px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(2),
  }));

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth={false}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <FormBox>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "rgb(14, 34, 67)",
                fontSize: "32px",
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              Sign Up
            </Typography>
            <Typography
              component="h5"
              variant="h5"
              sx={{ fontSize: "12px", fontFamily: "Roboto" }}
            >
              Create your account to save your progress!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "100%" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    placeholder="Enter Name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    placeholder="Enter Username"
                  />
                </Grid>
              </Grid>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                placeholder="Enter Email"
                sx={{ mt: 2 }}
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                placeholder="Enter Password"
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button" // specify the type as button to prevent form submission
                        aria-label="toggle password visibility"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                          handleClickShowPassword(event)
                        } // Pass the event argument
                        onMouseDown={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => event.preventDefault()} // prevent the mousedown event from triggering form submission
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                autoComplete="new-password"
                placeholder="Confirm Password"
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button" // specify the type as button to prevent form submission
                        aria-label="toggle password visibility"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                          handleClickShowPassword(event)
                        } // Pass the event argument
                        onMouseDown={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => event.preventDefault()} // prevent the mousedown event from triggering form submission
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <hr
                style={{
                  borderWidth: "1px",
                  color: "rgb(200, 200, 200)",
                  borderColor: "rgb(200, 200, 200)",
                  backgroundColor: "rgb(200, 200, 200)",
                  marginTop: "20px",
                  flexGrow: 1,
                  marginLeft: "10px",
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "rgb(242, 183, 100)",
                  color: "black",
                  "&:hover": {
                    // Add hover effect
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="body2">
                  Already have an account?
                  <Link
                    component={RouterLink}
                    to="/Login"
                    sx={{ color: "rgb(23, 18, 255)", textDecoration: "none" }}
                  >
                    {" Login"}
                  </Link>
                </Typography>
              </Box>
            </Box>
          </FormBox>
          {!isMobile && (
            <Box sx={{ ml: 3 }}>
              <img src={formPhoto} alt="Form" />
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
