import React, { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";
import Like from "./img/another like.svg";
import { useLike } from "../../context/LikeContext";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const [isCoffeeLike, setIsCoffeeLike] = useState(false);
  const { likeCoffee, plusLikeCoffee } = useLike();
  console.log(likeCoffee);
  const { addProductToCoffeeCart, deleteProductInCoffeeCart } = useCoffeeCart();
  const navigate = useNavigate();

  // Проверяем, есть ли данный элемент в списке лайков при монтировании компонента
  useEffect(() => {
    // Преобразуем значение likeCoffee в массив, если оно не является массивом
    setIsCoffeeLike(Array.isArray(likeCoffee) && likeCoffee.includes(elem.id));
  }, [likeCoffee, elem.id]);

  const handleClick = () => {
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addProductToCoffeeCart(elem);
    alert("Confirm action: Product is in cart ");
  };

  const handleLikeClick = () => {
    const updatedLikeCoffee = isCoffeeLike
      ? likeCoffee.filter((id) => id !== elem.id)
      : [...(Array.isArray(likeCoffee) ? likeCoffee : []), elem.id];
    setIsCoffeeLike(!isCoffeeLike);
    plusLikeCoffee(updatedLikeCoffee);
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
            onClick={handleLikeClick}
          />
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
