import React from "react";
import { useProducts } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./product.scss";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
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
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
