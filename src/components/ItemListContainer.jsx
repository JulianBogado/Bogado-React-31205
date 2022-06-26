import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Home from "./Home";
import Loader from "./helpers/Loader";
import { Typography } from "@mui/material";

function ItemListContainer({ category }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("./productos.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Home />
      <div>
        <div>{loading && <Loader />}</div>
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
