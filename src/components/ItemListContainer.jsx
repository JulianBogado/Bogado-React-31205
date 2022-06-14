import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(false);
  const[items, setItems] = useState([]);
  useEffect(() => {
    fetch('./productos.json')
    .then(response => response.json())
    .then(data => { setItems(data); setLoading(false); })
    .catch(error => { setError(true); setLoading(false); })
    .finally(() => { setLoading(false); })
  }, []);

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