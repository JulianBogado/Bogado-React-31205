import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <>
    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ marginTop: '50px' }}>
        <Grid item>
            <Typography variant="h3" component="div">
                Bienvenidos a Bradim
            </Typography>
        </Grid>
    </Grid>
    
    </>
  )
}
