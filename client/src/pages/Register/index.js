import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Divider from '@mui/material/Divider';
import MuiAlert from '@mui/material/Alert';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../components/Copyright';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function Register() {
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
    usertype: 'customer',
  });
  const [addUser] = useMutation(ADD_USER);
  let navigate = useNavigate();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [redirectOnRegistrationSuccess, setRedirectOnRegistrationSuccess] = useState(false);
  // const [value, setValue] = React.useState('customer');

  useEffect(() => {
    if (redirectOnRegistrationSuccess) {
      const timeout = setTimeout(() => {
        if (Auth.isBrand()) {
          navigate('/dashboard');
        } else {
          navigate('/');
        }
        setRedirectOnRegistrationSuccess(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [redirectOnRegistrationSuccess, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRegisterError(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isRegisterError]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      setIsRegisterSuccess(true);
      Auth.login(data.addUser.token);
      setRedirectOnRegistrationSuccess(true);
    } catch (err) {
      setIsRegisterError(true);
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      usertype: 'customer',
    });
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <ThemeProvider theme={theme}>
      <Grow in={true} timeout={1000}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleInputChange}
                    value={userFormData.email}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    onChange={handleInputChange}
                    value={userFormData.password}
                    label="Password"
                    type={passwordVisibility ? 'text' : 'password'}
                    id="password"
                    helperText={'Your password needs to be at least 6 characters.'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">What would you like to sign-up as?</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="usertype"
                      value={userFormData.usertype}
                      onChange={handleInputChange}>
                      <FormControlLabel value="customer" control={<Radio />} label="Customer" />
                      <FormControlLabel value="influencer" control={<Radio />} label="Influencer" />
                      <FormControlLabel value="brand" control={<Radio />} label="Brand" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email. (Optional)"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link component={RouterLink} to="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Grow>
      <Snackbar open={isRegisterSuccess} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Registration Success!
        </Alert>
      </Snackbar>
      <Snackbar open={isRegisterError} autoHideDuration={6000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          An error occurred with your registration.
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
