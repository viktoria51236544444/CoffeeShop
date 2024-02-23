import React, { useEffect, useState } from "react";
import logo from "./assets/logo (1).png";
import registration from "./assets/mdi-light_account.png";
import shoping from "./assets/ph_shopping-cart-light.png";
import { NavLink } from "react-router-dom";
import { useCoffeeCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Navbar = () => {
  const { addProductToCoffeeCart, getProductsCountInCoffeeCart } =
    useCoffeeCart();
  const { likeCoffee } = useProducts();
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    setBadgeCount(getProductsCountInCoffeeCart());
  }, [addProductToCoffeeCart]);

  // const handleLikeClick = () => {
  //   plusLikeCoffee();
  // };

  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={logo} alt="" />
        <div className="nav-div">
          <IconButton size="large" color="inherit">
            <Badge badgeContent={likeCoffee} color="success">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          <img className="nav__img" src={registration} alt="" />
          <NavLink to={"/cart"} className="cart-link">
            <div className="cart-container">
              <img className="nav__img cart shake" src={shoping} alt="" />
              {badgeCount > 0 && (
                <span className="cart-badge">{badgeCount}</span>
              )}
            </div>
          </NavLink>
          <button>связаться с нами</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
