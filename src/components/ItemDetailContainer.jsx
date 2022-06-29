import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader.js';
import { ItemDetail } from './ItemDetail.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(false);

  const[itemDetail, setItemDetail] = useState();
  const { itemId } = useParams()

    //Firestore
    const coleccion = 'items'
    const db = getFirestore()
    const detalleProducto = doc(db, coleccion, itemId)

    useEffect(() => {

        getDoc(detalleProducto).then((res) => {
            if (res.exists()) {
              setItemDetail({ ...res.data(), id: res.id})
                setLoading(false)
            } else{
                console.log('No existe')
            }

    })}, [itemId])

    console.log(itemDetail)

  return (
  <>
    <div>
      <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>{loading && <BarLoader />}</div>
      <div>{error && 'Hubo un error al cargar el producto'}</div>
      {itemDetail && (itemDetail.map((item) => 
                <ItemDetail item={item} />
            ))}
    </div>
  </>
  )
}