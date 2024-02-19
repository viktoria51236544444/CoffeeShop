import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const productContext = createContext()
export const useProducts = () => useContext()

const ProductContext = ({children}) => {
  const navigate = useNavigate();
  const INIT_STATE ={
    products: [],
    oneProduct:{},
  }
  const reducer = (state = INIT_STATE, action) =>{
    switch(action.type){
      case ACTIONS.GET_PRODUCTS:
        return {...state, products: action.payload};

      case ACTIONS.GET_ONE_PRODUCT:
        return { ...state, oneProduct: action.payload };
    }
  }
  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  //! CREATE
  const addProduct = async (newProduct) =>{
    await axios.post(API, newProduct);
    navigate('/products')
  }

  //! GET_Product
  const getProducts = async ()=>{
    const {data} = await axios(API)
    dispatch({
      type: ACTIONS.GET_PRODUCTS, 
      payload: data
    })
  }

  //! DELETE
 const deleteProduct = async(id)=>{
  await axios.delete(`${API}/${id}`)
  getProducts()
}

  // ! GET_One_Product
  const getOneProduct = async(id)=>{
    const {data} = await axios (`${API}/${id}`)
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT,
      payload: data,
    })
  }

// ! EDIT
const editProduct = async(id, editedProduct)=>{
  await axios.patch(`${API}/${id}`, editedProduct)
  navigate("/products")
}

  const values = {
   addProduct,
   getProducts,
   products: state.products,
   deleteProduct,
   getOneProduct,
   oneProduct: state.oneProduct,
   editProduct
  }
  return (
   <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
