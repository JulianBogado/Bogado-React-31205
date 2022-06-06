import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({greeting}) {
  const onAdd = (contador) =>{
    alert(`Se agregaron ${contador} items`)
  }
  return (
    <>
    <h1>{greeting}</h1>
    <div>
    <ItemCount stock={6} initial={1} onAdd={onAdd}  />
  </div>
  </>
  )
}

export default ItemListContainer