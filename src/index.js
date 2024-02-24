import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import FavoriteContext from "./context/FavoriteContext";
import LikeContext from "./context/LikeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <FavoriteContext>
          <CartContext>
            <App />
          </CartContext>
        </FavoriteContext>
        <CartContext>
          <LikeContext>
            <App />
          </LikeContext>
        </CartContext>
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
