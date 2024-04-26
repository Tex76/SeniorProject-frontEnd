import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import formPhoto from '../images/Signup/FormPhoto.png';
import backgroundImage from '../images/Signup/Background.png';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

// Styled component for the form box
const FormBox = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)',
  padding: theme.spacing(3),
  backgroundImage: `url('${backgroundImage}')`,
  backgroundSize: 'cover',
  width: '600px',
  height: '654px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  '@media (max-width:600px)': {
    width: '100%',
  },
}));

// Main component
export default function Signup() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigation = useNavigate();

  const [username, setUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);

  const [alert, setAlert] = React.useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!emailError && !passwordError && !confirmPasswordError && password === confirmPassword) {
      setAlert('success');
      // Navigate to Home screen
      setTimeout(() => {
        navigation('/Login');
      }, 1200);
    } else {
      setAlert('error');
    }
  };

  // Email validation
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    // Basic regex for email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    // Add your name validation logic here
  };
  
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    // Add your username validation logic here
  };

  // Password validation
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    // Basic regex for password validation: At least 8 characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(event.target.value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // Confirm Password validation
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    if (password !== event.target.value) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth={false}>
        <CssBaseline />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <FormBox onSubmit={handleSubmit}>

          <Box sx={{ position: 'fixed', top: '15%', left: '50%', transform: 'translateX(-50%)'}}>
          {alert === 'success' && <Alert severity="success">Signup Sucess!</Alert>}
          {alert === 'error' && <Alert severity="error">Incorrect Email, Password or Confirm Password.</Alert>}
          </Box>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ color: 'rgb(14, 34, 67)', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Roboto' }}>
              Sign Up
            </Typography>

            <Typography component="h5" variant="h5" sx={{ fontSize: '12px', fontFamily: 'Roboto' }}>
              Welcome!
            </Typography>

            <Box component="form" sx={{ mt: 3, width: '100%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    id="name"
                    label="Name"
                    autoComplete="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleNameChange}

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="username"
                    id="username"
                    label="Username"
                    autoComplete="username"
                    placeholder="Enter Username"
                    value={username}
                    onChange={handleUsernameChange}

                  />
                </Grid>
              </Grid>
              <TextField
                required
                fullWidth
                name="email"
                id="email"
                label="Email"
                autoComplete="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? "Invalid email" : ""}
                sx={{ mt: 2 }}
              />

              <TextField
                required
                fullWidth
                name="password"
                id="password"
                label="Password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={passwordError ? "Invalid password. Must contain at least 8 characters, at least one letter and one number." : ""}
                sx={{ mt: 2 }}
              />

              <TextField
                required
                fullWidth
                name="confirmPassword"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={confirmPasswordError}
                helperText={confirmPasswordError ? "Password and Confirm Password must match." : ""}
                sx={{ mt: 2 }}
              />

              <hr style={{ borderWidth: '1px', color: 'rgb(200, 200, 200)', borderColor: 'rgb(200, 200, 200)', backgroundColor: 'rgb(200, 200, 200)', marginTop: '20px', flexGrow: 1, marginLeft: '10px' }} />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(242, 183, 100)', color: 'black', '&:hover': { color: 'white' } }}
              >
                Sign Up
              </Button>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Typography variant="body2">
                  Already have an account?
                  <Link component={RouterLink} to="/Login" sx={{ color: 'rgb(23, 18, 255)', textDecoration: 'none'}}>
                    {" Login"}
                  </Link>
                </Typography>

              </Box>
            </Box>
          </FormBox>
          
          {!isMobile && (
              <Box sx={{ ml: 3 }}>
                <img src={formPhoto} alt="Form"/>
              </Box>
            )}

        </Box>
      </Container>
    </ThemeProvider>
  );
}