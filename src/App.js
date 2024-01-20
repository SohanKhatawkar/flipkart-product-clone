import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProductDetails from './pages/product-details'
import ProductListing from './pages/product-listing'
import Breadcrumbs from './components/Breadcrumbs'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        Hello back to track now
        {/* breadcrumbs */}
        <Breadcrumbs />
        {/* routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductListing />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
