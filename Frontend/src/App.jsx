import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast"
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import Products from './pages/Products'
import ProductCatagory from './pages/ProductCatagory'

const App = () => {

  const isSellerPath = useLocation().pathname.includes("seller");
  const {showLogin} = useAppContext()

  return (
    <div>

      {isSellerPath ? null : <NavBar/>}
      {showLogin ? <Login/> : null }

      <Toaster/>
      
      <div className={`${isSellerPath ? "":'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:catagory' element={<ProductCatagory/>}/>
        </Routes>
      </div>
      {!isSellerPath && <Footer/>}
      
    </div>
  )
}

export default App
