import React, { useEffect } from "react";
import { useCoffeeCart } from "../../context/CartContext";

const Cart = () => {
  const {
    coffeeCart,
    getCoffeeCart,
    changeProductCountInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();
  useEffect(() => {
    getCoffeeCart();
  }, []);

  return (
    <div className="cart-container">
      {coffeeCart.products.map((elem) => (
        <div className="card_content">
          <img src={elem.item.img} alt="" />
          <p>{elem.item.title}</p>
          <p>{elem.item.description}</p>
          <p>{elem.item.category}</p>
          <p>${elem.item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
