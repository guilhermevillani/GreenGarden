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
import { Link } from 'react-router-dom'


const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');



  const handlePasswordChange = (value) => {
    setPassword(value);
  }
  const handleUserNameChange = (value) => {
    setPassword(value);
  }

  const handleSave = (value) => {
    const data = {
      UserName: userName,
      Password: password
    };


    // const url = 'https://localhost:44386/api/Login/Registration';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    const url = 'https://localhost:7002/User/Login';
    axios.post(url, data).then((result) => {
      alert('Sucesso')
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          {/* <Box  onSubmit=handleSubmit noValidate sx={{ mt: 1 }}> */}
          <Box noValidate sx={{ mt: 1 }}>
            <TextField onChange={(e) => handleUserNameChange(e.target.value)} margin="normal" required fullWidth id="userName" label="Usuário" name="userName" autoComplete="userName" autoFocus />
            <TextField onChange={(e) => handlePasswordChange(e.target.value)} margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="current-password" />
              <Button onClick={() => handleSave()} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Acessar Sistema </Button>
            {/* <Link to="/dashboard">
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Dashboard</Button>
            </Link> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/registrar" variant="body2">
                  {"Não possui uma conta? Crie sua conta clicando aqui"}
                </Link>
              </Grid>
              <Grid item>
                <Link to="/dashboard" variant="body2">
                  {"Dashboard"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}