import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(false);
  const[items, setItems] = useState([]);
  useEffect(() => {
    const listadoItems = new Promise ((res, rej) =>{
      setTimeout(() => {
        res([
          {id: "00", title: "Plato playo", description: "Lorem ipsum", price: 600, pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_749233-MLA45828139846_052021-O.webp", stock: 8},
          {id: "01", title: "Plato hondo", description: "Lorem ipsum", price: 600, pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_774390-MLA41278697945_032020-O.webp", stock: 6},
          {id: "02", title: "Vaso", description: "Lorem ipsum", price: 250, pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_919389-MLA49908181049_052022-O.webp", stock: 3},
          {id: "03", title: "Vaso largo", description: "Lorem ipsum", price: 300, pictureUrl: "https://volfar.vtexassets.com/arquivos/ids/342083-1200-auto?v=637891137159200000&width=1200&height=auto&aspect=true", stock: 4},
          {id: "04", title: "Copa Vino", description: "Lorem ipsum", price: 400, pictureUrl:"https://volfar.vtexassets.com/arquivos/ids/342053-1200-auto?v=637891136563600000&width=1200&height=auto&aspect=true", stock: 12},
    ])
    rej(`Error`)
    }, 2000)

  });
    
  //El then se va a ejecutar cuando el timeOut se cumpla, indistintamente del tiempo que tarde
  listadoItems
    .then((result)=>{
    setItems(result);
    console.log(result);
  },
  )
   .catch((error)=>{
    setError(true);
    console.log(error);
  })
    .finally(()=>{
    setLoading(false);
  })

}, [])
  return (
  <>
    <h1>{greeting}</h1>    <div>
    <div>{loading && 'Loading...'}</div>
    <div>{error && 'Hubo un error en el pago'}</div>
    <ItemList items={items}/>
  </div>
  </>
  )
}

export default ItemListContainer