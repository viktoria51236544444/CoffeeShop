import React from "react";

import { useProducts } from "../../context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";
import { useBM } from "../../context/FavoriteContext";

const ProductCard = ({ elem }) => {
  const { addPostToBookmarks, checkPostInBm } = useBM();
  const { deleteProduct } = useProducts();
  const {
    addProductToCoffeeCart,
    checkProductInCoffeeCart,
    deleteProductInCoffeeCart,
  } = useCoffeeCart();
  const navigate = useNavigate();
  const handleClick = (e) => {
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
    e.preventDefault();
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addProductToCoffeeCart(elem);
  };

  const handleAddToBookmarks = (e) => {
    e.preventDefault();
    const postInBm = checkPostInBm(elem.id);
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
          <button
            onClick={handleAddToCart}
            sx={{
              backgroundColor: checkProductInCoffeeCart(elem.id) ? "black" : "",
              color: checkProductInCoffeeCart(elem.id) ? "white" : "",
            }}
          >
            Добавить в корзину
          </button>
          <button
            onClick={(e) => {
              // Вызываем функцию для добавления в закладки
              handleAddToBookmarks(e);

              // Получаем текущий массив из локального хранилища (если он существует)
              const existingBookmarks =
                JSON.parse(localStorage.getItem("bm")) || [];

              // Добавляем текущий элемент (elem) к массиву
              existingBookmarks.push(elem);

              // Сохраняем обновленный массив в локальное хранилище
              localStorage.setItem("bm", JSON.stringify(existingBookmarks));
            }}
          >
            Избранное
          </button>
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
            src="https://svgsilh.com/svg/2438744-ff9800.svg"
            alt=""
          />
        </div>
      </div>
    </form>
  );
};

export default ProductCard;
