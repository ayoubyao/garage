import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface CardSliderProps {
    key:number;
    image:string;
    title:string;
    description:string
}
 
const CardSlider : FunctionComponent<CardSliderProps> = (props) => {
    return ( <Grid item key={props.key} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image={props.image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title} 
            </Typography>
            <Typography>
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </Grid> );
}
 
export default CardSlider;