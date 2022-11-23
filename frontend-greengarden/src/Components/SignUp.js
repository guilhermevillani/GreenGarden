import React, { Fragment, useState } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, Route, Redirect} from 'react-router-dom'


const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const cors = require('cors');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');

  const handleFirstNameChange = (value) => {
    setFirstName(value);
  }

  const handleLastNameChange = (value) => {
    setLastName(value);
  }

  const handleCpfChange = (value) => {
    setCpf(value);
  }

  const handleEmailChange = (value) => {
    setEmail(value);
  }

  const handlePasswordChange = (value) => {
    setPassword(value);
  }

  const handleSave = (value) => {
    const data = {
      Id: 0,
      FirstName: firstName,
      Cpf: cpf,
      IsActive: 1,
      UserName: firstName.concat(lastName),
      Password: password,
      Email: email
    };
    console.log('data: ', data)


    // const url = 'https://localhost:44386/api/Login/Registration';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const url = 'https://localhost:7002/User/Register';
    axios.post(url, data).then((result) => {
      return (

        <Link to='/login'  />
      );
    }).catch((error) => {
      console.log(error);
    })
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Realize seu cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="Primeiro Nome" autoFocus
                  onChange={(e) => handleFirstNameChange(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Último Nome" name="lastName" autoComplete="family-name"
                  onChange={(e) => handleLastNameChange(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email" name="email" autoComplete="email"
                  onChange={(e) => handleEmailChange(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="cpf" label="CPF" name="email" autoComplete="email"
                  onChange={(e) => handleCpfChange(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="new-password"
                  onChange={(e) => handlePasswordChange(e.target.value)} />
              </Grid>

            </Grid>
            <Button onClick={() => handleSave()} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Já possui uma conta? Faça login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}