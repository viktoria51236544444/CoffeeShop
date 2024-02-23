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
              Coffee beans Lavazza "Gold Selection", medium roast, 1000 gr
              <hr />
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "-2%" }}>Price: $200.</p>
              <button onClick={handledClick} className="card__buy">
                Buy
              </button>
            </div>
          </div>
          <div>
            <div className="block11">
              <p style={{ marginLeft: "12%" }}>Brand::</p>
              <p style={{ marginLeft: "24%" }}>Lavazza</p>
            </div>
            <div className="block12">
              <p style={{ marginLeft: "12%" }}>Weight:</p>
              <p style={{ marginLeft: "23%" }}>1kg</p>
            </div>
            <div className="block13">
              <p style={{ marginLeft: "12%" }}>Type of packaging::</p>
              <p style={{ marginLeft: "7%" }}>Vacuum packaging</p>
            </div>
            <div className="block14">
              <p style={{ marginLeft: "12%" }}>Grain variety::</p>
              <p style={{ marginLeft: "14%" }}>70% Arabica, 30% Robusta</p>
            </div>
            <div className="block15">
              <p style={{ marginLeft: "12%" }}>Degree of roasting::</p>
              <p style={{ marginLeft: "7%" }}>Medium</p>
            </div>
            <div className="block16">
              <p style={{ marginLeft: "12%" }}>Country of manufacture:</p>
              <p style={{ marginLeft: "2%" }}>Italy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block17">
        <p>Description:</p>
        <p>
          A superb blend of selected Brazilian Arabica with a sweet flavor and
          delicate hints of honey and almonds. Harvested from the finest Robusta
          beans from Asian and Central American plantations.
        </p>
      </div>
      <div className="block_comments">
        <p className="block__comments-p">Testimonials:</p>
        <div className="input__comments">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input__comments1"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <textarea
              className="input__comment2"
              placeholder="Enter your review"
              value={comment}
              onChange={handleCommentChange}
              rows="4"
              cols="50"
            ></textarea>
          </div>
          <button className="submit_bottun" onClick={handleSubmit}>
            Submit Review
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
