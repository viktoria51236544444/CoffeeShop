
import React from "react";

import { useProducts } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const {
    addProductToCoffeeCart,
    checkProductInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();
  const navigate = useNavigate();
  const handleClick = () => {
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
  };
  return (
    <form className="form_card">
      <div className="card_content">
        <div>
          <img src={elem.img} alt="" />
          <p>{elem.title}</p>
          <p>{elem.description}</p>
          <p>{elem.category}</p>
          <p>${elem.price}</p>
        </div>
        <div>
          <button onClick={handleClick}>Delete</button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
          <button
            onClick={() => addProductToCoffeeCart(elem)}
            sx={{
              backgroundColor: checkProductInCoffeeCart(elem.id) ? "black" : "",
              color: checkProductInCoffeeCart(elem.id) ? "white" : "",
            }}
          >
            Добавить в корзину
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "15%",
              height: "15%",
              cursor: "pointer",
            }}
            src="https://svgsilh.com/svg/29435-ff9800.svg"
            alt=""
          />
          <img
            style={{
              width: "17%",
              height: "17%",
              cursor: "pointer",
            }}
            src="https://svgsilh.com/svg/2438744-ff9800.svg"
            alt=""
          />
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
