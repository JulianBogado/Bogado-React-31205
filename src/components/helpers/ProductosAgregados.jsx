import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ProductosAgegados(contador) {
    console.log("Esto funciono")
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Se agregaron {contador} productos al carrito </Alert>
    </Stack>
  );
}