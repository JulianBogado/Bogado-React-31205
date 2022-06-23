import React, { useContext } from 'react'
import Badge from '@mui/material/Badge/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { CartContext } from "../context/CartContex";


function CartWidget() {

  const {getItemQty} = useContext(CartContext);

  return (
      <>
    <Tooltip title="Carrito">
    <IconButton aria-label="cart" color="inherit">
      <Badge badgeContent={getItemQty()} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    </Tooltip>
    </>
  )
}

export default CartWidget