import React, { useState, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./product.scss";
import { useCoffeeCart } from "../../context/CartContext";
<<<<<<< HEAD
import { useBM } from "../../context/FavoriteContext";
=======
import Like from "./img/another like.svg";
import { useLike } from "../../context/LikeContext";
>>>>>>> acc9deba50ec2e7f06c4c72f3b774b9ab0a2a607

const ProductCard = ({ elem }) => {
  const { addPostToBookmarks, checkPostInBm } = useBM();
  const { deleteProduct } = useProducts();
  const [isCoffeeLike, setIsCoffeeLike] = useState(false);
  const { likeCoffee, plusLikeCoffee } = useLike();
  console.log(likeCoffee);
  const { addProductToCoffeeCart, deleteProductInCoffeeCart } = useCoffeeCart();
  const navigate = useNavigate();
<<<<<<< HEAD
  const handleClick = (e) => {
=======

  // Проверяем, есть ли данный элемент в списке лайков при монтировании компонента
  useEffect(() => {
    // Преобразуем значение likeCoffee в массив, если оно не является массивом
    setIsCoffeeLike(Array.isArray(likeCoffee) && likeCoffee.includes(elem.id));
  }, [likeCoffee, elem.id]);

  const handleClick = () => {
>>>>>>> acc9deba50ec2e7f06c4c72f3b774b9ab0a2a607
    deleteProduct(elem.id);
    deleteProductInCoffeeCart(elem.id);
    e.preventDefault();
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addProductToCoffeeCart(elem);
<<<<<<< HEAD
  };

  const handleAddToBookmarks = (e) => {
    e.preventDefault();
    const postInBm = checkPostInBm(elem.id);
=======
    alert("Confirm action: Product is in cart ");
  };

  const handleLikeClick = () => {
    const updatedLikeCoffee = isCoffeeLike
      ? likeCoffee.filter((id) => id !== elem.id)
      : [...(Array.isArray(likeCoffee) ? likeCoffee : []), elem.id];
    setIsCoffeeLike(!isCoffeeLike);
    plusLikeCoffee(updatedLikeCoffee);
>>>>>>> acc9deba50ec2e7f06c4c72f3b774b9ab0a2a607
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
<<<<<<< HEAD
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
=======
          <button onClick={handleAddToCart}>Add to cart</button>
>>>>>>> acc9deba50ec2e7f06c4c72f3b774b9ab0a2a607
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
