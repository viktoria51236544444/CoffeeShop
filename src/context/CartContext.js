import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/const";
import { getLocalStorage } from "../helpers/function";

export const coffeeCarts = createContext();
const INIT_STATE = {
  coffeeCart: JSON.parse(localStorage.getItem("coffeeCart")),
  cartNum: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_COFFEE_CART:
      return { ...state, coffeeCart: action.payload };
    default:
      return state;
  }
};
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! GET_COFFEE_CART
  const getCoffeeCart = () => {
    let coffeeCart = getLocalStorage();
    if (!coffeeCart) {
      localStorage.setItem(
        "coffeeCart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      coffeeCart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_COFFEE_CART,
      payload: coffeeCart,
    });
  };

  // ! CREATE COFFEE CART
  const addProductToCoffeeCart = (coffee) => {
    let coffeeCart = getLocalStorage();
    if (!coffeeCart) {
      coffeeCart = {
        products: [],
        totalPrice: 0,
      };
    }
    letNewCoffeeProduct = {
      item: coffee,
      count: 1,
      subPrice: coffee.price,
    };
  };
  const values = {
    coffeeCart: state.coffeeCart,
    getCoffeeCart,
  };
  return <coffeeCarts.Provider value={values}>{children}</coffeeCarts.Provider>;
};
export default CartContext;
