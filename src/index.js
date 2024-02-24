import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import AuthContext from "./context/AuthContext";
import LikeContext from "./context/LikeContext";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthContext>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductContext>
          <CartContext>
            <LikeContext>
              <App />
            </LikeContext>
          </CartContext>
        </ProductContext>
      </Suspense>
    </AuthContext>
  </BrowserRouter>
);
