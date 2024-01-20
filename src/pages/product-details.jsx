import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res)
      })
  }, [id])

  return (
    <div>
      <hr />
      {product && (
        <div>
          <img
            className='product-image'
            src={product.thumbnail}
            alt='product'
          />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
