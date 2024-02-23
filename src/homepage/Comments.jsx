import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "./assets/menu-img/left-bean-big.png";
const Comments = () => {
  const navigate = useNavigate();

  const handledClick = () => {
    navigate("/products");
  };

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [replyIndex, setReplyIndex] = useState(null);
  const [replyName, setReplyName] = useState("");
  const [replyComment, setReplyComment] = useState("");

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

  const handleDelete = (commentIndex, replyIndex) => {
    if (replyIndex !== undefined) {
      const updatedReplies = [...commentsList[commentIndex].replies];
      updatedReplies.splice(replyIndex, 1);

      const updatedCommentsList = [...commentsList];
      updatedCommentsList[commentIndex].replies = updatedReplies;

      setCommentsList(updatedCommentsList);
    } else {
      const updatedCommentsList = [...commentsList];
      updatedCommentsList.splice(commentIndex, 1);
      setCommentsList(updatedCommentsList);
    }

    localStorage.setItem("comments", JSON.stringify(commentsList));
  };

  const handleReply = (commentIndex) => {
    setReplyIndex(commentIndex);
    setReplyName("");
    setReplyComment(`Answered(a) ${commentsList[commentIndex].name}`);
  };

  const handleCancelReply = () => {
    setReplyIndex(null);
    setReplyName("");
    setReplyComment("");
  };

  const handleReplyNameChange = (event) => {
    setReplyName(event.target.value);
  };

  const handleReplyCommentChange = (event) => {
    setReplyComment(event.target.value);
  };

  const handleSubmitReply = (commentIndex) => {
    if (replyName.trim() === "" || replyComment.trim() === "") {
      alert("Заполните все поля!");
      return;
    }

    const repliedComment = {
      name: replyName,
      comment: replyComment,
      replyInfo: "",
    };
    const repliedName = commentsList[commentIndex].name;
    repliedComment.replyInfo = `Answered(a) ${repliedName}`;

    const updatedCommentsList = [...commentsList];
    updatedCommentsList[commentIndex].replies =
      updatedCommentsList[commentIndex].replies || [];
    updatedCommentsList[commentIndex].replies.push(repliedComment);

    setCommentsList(updatedCommentsList);
    localStorage.setItem("comments", JSON.stringify(updatedCommentsList));

    setReplyName("");
    handleCancelReply();
  };

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setCommentsList(JSON.parse(storedComments));
    }
  }, []);

  return (
    <div style={{ marginLeft: "7%" }}>
      <img className="img__big-bean" src={left} alt="" />
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
      ;
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
              rows="5"
              cols="50"
            ></textarea>
          </div>
          <button className="submit_bottun" onClick={handleSubmit}>
            Submit Review
          </button>
        </div>
        <div>
          {commentsList.map((item, commentIndex) => (
            <div key={commentIndex}>
              <div className="comments__p">
                <p>
                  {item.name} {item.replyInfo}
                </p>
                <p>{item.comment}</p>
              </div>
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  marginLeft: "10%",
                }}
                className="submit_bottun"
                onClick={() => handleDelete(commentIndex)}
              >
                Delete comment
              </button>
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  marginLeft: "1%",
                  marginTop: "0.3%",
                }}
                className="submit_bottun"
                onClick={() => handleReply(commentIndex)}
              >
                Reply to comment
              </button>
              {replyIndex === commentIndex && (
                <div className="input__comments">
                  <div>
                    <input
                      style={{ marginTop: "1%" }}
                      type="text"
                      placeholder="Name"
                      className="input__comments1"
                      value={replyName}
                      onChange={handleReplyNameChange}
                    />
                  </div>
                  <div>
                    <textarea
                      style={{ marginTop: "0.5%" }}
                      className="input__comment2"
                      placeholder="Enter your answer"
                      onChange={handleReplyCommentChange}
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                  <button
                    style={{ marginLeft: "20px" }}
                    className="submit_bottun"
                    onClick={() => handleSubmitReply(commentIndex)}
                  >
                    Send reply
                  </button>
                  <button
                    style={{ marginLeft: "20px" }}
                    className="submit_bottun"
                    onClick={handleCancelReply}
                  >
                    Cancel reply
                  </button>
                </div>
              )}
              {item.replies && (
                <div style={{ marginLeft: "10%", marginBottom: "4.5%" }}>
                  {item.replies.map((reply, replyIndex) => (
                    <div key={replyIndex} className="comments__p reply">
                      <p style={{ fontSize: "13px" }}>
                        {reply.name} {reply.replyInfo}
                      </p>
                      <p>{reply.comment}</p>
                      <button
                        style={{ marginLeft: "-1.3%", marginTop: "-0.7%" }}
                        className="submit_bottun"
                        onClick={() => handleDelete(commentIndex, replyIndex)}
                      >
                        Delete reply
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comments;
