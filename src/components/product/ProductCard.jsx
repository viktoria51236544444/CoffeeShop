import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";
import Like from "./img/another like.svg";

const ProductCard = ({ elem }) => {
  const { deleteProduct, plusLikeCoffee } = useProducts();
  const [isCoffeeLike, setIsCoffeeLike] = useState(false);
  const { addProductToCoffeeCart, deleteProductInCoffeeCart } = useCoffeeCart();
  const navigate = useNavigate();
  const handleClick = () => {
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
  };
  const handleAddToCart = () => {
    addProductToCoffeeCart(elem);
    alert("Confirm action: Product is in cart ");
  };
  const handleLikeClick = () => {
    setIsCoffeeLike(true);
  };
  const handleLikeCoffeeClick = () => {
    plusLikeCoffee();
  };
  return (
    <form className="form_card">
      <div className="card_content">
        <div>
          <img src={elem.img} alt="" />
          <p>{elem.title}</p>
          <p>{elem.description}</p>
          <p>{elem.category}</p>
          <p>{elem.price}$</p>
        </div>
        <div>
          <button onClick={handleClick}>Delete</button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginLeft: "-40%",
          }}
        >
          <NavLink to={"/comments"}>
            <img
              style={{
                width: "13%",
                height: "13%",
                cursor: "pointer",
              }}
              src="https://svgsilh.com/svg/29435-ff9800.svg"
              alt=""
            />
          </NavLink>
          <img
            style={{
              width: "15%",
              height: "15%",
              cursor: "pointer",
            }}
            src={
              isCoffeeLike ? Like : "https://svgsilh.com/svg/2438744-ff9800.svg"
            }
            alt=""
            onClick={() => {
              handleLikeClick();
              handleLikeCoffeeClick();
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
