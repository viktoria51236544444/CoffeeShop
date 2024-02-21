import React, { useState } from "react";
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
          <p>${elem.price}</p>
        </div>
        <div>
          <button onClick={() => deleteProduct(elem.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
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
