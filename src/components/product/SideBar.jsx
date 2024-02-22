import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./product.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate;
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <form className="categories_side">
        {categories.map((elem) => (
          <button
            type="button"
            key={elem.id}
            onClick={() => fetchByParams("category", elem.name)}
          >
            {elem.name}
          </button>
        ))}
      </form>
    </div>
  );
};

export default SideBar;
// import React, { useEffect, useState } from "react";
// import "./product.scss";

// const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div
//       className={`burger-menu ${isOpen ? "clicked" : "unclicked"}`}
//       onClick={toggleMenu}
//     >
//       <div className="burger-bar"></div>
//       <div className="burger-bar"></div>
//       <div className="burger-bar"></div>
//       <div className={`menu ${isOpen ? "visible" : "hidden"}`}></div>
//     </div>
//   );
// };

// export default SideBar;
