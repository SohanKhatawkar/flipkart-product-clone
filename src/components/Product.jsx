import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ id, thumbnail, title }) => {
  return (
    <div className='product-card' key={id}>
      <Link to={`/products/${id}`}>
        <img
          className='product-thumbnail'
          src={thumbnail}
          alt='product-thumbnail'
        />
        <h3>{title}</h3>
      </Link>
    </div>
  )
}

export default Product
