import { Grid } from "@mui/material";
import React from "react";
import Item from "./Item";
import { useState } from "react";
import "./css-components/itemList.css";

function ItemList({ items, category }) {
  let filterResult = [];
  if (category != undefined) {
    filterResult = items.filter((num) => num.categoryId === category);
  } else {
    filterResult = items;
  }

  return (
    <>
      <div className="divItemList">
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filterResult?.map((item) => (
            <Item key={item.id} item={item} />  
          ))}
        </Grid>
      </div>
    </>
  );
}

export default ItemList;
