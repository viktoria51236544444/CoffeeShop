import React from "react";
import logo from "./assets/logo (1).png";
import registration from "./assets/mdi-light_account.png";
import shoping from "./assets/ph_shopping-cart-light.png";
import "./aidana.scss";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={logo} alt="" />
        <div className="nav-div">
          <img className="nav__img" src={registration} alt="" />
          <img className="nav__img cart shake" src={shoping} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
