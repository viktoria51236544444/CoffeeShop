import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import "./product.scss";

const AddProducts = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    img: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  return (
    <div>
      <form className="add_container">
        <h2>ADD PRODUCT</h2>
        <input
          onChange={handleInput}
          name="title"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handleInput}
          name="description"
          type="text"
          placeholder="Description"
        />
        <input
          onChange={handleInput}
          name="price"
          type="number"
          placeholder="Price"
        />
        <input
          onChange={handleInput}
          name="img"
          type="url"
          placeholder="Image"
        />
        <button onClick={handleClick}>ADD</button>
      </form>
    </div>
  );
};

export default AddProducts;
