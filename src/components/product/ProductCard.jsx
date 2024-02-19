import React from 'react'

const ProductCard = ({elem}) => {
  return (
    <div>
      <p>
      {elem.title}
      </p>
      <p>
        {elem.description}
      </p>
      <p>
        {elem.price}$
      </p>
      <img src={elem.img} alt="" />
    </div>
  )
}

export default ProductCard
