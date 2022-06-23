import React from "react";
import { CartContext } from "../context/CartContex";
import { useContext } from "react";

export default function Cart() {
  const { isInCart, addItem, cart, setCart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div>
        <p>Este es el carrito</p>
      </div>
    </>
  );
}
