import React from 'react'
import { useProducts } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({elem}) => {
    const {deleteProduct} = useProducts();
    const navigate = useNavigate()
  return (
   <form>
    <img src={elem.img} alt="" />
    <p>{elem.title}</p>
    <p>{elem.description}</p>
    <p>{elem.category}</p>
    <button onClick={()=> deleteProduct(elem.id)} >DELETE</button>
    <button onClick={()=>navigate(`/edit/${elem.id}`)}>EDIT</button>
   </form>
  )
}

export default ProductCard
