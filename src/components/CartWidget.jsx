import React from 'react'
import Badge from '@mui/material/Badge/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function CartWidget({items}) {
  return (
      <>
    <Tooltip title="Carrito">
    <IconButton aria-label="cart" color="inherit">
      <Badge badgeContent={items} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    </Tooltip>
    </>
  )
}

export default CartWidget