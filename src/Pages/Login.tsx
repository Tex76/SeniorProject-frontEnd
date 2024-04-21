import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import formPhoto from '../images/Login/FormPhoto.png';
import backgroundImage from '../images/Login/Background.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const FormBox = styled(Box)(({ theme }) => ({
  borderRadius: '15px',
  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.15)', // Adjust as needed
  padding: theme.spacing(3),
  backgroundImage: `url('${backgroundImage}')`,
  backgroundSize: 'cover',
  width: '600px', // Fixed width
  height: '654px', // Height is width * aspect ratio
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // Added this line
  gap: theme.spacing(2), // Added this line
  '@media (max-width:600px)': {
    width: '100%', // Full width on small screens
  },
}));

export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            width: '100vw', // Full viewport width
          }}
        >
          <FormBox>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: 'rgb(14, 34, 67)', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Roboto' }}>
              Login
            </Typography>
            <Typography component="h5" variant="h5" sx={{ fontSize: '12px', fontFamily: 'Roboto' }}>
              Welcome Back!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
              <TextField
                required
                fullWidth
                id="email"
                label="Username / Email"
                name="email"
                autoComplete="email"
                placeholder="Enter Username / Email"
              />
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="Enter Password"
                sx={{ mt: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link href="#" variant="body2" sx={{ color: 'rgb(23, 18, 255)' , textDecoration: 'none'}}>
                  Forgot password?
                </Link>
              </Box>
              <hr style={{ borderWidth: '1px', color: 'rgb(200, 200, 200)', borderColor: 'rgb(200, 200, 200)', backgroundColor: 'rgb(200, 200, 200)', marginTop: '20px', flexGrow: 1, marginLeft: '10px' }} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(242, 183, 100)', color: 'black', '&:hover': { color: 'white' } }}
              >
                Login
              </Button>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body2">
                  Don't have an account?
                  <Link component={RouterLink} to="/Signup" sx={{ color: 'rgb(23, 18, 255)', textDecoration: 'none'}}>
                    {" Sign Up"}
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