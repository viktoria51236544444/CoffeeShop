import React, { useEffect } from "react";
import { useCoffeeCart } from "../../context/CartContext";
import coffeeIcon from "./img/reserve-cup-img.png";
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
    <form>
      <div style={{ display: "inline-block" }} className="card_content">
        {coffeeCart.products.map((elem) => (
          <div
            style={{ borderRadius: "50px" }}
            className="form_card"
            key={elem.item.id}
          >
            <img
              style={{ width: "300px", height: "300px" }}
              src={elem.item.img || coffeeIcon}
              alt=""
            />
            <div>
              <div className="cart-item-info">
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
              </div>
              <div className="cart-item-actions">
                <p>{elem.subPrice}</p>
                <button
                  className="cart-item-delete"
                  onClick={() => deleteProductInCoffeeCart(elem.item.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="static-items">
        <p className="total-price">Total Price: ${coffeeCart.totalPrice}</p>
        <button className="order-button" onClick={handleClick}>
          Order
        </button>
      </div>
    </form>
  );
};

export default Cart;
