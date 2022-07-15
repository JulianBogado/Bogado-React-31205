import React from "react";
import { CartContext } from "../context/CartContex";
import { useContext } from "react";
import {
  Button,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function Cart() {
  const {
    isInCart,
    addItem,
    cart,
    removeItem,
    getItemQty,
    getItemPrice,
    clearCart,
  } = useContext(CartContext);
  return (
    <>
    <div style={{marginTop:"100px"}}>
      <div>
        <Typography variant="h4" align="center">
          Carrito de compras
        </Typography>
      </div>

      {getItemQty() > 0 ? (
        <div>
        <TableContainer
          sx={{ maxWidth: 1050, margin: "auto" }}
          component={Paper}
        >
          <Table sx={{ maxnWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Producto </TableCell>
                <TableCell align="right">Unidades</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right">Agregar/Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow
                  key={product.nombre}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={product.image} width="70px" />
                  </TableCell>
                  <TableCell align="left">
                    <Link to={`/item/${product.id}`}>{product.title}</Link>
                  </TableCell>
                  <TableCell align="right">{product.unidades}</TableCell>
                  <TableCell align="right">${product.price}</TableCell>
                  <TableCell align="right">
                    ${product.unidades * product.price}
                  </TableCell>
                  <TableCell align="right">
                    <ClearIcon sx={{cursor: "pointer"}} onClick={() => removeItem(product.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{marginBottom:"5em"}}>
        <TableRow scope="row" align="right" style={{display:"flex", justifyContent:"center", marginTop:"2em"}}>
          <Container maxWidth="md" sx={{backgroundColor:"#1976d2", height:"3em", borderRadius:"8px", display:"flex", alignContent:"center",justifyContent:"center"}}>
          
          <Box component="span" style={{marginTop:"10px"}}> <Typography color={"white"}> Precio total: ${getItemPrice()}</Typography>
          </Box>
          </Container>
              
            </TableRow>
  <Typography
  sx={{marginTop:"20px"}}
  align="center">
    <Button variant='contained'>
      <Link style={{ textDecoration: 'none', color:'inherit' }} to={'/checkout'} >Finalizar compra</Link></Button>
    <Button sx={{ml:2}} variant='outlined' onClick={clearCart}>Vaciar carrito</Button>
  </Typography>
  </div>
  </div>
      )
      :
        (
        <div>
          <Typography
          sx={{marginTop:"40px"}}
          align="center"
          variant="h6">
          Ups, parece que no hay productos en el carrito
          </Typography>
          <Typography
          sx={{marginTop:"10px"}}
          align="center">
            <Link to={"/"}>Agreguemos algunos</Link>
            
          </Typography>
        </div>
        
      )}
      </div>
    </>
  );
}
