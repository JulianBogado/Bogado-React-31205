import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'
import "./css-components/itemList.css"

function ItemList({items}) {
  return (
    <>
    <div className='divItemList'>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items?.map(item => <Item key={item.id} item={item}/>)}
      </Grid>
    </div>
    
    </>
  )
}

export default ItemList