import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { serviceModel } from "../../model/serviceModel";
import { useRouter } from "next/router";
import { servicesService } from "../../service/service";
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, TextareaAutosize, ThemeProvider, Typography, createTheme } from "@mui/material";
import Menu from "../menu";

interface Props {}

const Editservice: FunctionComponent<Props> = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [id, setid] = useState(0);
  const [titlebutton, setTitlebutton] = useState("Creer un service");
  const [ismodifier, setIfModifier] = useState(false);

  const router = useRouter();

  const ajouterservice = (e: React.FormEvent) => {
    const service: serviceModel = new serviceModel();

    service.titre = titre;
    service.id =  id;
    service.description = description;
  

    servicesService.creerService(service);
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
              Cree un Service
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={ajouterservice}
              sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      type="text"
                      name="nom"
                      value={titre}
                      onChange={(e) => setTitre(e.target.value)}
                      required
                      fullWidth
                      label="Titre"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextareaAutosize
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      autoComplete="family-name"
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

export default Editservice;
