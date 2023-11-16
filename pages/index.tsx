import { FunctionComponent, useEffect, useState } from "react";
import { voitureModel } from "../model/voitureModel";
import { voituresService } from "../service/voitures";
import { temoignagesService } from "../service/temoignage";
import { temoignageModel } from "../model/temoignageModel";
import MenuFront from "./menufront";
import Slider from "./slider";
import Footer from "./footer";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Table,
  Typography,
} from "@mui/material";
import CardSlider from "./cardSlider";
import { horaireModel } from "../model/horaireModel";
import { horairesService } from "../service/horaire";
import { serviceModel } from "../model/serviceModel";
import { servicesService } from "../service/service";

interface Props {}



const voiture: FunctionComponent<Props> = () => {

  const [horaires, setHoraires] = useState(() => {
    const tabHoraires: horaireModel[] = [];
  
    return tabHoraires;
  });

  const [temoignages, setTemoignages] = useState(() => {
    const tabTemoignages: temoignageModel[] = [];

    return tabTemoignages;
  });
  const [voitures, setVoitures ] = useState(() => {
    const tabVoitures: voitureModel[] = [];

    return tabVoitures;
  });
  const [services, setServices ] = useState(() => {
    const tabServices: serviceModel[] = [];

    return tabServices;
  });
  

  useEffect(() => {
    voituresService.getAllvoitures().then((voitures) => {
      setVoitures(voitures);
    });

    temoignagesService.getAlltemoignages().then((temoignages) => {
      setTemoignages(temoignages);
    });
    horairesService.getAllhoraires().then((horaires) => {
      setHoraires(horaires);
    });
    servicesService.getAllservices().then((services) => {
      setServices(services);
    });
  }, []);


  return (
    <div>
      <MenuFront />
      <div>
        <Box sx={{ paddingLeft: 35 }}>
          <Typography variant="h3" gutterBottom>
            Bienvenue dans notre site de voiture
          </Typography>
        </Box>
      </div>
      <div>
        <Box sx={{ paddingLeft: 64 }}>
          <Typography variant="h5" gutterBottom>
           Les services
          </Typography>
        </Box>
      </div>
      <table className="table table-striped">
        <th>id</th>
        <th>titre</th>
        <th>description</th>

        {services.map((service: serviceModel) => (
          <tr>
            <td>{service.id}</td>
            <td>{service.titre}</td>
            <td>{service.description}</td>
          </tr>
        ))}
      </table>
      <div>
        <Box sx={{ paddingLeft: 57 }}>
          <Typography variant="h5" gutterBottom>
           Les horaires d’ouverture
          </Typography>
        </Box>
      </div>
      <table className="table table-striped">
        <th>id</th>
        <th>ouverture</th>
        <th>fermeture</th>
        <th>jour</th>

        {horaires.map((horaire: horaireModel) => (
          <tr>
            <td>{horaire.id}</td>
            <td>{horaire.ouverture}</td>
            <td>{horaire.fermeture}</td>
            <td>{horaire.jour}</td>
          </tr>
        ))}
      </table>
      <Slider voitures={voitures} />

      <h2>Temoignages</h2>

      <table className="table table-striped">
        {temoignages.map((temoignage: temoignageModel) => (
          <tbody>
            <tr>
              <td>nom</td>
              <td>{temoignage.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{temoignage.email}</td>
            </tr>
            <tr>
              <td>temoignage</td>
              <td>{temoignage.temoignage}</td>
            </tr>
            <tr>
              <td>Date de creation</td>
              <td>{temoignage.datecreation.toString()} </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Button variant="outlined" style={{ marginLeft: "500px" }}>
        <Link href="/edit/edittemoignage">Ajouter un temoignage</Link>
      </Button>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default voiture;
