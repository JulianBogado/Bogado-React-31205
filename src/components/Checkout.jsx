import {Typography, Grid, TextField, Button, Card} from '@mui/material';
import React from 'react'
import {CartContext} from '../context/CartContex';
import {useContext} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Checkout() {

    const { cart, getItemPrice } = useContext(CartContext);
    
      const [name, setName] = useState('')
      const [lastName, setLast] = useState('')
      const [email, setEmail] = useState('')
      const [number, setNumber] = useState('')
      const [validate, setValidate] = useState(true)
      const [buyerID, setBuyerID] = useState('')
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      const [open, setOpen] = useState(false);
      const [checkout, setCheckout] = useState(true);

      const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = (id) => {
        setOpen(!open);
        setTimeout(() => {
            if (id != ''){
                handleClose();
                setCheckout(false);

            }
        }, 1000);

        
      };

      useEffect(() => {
        if (name != '' && email != '' && number != '' && lastName != '') setValidate(false);
      

      }, [name, email, number, lastName]);
      
          
      function handleClick(){
        
            const order = {
                buyer: {name, lastName, email, number},
                items: cart,
                total: getItemPrice()
                
                
            };
            
        addDoc(orderCollection, order).then(({id}) => {
            setBuyerID(id)
            handleToggle(id)
            console.log(id)              
        })
            console.log(order);
            
            setValidate(true);
                 
    }
    
  return (
    <>
    
    {checkout ? (
    <div>
    <Typography variant='h4' align='center' sx={{mt:8}}>Finalizá tu compra</Typography>
    <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
    <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField onChange={(e)=>setName(e.target.value)} placeholder="Nombre" type='text' label="Nombre" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField onChange={(e)=>setLast(e.target.value)} placeholder="Apellido" type='text' label="Apellido" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Correo electrónico" label="Correo electrónico" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={(e)=>setNumber(e.target.value)} type="number" placeholder="Teléfono" label="Teléfono" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button onClick={() => handleClick()} disabled={validate} variant='contained' sx={{backgroundColor: "#4D4C7D"}} fullWidth>Enviar</Button>
              </Grid>

            </Grid>
          </form>
</Card>
<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
      </div>)
      :
      (
      <div>
            <Typography variant='h3' align='center' sx={{mt:8}}>¡Su pedido ha sido gestionado!</Typography>
            <Typography variant='h4' align='center' sx={{mt:8}}>Gracias por confiar en Bradim</Typography>
            <Typography variant='h5' align='center' sx={{mt:2}}>Estará recibiendo un correo a la brevedad</Typography>

            <Typography variant='h6' align='center' sx={{mt:8}}>Código de pedido: {buyerID}</Typography>

      </div>)
    } 
    </>
  )
}
