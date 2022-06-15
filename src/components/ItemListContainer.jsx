import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

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
        console.log(error)
        setError(true);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <div>{loading && "Loading..."}</div>
        <div>{error && "No se lograron cargar los productos"}</div>
        <ItemList items={items} category={category} />
      </div>
    </>
  );
}

export default ItemListContainer;
