import { Typography } from "@mui/material";
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import Home from "./Home";
import ItemList from "./ItemList";


function ItemListContainer({ category }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);


   //firebase
   const coleccion = "items"
   const db = getFirestore()

   const coleccionDeProductos = collection(db, coleccion)

   useEffect(() => {

       getDocs(coleccionDeProductos).then((res)=>{
           setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data()} )))
           setLoading(false)
       })
       
   }, [])

  return (
    <>
      <Home />
      <div>
        <div style={{display:"flex", alignContent:"center", justifyContent:"center"}}>{loading && <BarLoader style={{ marginTop:"100px"}}/>}</div>
        <div>
          <Typography align="center" sx={{marginTop:"50px"}}>
            {error && "No se lograron cargar los productos"}
          </Typography>
        </div>

        <ItemList items={items} category={category} />
      </div>
    </>
  );
}

export default ItemListContainer;
