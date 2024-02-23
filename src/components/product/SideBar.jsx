import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./product.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

const SideBar = () => {
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

  return (
    <div>
      <form className="categories_side">
        <input
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        ;
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
