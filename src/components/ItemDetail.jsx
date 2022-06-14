import React from 'react'
import { Grid, Typography } from '@mui/material'
import './css-components/itemDetail.css'
import { Container } from '@mui/system'


export function ItemDetail({id, title, description, price, pictureUrl, stock}) {
    return (
      <>

        <div className='itemDetail'>
            <Grid item xs={1}>
                <div className='imagenDetalle'>
                    <img src={pictureUrl} alt={title} max-width="550px" />
                </div>
            </Grid>
          <Grid item xs={11}>
            <Typography variant='h4' component="h3">         
                {title}
            </Typography>
                <p className='textDetails'>{description}</p>
                <div className='precioDetails'>
                <b>Precio: ${price}</b>
                <br />
                <button>Añadir al Carrito</button>
                </div>
            
          </Grid>
          
          </div>
          

  
      </>
    )
  }
