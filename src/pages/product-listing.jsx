import React, { useEffect, useState } from 'react'
import Product from '../components/Product'

const ProductListing = () => {
  const [products, setProducts] = useState([])
  const LIMIT = 30
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res?.products || [])
      })
  }, [])

  return (
    <div>
      <h2>All Products</h2>

      <div className='product-grid'>
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListing
