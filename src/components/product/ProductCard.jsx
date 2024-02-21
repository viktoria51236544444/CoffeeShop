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
          <p>${elem.price}</p>
        </div>
        <div>
          <button onClick={() => deleteProduct(elem.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
            src="https://svgsilh.com/svg/309417-ff9800.svg"
            alt=""
          />
          <img
            className="svg"
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
            src="https://svgsilh.com/svg/2438744-ff9800.svg"
            alt=""
          />
          >>>>>>> a7b0d01fc4fd7538edc37e540868264e6d7ee17b
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
