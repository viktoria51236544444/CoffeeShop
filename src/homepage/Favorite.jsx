import React, { useEffect } from "react";
import { useBM } from "../context/FavoriteContext";
import { useParams } from "react-router-dom";

const Favorite = () => {
  const { bookmarks, deletePostFromBM } = useBM();

  return (
    <div className="container_favorite">
      <h2 className="favorite">Favorite</h2>
      <div
        className="font"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {bookmarks.map((elem) => (
          <div
            key={elem.id}
            style={{
              height: 380,
              boxShadow: "none",
              margin: "40px 40px",
              width: "30vw",
              border: "1px solid grey",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <div style={{ height: 240, borderRadius: 4, overflow: "hidden" }}>
              {elem.img && (
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={elem.img}
                  alt={elem.title}
                />
              )}
            </div>
            <div style={{ padding: "20px 5px 0 5px" }}>
              <div style={{ fontSize: "25px", fontWeight: "700" }}>
                {elem.title}
              </div>
              <div
                style={{
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "700",
                  marginTop: "7px",
                }}
              >
                {elem.description}
              </div>
              <button
                style={{
                  marginTop: "8px",
                  border: "1px solid black",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => deletePostFromBM(elem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
