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
          <input
            onChange={(e) =>
              changeProductCountInCoffeeCart(elem.item.id, e.target.value)
            }
            type="number"
            min={1}
            max={20}
            defaultValue={elem.count}
          />
          <button onClick={() => deleteProductInCoffeeCart(elem.item.id)}>
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
