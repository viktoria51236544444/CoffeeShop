import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../context/ProductContext'

const EditProduct = () => {
    const {id} = useParams()
    const {getOneProduct, oneProduct, editProduct} = useProducts()
    const [product, setProduct] = useState({
      title: "",
      description: "",
      price: 0,
      img: ""
    })
    const handleInput = (e)=>{
      if(e.target.name === "price"){
        const obj={...product, [e.target.name]: Number (e.target.value)}
        setProduct(obj)
      }else{
        const obj = {...product, [e.target.name]: e.target.value };
        setProduct(obj)
      }
    }
    const handleClick = ()=>{
      editProduct(id, product )
    }
    useEffect(()=>{
      getOneProduct(id)
    },[])
    useEffect(()=>{
      if(oneProduct){
        setProduct(oneProduct)
      }
    }, [oneProduct])
  return (
    <form>
        <h2>EDIT PRODUCT</h2>
        <input value={product.title} onChange={handleInput} name='title' type="text" placeholder='Title' />
        <input value={product.description}  onChange={handleInput} name='description' type="text" placeholder='Descroption' />
        <input value={product.price} onChange={handleInput} name='price' type="number" placeholder='Price' />
        <input value={product.img}  onChange={handleInput} name='img' type="url" placeholder='Image' />
        <button onClick={handleClick}>SAVE</button>
      </form>
  )
}

export default EditProduct
