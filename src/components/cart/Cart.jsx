import React, { useEffect } from "react";
import { useCoffeeCart } from "../../context/CartContext";
import coffeeIcon from "./img/reserve-cup-img.png"; // Import your coffee icon image
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    coffeeCart,
    getCoffeeCart,
    changeProductCountInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();
  const navigate = useNavigate();
  useEffect(() => {
    getCoffeeCart();
  }, []);
  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div className="cart-container">
      {coffeeCart.products.map((elem) => (
        <div className="cart-item" key={elem.item.id}>
          <img
            className="cart-item-image"
            src={elem.item.img || coffeeIcon}
            alt=""
          />
          <div className="cart-item-details">
            <p className="cart-item-title">{elem.item.title}</p>
            <p className="cart-item-description">{elem.item.description}</p>
            <p className="cart-item-category">{elem.item.category}</p>
            <p className="cart-item-price">${elem.item.price}</p>
            <input
              className="cart-item-input"
              onChange={(e) =>
                changeProductCountInCoffeeCart(elem.item.id, e.target.value)
              }
              type="number"
              min={1}
              max={20}
              defaultValue={elem.count}
            />
            <p>{elem.subPrice}</p>

            <button
              className="cart-item-delete"
              onClick={() => deleteProductInCoffeeCart(elem.item.id)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
      <p style={{ backgroundColor: "#F5F5F5", padding: "10px" }}>
        Total Price: ${coffeeCart.totalPrice}
      </p>
      <button onClick={handleClick}>Order</button>
    </div>
  );
};

export default Cart;
