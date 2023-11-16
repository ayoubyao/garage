import { Router, useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { UserService } from "../service/users";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { UsersModel } from "../model/users";
import { ThemeProvider } from "styled-components";
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, createTheme } from "@mui/material";



interface Props {}
const LoginPage: React.FunctionComponent<Props> = (Props) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const credential: UsersModel = new UsersModel();
    credential.password = password;
    credential.email = email;
    const response = UserService.handleLogin(email, password)
      .then((data) => {
        if (data) {
          const user: UsersModel = data;
          if (data.user.profile == 1) {
            // admin
            router.push({
              pathname: "/home",
              query: { profil: 1, firstname:data.user.firstName, lastname:data.user.lastName  },
            });
          } else if (data.user.profile == 2) {
            // employe
            router.push({
              pathname: "/home",
              query: { profil: 2, firstname:data.user.firstName, lastname:data.user.lastName },
            });
          } else {
            router.push("/erreur");
          }
          // Connecter l'utilisateur (peut-être en utilisant un contexte ou en redirigeant vers une page d'accueil)
        } else {
          // Afficher une erreur à l'utilisateur
          router.push("/erreur");
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Button variant="outlined"><Link href="/">Home</Link></Button>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              autoComplete="email"
              autoFocus
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              autoComplete="current-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              placeholder="Login"
            >
              Connexion
            </Button>
            <Grid container>
            </Grid>
          </Box>
        </Box>
    </ThemeProvider>
  );
};



export default LoginPage;
