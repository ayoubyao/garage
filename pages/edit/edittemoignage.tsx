import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { temoignageModel } from "../../model/temoignageModel";
import { useRouter } from "next/router";
import { temoignagesService } from "../../service/temoignage";
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import temoignage from "../list/temoignage";
import Menu from "../menu";

interface Props {}

const Edittemoignage: FunctionComponent<Props> = () => {
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [myTemoignage, setMyTemoignage] = useState("");
  const [Isapproved, setIsapproved] = useState("");
  const [datecreation, setDatecreation] = useState("");
  const [id, setid] = useState(0);
  const [titlebutton, setTitlebutton] = useState("Creer le temoignage");
  const [ismodifier, setIfModifier] = useState(false);

  const router = useRouter();

  const ajoutertemoignage = (e: React.FormEvent) => {
    const temoignage: temoignageModel = new temoignageModel();

    temoignage.name = name;
    temoignage.email = email;
    temoignage.temoignage = myTemoignage;
    temoignage.datecreation = new Date(datecreation);
    temoignage.id = id;

    temoignagesService.creerTemoignage(temoignage);
  };
  const defaultTheme = createTheme();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
       <Menu />
            <Button variant="outlined"><Link href="/home">Retour</Link></Button>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Cree un Temoignage
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={ajoutertemoignage}
              sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      type="text"
                      name="nom"
                      value={name}
                      onChange={(e) => setNom(e.target.value)}
                      required
                      fullWidth
                      label="Nom"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      type="email"
                      name="prix"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      fullWidth
                      label="Email"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="year"
                      value={myTemoignage}
                      onChange={(e) => setMyTemoignage(e.target.value)}
                      required
                      fullWidth
                      label="Temoignage"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="date"
                      name="kilometrage"
                      value={datecreation}
                      onChange={(e) => setDatecreation(e.target.value)}
                      required
                      fullWidth
                    />
                  </Grid>
                
                </Grid>
          
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              
              >
                {titlebutton}
              </Button>
      
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Edittemoignage;
