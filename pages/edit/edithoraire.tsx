import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { horaireModel } from "../../model/horaireModel";
import { useRouter } from "next/router";
import { horairesService } from "../../service/horaire";
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import Menu from "../menu";

interface Props {}

const Edithoraire: FunctionComponent<Props> = () => {
  const [ouverture, setOuverture] = useState("");
  const [fermeture, setFermeture] = useState("");
  const [jour, setJour] = useState("");
  const [id, setid] = useState(0);
  const [titlebutton, setTitlebutton] = useState("Creer une horaire");
  const [ismodifier, setIfModifier] = useState(false);

  const router = useRouter();

  const ajouterhoraire = (e: React.FormEvent) => {
    const horaire: horaireModel = new horaireModel();

    horaire.ouverture = ouverture;
    horaire.fermeture = fermeture;
    horaire.jour = jour;
    horaire.id = id;

    horairesService.creerHoraire(horaire);
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
              Cree une Horaire
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={ajouterhoraire}
              sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="nom"
                      value={ouverture}
                      onChange={(e) => setOuverture(e.target.value)}
                      required
                      fullWidth
                      label="l'heure d'ouverture"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="fermeture"
                      value={fermeture}
                      onChange={(e) => setFermeture(e.target.value)}
                      required
                      fullWidth
                      label="l'heure de fermeture"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="jour"
                      value={jour}
                      onChange={(e) => setJour(e.target.value)}
                      required
                      fullWidth
                      label="jour"
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

export default Edithoraire;
