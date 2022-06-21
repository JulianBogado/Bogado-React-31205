import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import ProductosAgegados from "./helpers/ProductosAgregados";
import "./css-components/itemDetail.css";
import ItemCount from "./ItemCount";
import { Container } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ItemDetail({
  id,
  title,
  description,
  description2,
  price,
  pictureUrl,
  stock,
}) {

  const [unidades, setUnidades] = useState();
  const onAdd = (contador) => {
    <ProductosAgegados contador={contador} />;
    alert(`Se agregaron ${contador} items`);
    setUnidades(contador);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between" style={{ marginTop: '50px' }}>
          <Grid item>
            <img
              className="fotoProd"
              src={pictureUrl}
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
                  {unidades > 0 ? <Link to={'/cart'}> Terminar mi compra </Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
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
