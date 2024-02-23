import React, { useEffect, useState } from "react";
import logo from "./assets/logo (1).png";
import registration from "./assets/mdi-light_account.png";
import shoping from "./assets/ph_shopping-cart-light.png";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useCoffeeCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import SearchIcon from "@mui/icons-material/Search";
import "./aidana.scss";
const Navbar = () => {
  const { categories, getCategories, fetchByParams, getProducts } =
    useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate;
  useEffect(() => {
    setSearchParams({
      q: search,
    });
    getProducts();
  }, [search]);
  useEffect(() => {
    getCategories();
  }, []);

  const { addProductToCoffeeCart, getProductsCountInCoffeeCart } =
    useCoffeeCart();
  const [badgeCount, setBadgeCount] = useState(0);
  useEffect(() => {
    setBadgeCount(getProductsCountInCoffeeCart());
  }, [addProductToCoffeeCart]);
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={logo} alt="" />
        <div className="nav-div">
          <div onClick={(e) => setIsActive(!isActive)}>
            <SearchIcon
              sx={{
                color: "#f7e5da",
                width: "80",
                marginTop: "3px",
                cursor: "pointer",
              }}
            />
          </div>

          <img
            className="nav__img"
            style={{ width: "35px", height: "35px", marginTop: "-3px" }}
            src="https://svgsilh.com/svg/2438744-ff9800.svg"
            alt=""
          />
          <NavLink>
            <img className="nav__img" src={registration} alt="" />
          </NavLink>

          <NavLink to={"/cart"}>
            <div className="cart-container">
              <img className="nav__img cart shake" src={shoping} alt="" />
              {badgeCount > 0 && (
                <span className="cart-badge">{badgeCount}</span>
              )}
            </div>
          </NavLink>
        </div>
        <div className="nav_menu_">
          <div>
            <Link style={{ textDecorationLine: "none" }} to={"/"}>
              <span>Home</span>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to={"/menu"}>
              <span>Menu</span>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to={"./products"}>
              <span>Product</span>
            </Link>
          </div>
        </div>
      </nav>
      {isActive && (
        <div className="for_search">
          <input
            placeholder="Search..."
            type="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      )}
      ;
    </header>
  );
};

export default Navbar;
