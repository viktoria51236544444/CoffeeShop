import React, { useEffect, useState } from "react";
import "./product.scss";
import { useProducts } from "../../context/ProductContext";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="container_burger">
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div>
        <div className={menu_class}></div>
      </div>
    </div>
  );
};

export default SideBar;
