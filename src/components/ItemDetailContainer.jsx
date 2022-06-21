import React from 'react'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail.jsx';
import Item from './Item.jsx';

export default function ItemDetailContainer() {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(false);

  const[itemDetail, setItemDetail] = useState();
  const { itemId } = useParams()

  useEffect(() => {
    fetch('../../productos.json')
    .then((response) => response.json())
    .then((data) => {
      setItemDetail(data.filter(prod => prod.id == itemId));
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
      setLoading(false);
      console.log(error) })
    .finally(() => { setLoading(false); })
  }, [itemId]);

  return (
  <>
    <div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Hubo un error al cargar el producto'}</div>
      {itemDetail && (itemDetail.map((item) => 
                <ItemDetail key={itemDetail} id={item.id} title={item.title} description={item.description} description2={item.description2} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />
            ))}
    </div>
  </>
  )
}