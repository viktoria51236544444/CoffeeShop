import React, { useEffect, useState } from "react";
import { useCoffeeCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Comments = () => {
  const navigate = useNavigate();
  const handledClick = () => {
    navigate("/products");
  };
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Заполните все поля!");
      return;
    }

    const newComment = { name, comment };
    const newCommentsList = [...commentsList, newComment];
    setCommentsList(newCommentsList);

    localStorage.setItem("comments", JSON.stringify(newCommentsList));

    setName("");
    setComment("");
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setCommentsList(JSON.parse(storedComments));
    }
  }, []);

  return (
    <div style={{ marginLeft: "7%" }}>
      <div className="lavazza">
        <div className="lavazza__img">
          <img
            style={{ marginTop: "50px", borderRadius: "10px" }}
            src="https://oe.kg/upload/resize_cache/iblock/ada/570_362_0/adac3cbf44e449efd02d1a94d9655c32.jpeg"
            alt=""
          />
        </div>
        <div>
          <div className="Lavazza__cold-p">
            <p>
              Кофе в зернах Lavazza "Gold Selection", средней обжарки, 1000 гр
              <hr />
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "-2%" }}>Цена: $200</p>
              <button onClick={handledClick} className="card__buy">
                Купить
              </button>
            </div>
          </div>
          <div>
            <div className="block11">
              <p style={{ marginLeft: "12%" }}>Бренд:</p>
              <p style={{ marginLeft: "24%" }}>Lavazza</p>
            </div>
            <div className="block12">
              <p style={{ marginLeft: "12%" }}>Вес:</p>
              <p style={{ marginLeft: "28%" }}>1кг</p>
            </div>
            <div className="block13">
              <p style={{ marginLeft: "12%" }}>Вид упаковки:</p>
              <p style={{ marginLeft: "13%" }}>Вакуумная упаковка</p>
            </div>
            <div className="block14">
              <p style={{ marginLeft: "12%" }}>Сорт зерна:</p>
              <p style={{ marginLeft: "16.5%" }}>70% Арабика, 30% Робуста</p>
            </div>
            <div className="block15">
              <p style={{ marginLeft: "12%" }}>Степень обжарки:</p>
              <p style={{ marginLeft: "8%" }}>Средняя</p>
            </div>
            <div className="block16">
              <p style={{ marginLeft: "12%" }}>Страна производства:</p>
              <p style={{ marginLeft: "3%" }}>Италия</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block17">
        <p>Описание:</p>
        <p>
          Превосходная смесь отборной бразильской Арабики со сладковатым
          привкусом и нежными оттенками меда и миндаля. Собран из лучших зерен
          Робусты с азиатских и центрально-американских плантаций.
        </p>
      </div>
      <div className="block_comments">
        <p className="block__comments-p">Отзывы:</p>
        <div className="input__comments">
          <div>
            <input
              type="text"
              placeholder="Имя"
              className="input__comments1"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <textarea
              className="input__comment2"
              placeholder="Введите ваш отзыв"
              value={comment}
              onChange={handleCommentChange}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <button className="submit_bottun" onClick={handleSubmit}>
            Отправить отзыв
          </button>
        </div>
        <div>
          {commentsList.map((item, index) => (
            <div className="comments__p" key={index}>
              <p>{item.name}</p>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
