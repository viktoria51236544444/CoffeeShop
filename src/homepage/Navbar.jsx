import React, { useEffect, useState } from "react";
import logo from "./assets/logo (1).png";
import registration from "./assets/mdi-light_account.png";
import shoping from "./assets/ph_shopping-cart-light.png";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useCoffeeCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import { Badge, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import "./aidana.scss";
import { useLike } from "../context/LikeContext";
import ModalComponent from "./ModalComponent";
import map from "./assets/map-img/6555118.png";

import micpicture from "../homepage/assets/kisspng-voice-over-google-voice-microphone-sound-change-vo-mic-icon-5b4f9f51337303.1524658615319447852107.jpg";
import { useAuth } from "../context/AuthContext";
import { ADMIN } from "../helpers/const";
const { webkitSpeechRecognition } = window;

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { categories, getCategories, fetchByParams, getProducts } =
    useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

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
  const { likeCoffee } = useLike();

  const likeCount = Array.isArray(likeCoffee) ? likeCoffee.length : 0;

  // ! Voice search start
  function startDictation() {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
      let recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function (e) {
        const transcript = e.results[0][0].transcript;

        document.getElementById("transcript").value = transcript.toLowerCase(); // Отображение текста речи в инпуте
        setSearch(transcript); // Обновление состояния search
        console.log(transcript);
        recognition.stop();
      };

      recognition.onerror = function (e) {
        recognition.stop();
      };
    }
  }

  const handleMicClick = (e) => {
    // e.preventDefault();
    startDictation();
    console.log("button clicked");
  };

  // ! Voice search finish

  // !Auth
  const { user, handleLogOut } = useAuth();
  const isAdmin = user && user === ADMIN;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAccountClicked, setIsAccountClicked] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    handleLogOut();
    handleClose(); // Закрываем меню после выхода
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = () => {
    handleClose(); // Закрываем меню при выборе пункта
  };

  const handleOutsideClick = (event) => {
    if (anchorEl && !anchorEl.contains(event.target)) {
      handleClose(); // Закрываем меню при клике вне него
    }
  };

  return (
    // style={{ position: "absolute", zIndex: "1" }}
    <div className="navbar_main">
      <nav style={{ marginLeft: "-8%" }} className="nav">
        <img className="nav__logo" src={logo} alt="" />
        <div className="nav-div">
          <div
            style={{ marginLeft: "-230%" }}
            onClick={(e) => setIsActive(!isActive)}
          >
            <SearchIcon
              sx={{
                // paddingLeft: "-600px",
                color: "#f7e5da",
                width: "80",
                marginTop: "3px",
                cursor: "pointer",
              }}
            />
          </div>
          <IconButton
            sx={{ marginTop: "-2%" }}
            size="large"
            color="inherit"
            className="like-icon-button"
          >
            <Badge badgeContent={likeCount}>
              <FavoriteIcon color="error" />
            </Badge>
          </IconButton>
          <NavLink to={"/favorite"}>
            <img
              style={{ width: "35px", height: "35px", marginTop: "-5px" }}
              src="https://cdn.icon-icons.com/icons2/2309/PNG/512/star_favourite_icon_141889.png"
              alt=""
            />
          </NavLink>

          <div>
            <img
              onClick={openModal}
              style={{ width: "30px", height: "30px" }}
              src={map}
              alt=""
            />

            <ModalComponent isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>

          <NavLink to={"/cart"}>
            <div className="cart-container">
              <img className="nav__img cart shake" src={shoping} alt="" />
              {badgeCount > 0 && (
                <span className="cart-badge">{badgeCount}</span>
              )}
            </div>
          </NavLink>
        </div>
        <div style={{ marginLeft: "-60%" }} className="nav_menu_">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "600px",
            }}
          >
            <Link style={{ textDecorationLine: "none" }} to={"/"}>
              <span>Home</span>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to={"/menu"}>
              <span>Menu</span>
            </Link>
            <Link style={{ textDecorationLine: "none" }} to={"./products"}>
              <span>Products</span>
            </Link>
            <Link
              style={{
                textDecorationLine: "none",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => setIsAccountClicked(!isAccountClicked)} // При клике на "Your Account" переключаем состояние
            >
              <span style={{ marginLeft: "100px", paddingTop: "0px" }}>
                {user ? `Hello, ${user.email}` : "Hello, Guest"}
              </span>
              <img className="nav__img" src={registration} alt="" />
            </Link>
            {user && ( // Показываем Log out, если пользователь авторизован
              <div onClick={handleLogOut}>
                <span
                  className="user_menu"
                  style={{
                    textDecorationLine: "none",
                    border: "none",
                    backgroundColor: "none",
                  }}
                  onClick={handleMenuItemClick}
                >
                  Log out
                </span>
              </div>
            )}

            {!user &&
              isAccountClicked && ( // Показываем элементы Register и Log in, если состояние isAccountClicked равно true и пользователь не авторизован
                <div>
                  <NavLink>
                    <Link
                      className="link_authentication"
                      style={{
                        textDecorationLine: "none",
                        ":hover": { textDecoration: "none" },
                      }}
                      to="/register"
                      onClick={handleMenuItemClick}
                    >
                      <span className="user_menu">Register</span>
                    </Link>
                    <Link
                      style={{ textDecorationLine: "none" }}
                      to="/login"
                      onClick={handleMenuItemClick}
                    >
                      <span className="user_menu">Log in</span>
                    </Link>
                  </NavLink>
                </div>
              )}
          </div>
        </div>
      </nav>
      ;
      <div>
        {isActive && (
          <div className="for_search">
            <input
              id="transcript"
              placeholder="Search..."
              type="search"
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button onClick={handleMicClick}>
              <img
                style={{
                  width: "26px",
                  height: "26px",
                  backgroundColor: "none",
                  borderRadius: "40px",
                }}
                src={micpicture}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
