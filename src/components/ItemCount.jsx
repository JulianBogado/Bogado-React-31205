import { ClickAwayListener, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import "./css-components/ItemCount.css";

function ItemCount({ stock, initial, onAdd }) {
  //Contador
  const [contador, setContador] = useState(initial);
  //Boton que resta
  const [restar, setRestar] = useState(true);
  //Boton que suma
  const [sumar, setSumar] = useState(false);
  //Tooltip
  const [mensaje, setMensaje] = useState(false);
  useEffect(() => {
    if (contador > 1) {
      setRestar(false);
    } else if (contador <= 1) {
      setRestar(true);
    }
  }, [contador]);

  useEffect(() => {
    if (contador === stock) {
      setSumar(true);
      setMensaje(true);
    } else if (contador <= stock) {
      setMensaje(false);
      setSumar(false);
    }
  }, [contador]);
  const reset = () => {
    setContador(initial);
  };

  return (
    <>
      <div className="centerDiv">
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            disabled={restar}
            onClick={() => {
              setContador(contador - 1);
            }}
          >
            -
          </Button>
          <p>{contador}</p>
          <ClickAwayListener
            onClickAway={() => {
              setMensaje(false);
            }}
          >
            <Tooltip
              placement="top"
              open={mensaje}
              title="No hay más stock que el seleccionado"
            >
              <Button
                disabled={sumar}
                onClick={() => {
                  setContador(contador + 1);
                }}
              >
                +
              </Button>
            </Tooltip>
          </ClickAwayListener>
        </Stack>
        <Stack>
          <Button
            size="medium"
            variant="outlined"
            onClick={() => {
              onAdd(contador);
              reset();
            }}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default ItemCount;
