import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>

        <img src={assets.mainBanner} alt="" className='w-full hidden md:block rounded-lg'/>
        <img src={assets.smallBanner} alt="" className='w-full  md:hidden rounded-lg z-40'/>

        <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-5 px-4 ml:pl-18 lg:pl-24 text-white md:text-black'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>GamersStreet: Where Every Gamer Finds Their Perfect Powerhouse.</h1>
        

        <div className='flex items-center mt-6 font-medium'>

          <Link to={'/products'} className='group items-center gap-2 px-7 md:px-9 py-3 bg-[#aa0101d2] hover:bg-[#aa0101] transition rounded text-white cursor-pointer'>
          Shop Now
          <i className="ri-arrow-right-line md:hidden transition group-focus:translate-x-1"></i>
          </Link>

          <Link to={'/products'} className='group hidden md:flex items-center gap-2 px-9 py-3  hover:text-amber-900 cursor-pointer'>
          Explore deals
          <i className=" transition group-hover:translate-x-1"></i>
          </Link>
          
        </div>

        </div>
      
    </div>
  )
}

export default MainBanner
