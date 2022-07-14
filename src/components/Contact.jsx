import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';

export default function Contact() {
  return (
    <div className="App"> 
    <Typography gutterBottom variant="h3" align="center" mt={8}>
      Contacto
     </Typography>
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            ¿Tenés alguna duda?
        </Typography> 
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Rellená el formulario y nos comunicaremos con vos a la brevedad
        </Typography> 
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Nombre" label="Nombre" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField placeholder="Apellido" label="Apellido" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="email" placeholder="Correo electrónico" label="Correo electrónico" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="number" placeholder="Teléfono" label="Teléfono" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Mensaje" multiline rows={4} placeholder="Escriba su mensaje aquí" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" sx={{backgroundColor: "#4D4C7D"}} fullWidth>Enviar</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </div>
);
}

