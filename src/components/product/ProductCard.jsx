import React from "react";
import { useProducts } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./product.scss";
import { coffeeCarts } from "../../context/CartContext";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const { getCoffeeCart } = coffeeCarts();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    getCoffeeCart();
  };
  return (
    <form className="form_card">
      <div className="card_content">
        <div>
          <img src={elem.img} alt="" />
          <p>{elem.title}</p>
          <p>{elem.description}</p>
          <p>{elem.category}</p>
        </div>
        <div>
          <button onClick={() => deleteProduct(elem.id)}>DELETE</button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>EDIT</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
