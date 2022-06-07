import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ItemCount from './ItemCount';
import "./css-components/item.css"



export default function Item({item}) {
    const onAdd = (contador) =>{
        alert(`Se agregaron ${contador} items`)
      };
    const { id, title, description, price, pictureUrl, stock } = item
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 347, border: "1px solid gray" }}>
              <CardMedia
                component="img"
                alt={title}
                height="70%"
                image={pictureUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                 <p className='precio'>${price}</p>
                  <br />
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid item xs zeroMinWidth>
                    <Button size="small">Ver detalle</Button>
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}  />
                </Grid>
              </CardActions>
            </Card>
        </Grid>
      );
    }