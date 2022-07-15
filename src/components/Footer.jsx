import React from 'react'
import { Typography } from '@mui/material'


export default function Footer() {
  return (
    <>
    <div style={{position:"fixed", bottom:"0",left:"0",right:"0", marginTop:"3em"}}>
    <div style={{backgroundColor:"#4D4C7D", height: "4em", width:"100%", display:"flex", marginTop: "auto", alignItems:"center", justifyContent:"center"}}>
    <Typography
    variant='h6'
    color={"white"}
    fontSize={"12pt"}>
        © 2022 <a href="https://github.com/JulianBogado" style={{ textDecoration: 'none', color:'inherit'}}>Julian Bogado</a>
        
    </Typography>
    </div>
    </div>
    </>
  )
}
