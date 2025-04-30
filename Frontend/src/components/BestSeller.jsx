import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {

  const {products} = useAppContext()

  return (
    <div className='mt-16'>

        <p className='text-2xl md:text-3xl font-medium mt-5 mb-5'>Best Seller</p>
        <ProductCard product={products[0]}/>
      
    </div>
  )
}

export default BestSeller
