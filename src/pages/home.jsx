import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { Link } from 'react-router-dom'

const Home = () => {
  const [topProducts, setTopProducts] = useState([])
  const LIMIT = 6
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}`)
      .then((res) => res.json())
      .then((res) => {
        setTopProducts(res?.products || [])
      })
  }, [])

  return (
    <div>
      <h3>Top Selection</h3>
      <div className='product-grid'>
        {topProducts?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      <button type='button'>
        <Link to='/products'>View All Products</Link>
      </button>
    </div>
  )
}

export default Home
