import React, { useEffect } from "react";
import { coffeeCarts } from "../../context/CartContext";

const Cart = () => {
  const { coffeeCart, getCoffeeCart } = coffeeCarts();

  useEffect(() => {
    getCoffeeCart();
  }, []);

  return (
    <div className="cart-container">
      <h2>Корзина</h2>
    </div>
  );
};

export default Cart;
