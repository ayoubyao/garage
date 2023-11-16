import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import CardSlider from "./cardSlider";
import { voitureModel } from "../model/voitureModel";

interface sliderProps {
  voitures: voitureModel[];
}

const cards = [1, 2, 3, 4, 5, 6];

const slider: FunctionComponent<sliderProps> = (props) => {
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Box sx={{ paddingLeft: 28 }}>
          <Typography variant="h4" gutterBottom>
          Les voitures d'occasion
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {props.voitures.map((voiture: voitureModel) => (
            <CardSlider
              key={voiture.id}
              image={voiture.primaryImage}
              title={voiture.nom}
              description={voiture.description}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default slider;
