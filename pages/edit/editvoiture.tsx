import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { voituresService } from "../../service/voitures";
import { voitureModel } from "../../model/voitureModel";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import { Copyright } from "@mui/icons-material";
import Menu from "../menu";

interface Props {}

const Editvoiture: FunctionComponent<Props> = () => {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);
  const [kilometrage, setKilometrage] = useState(0);
  const [year, setYear] = useState(0);
  const [option, setOption] = useState("");
  const [id, setid] = useState(0);
  const [titlebutton, setTitlebutton] = useState("Creer la voiture");
  const [ismodifier, setIfModifier] = useState(false);
  const [description, setDescription] = useState("");

  const router = useRouter();

  useEffect(() => {
    const carString = router.query.car;
    if (carString) {
      let car: voitureModel = JSON.parse(carString.toString());
      if (car) {
        setNom(car.nom);
        setPrix(car.prix);
        setKilometrage(car.kilometrage);
        setYear(car.year);
        setOption(car.options);
        setTitlebutton("Modifier la Voiture");
        setid(car.id);
        setDescription(car.description);

        setIfModifier(true);
      }
    }
  }, []);

  const ajouterOuModifierVoiture = (e: React.FormEvent) => {
    const voiture: voitureModel = new voitureModel();
    if (ismodifier == false) {
      voiture.nom = nom;
      voiture.prix = prix;
      voiture.kilometrage = kilometrage;
      voiture.year = year;
      voiture.id = id;
      voiture.description = description;

      voituresService.creerVoiture(voiture);
    } else {
      voiture.nom = nom;
      voiture.prix = prix;
      voiture.kilometrage = kilometrage;
      voiture.year = year;
      voiture.options = option
      voiture.description = description;

      voituresService.modifierVoiture(voiture, id);
    }
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
              Page creation Voiture
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={ajouterOuModifierVoiture}
              sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                      fullWidth
                      label="Nom de la voiture"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      name="prix"
                      value={prix}
                      onChange={(e) => setPrix(+e.target.value)}
                      required
                      fullWidth
                      label="Prix"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      name="year"
                      value={year}
                      onChange={(e) => setYear(+e.target.value)}
                      required
                      fullWidth
                      label=" ` Année"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="kilometrage"
                      value={kilometrage}
                      onChange={(e) => setKilometrage(+e.target.value)}
                      required
                      fullWidth
                      label="  ` Kilometrage"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      fullWidth
                      label="description"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Option"
                      type="text" 
                      name="options"
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

export default Editvoiture;
