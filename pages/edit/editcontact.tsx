import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { contactModel } from "../../model/contactModel";
import { useRouter } from "next/router";
import { contactsService } from "../../service/contact";
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import Menu from "../menu";

interface Props {}

const Editcontact: FunctionComponent<Props> = () => {
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, settelephone] = useState(0);
  const [description, setDescription] = useState("");
  const [id, setid] = useState(0);
  const [titlebutton, setTitlebutton] = useState("Creer le contact");
  const [ismodifier, setIfModifier] = useState(false);

  const router = useRouter();

  const ajoutercontact = (e: React.FormEvent) => {
    const contact: contactModel = new contactModel();

    contact.name = name;
    contact.email = email;
    contact.telephone = telephone;
    contact.description = description;

    contact.id = id;

    contactsService.creerContact(contact);
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
              Creation Contact
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={ajoutercontact}
              sx={{ mt: 3 }}
            >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="email"
                      name="email"
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
                      type="number"
                      name="telephone"
                      value={telephone}
                      onChange={(e) => settelephone(+e.target.value)}
                      required
                      fullWidth
                      label="Telephone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      fullWidth
                      label="Description"
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

export default Editcontact;
