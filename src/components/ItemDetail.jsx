import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./css-components/itemDetail.css";
import ItemCount from "./ItemCount";
import { Container } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContex";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function ItemDetail({ item }) {

  const { title, description2, price, image, stock } = item; 
  const [unidades, setUnidades] = useState();
  const {isInCart, addItem} =useContext(CartContext)
  const onAdd = (contador) => {
    toast.success(`Se agregaron ${contador} items`, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    setUnidades(contador);
    isInCart(item.id);
    addItem(item, contador)
  };
  
  return (
    <>
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between" style={{ marginTop: '50px' }}>
          <Grid item>
            <img
              className="fotoProd"
              src={image}
              alt={title}
              max-width="500px"
            />
          </Grid>
          <Grid item sm={6} md={6} alignItems="center" justifyContent="center">
            <Container>
              <Typography variant="h3" component="div">
                {title}
              </Typography>
              <div className="precioDetails">
                <p>
                  Precio: <strong>${price}</strong>
                </p>
                <br />

                <p>{description2}</p>

                <div className="divCarrito">
                  {unidades > 0 ? <Button variant='outlined' ><Link to={'/cart'} style={{ textDecoration: 'none', color:'inherit' }}> Terminar mi compra </Link></Button> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                  <ToastContainer style={{marginTop: '5em'}} />
                  <Typography>
                    <p>Stock disponible: {stock}</p>
                  </Typography>
                </div>
              </div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
