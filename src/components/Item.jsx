import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import ItemCount from "./ItemCount";
import "./css-components/item.css";
import ProductosAgegados from "./helpers/ProductosAgregados";
import { Link, useParams } from "react-router-dom";

export default function Item({ item }) {
  const { id, title, description, price, image, stock } = item;
  return (
    <Grid item xs={2} sm={4} md={3}>
      <Card sx={{ height: 640, maxWidth: 347, border: "1px solid gray", boxShadow: "0 4px 8px rgba(0,0,0,0.25), 0 4px 4px rgba(0,0,0,0.22)" }}>
        <CardMedia
          style={{
            maxHeight:'fit-content'

          }}
          component="img"
          alt={title}
          height="60%"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary" align="center">
            <p className="precio">${price}</p>
            <br />
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid item xs zeroMinWidth>
            <Typography align="center">
              <Button size="small">
                <Link style={{ fontWeight:'bold', textDecoration: 'none', color:'inherit' }} to={`/item/${id}`}>Ver Detalle</Link>
              </Button>
            </Typography>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
