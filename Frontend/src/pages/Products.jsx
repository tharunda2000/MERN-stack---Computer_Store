import React, { useEffect,useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const Products = () => {


const [filteredProducts,setFilteredProducts] = useState([])
const {searchQuery,setSearchQuery,products} = useAppContext()


useEffect(()=>{
  if(searchQuery.length>0){
    setFilteredProducts(products.filter(
      product=> product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ))

  }else{
    setFilteredProducts(products)
  }
},[products,searchQuery])

  return (
    <div className='flex flex-col mt-16'>
        <div className='flex flex-col items-start w-max'>
            <p className='text-3xl font-medium uppercase'>All Products</p>
            <div className='w-16 h-1 mt-1.5 bg-primary rounded-full'></div>
        </div>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6 gap-3 md:gap-6  mt-15'>
          {
            filteredProducts.filter((product)=>product.stock>0).map((product,index)=>(

              <ProductCard key={index} product={product}></ProductCard>

            ))
          }

        </div>
      
    </div>
  )
}

export default Products
