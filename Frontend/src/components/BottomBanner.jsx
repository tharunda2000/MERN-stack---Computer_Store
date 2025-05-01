import React from 'react'
import { assets,features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-45 flex mb-20'>
       <picture className="w-full md:w-1/2">
        <source srcSet={assets.lowerBanner} media="(min-width: 768px)" />
        <img src={assets.lowerBanner} alt="Banner" className="w-full h-auto object-cover mt-30 md:mt-7" />
      </picture>
      

      <div className='relative inset-0 flex flex-col items-center  md:items-end  pt-16 md:pt-0 md:pr-44 md:mt-34 '>

      <div className='flex-col-lg'>
        <h1 className='text-2xl md:text-5xl font-semibold mb-6 text-[#000000] '>Why Shop With Us?</h1>
        {features.map((feature,index)=>(
          <div key={index} className='flex items-center gap-4 mt-2'>
            <img src={feature.icon} alt={feature.title} className='w-9 md:11' />

            <div>

              <h3 className='text-lg md:text-2xl font-semibold'>{feature.title}</h3>
              <p className='text-gray-500/70 text-xs md:text-lg'>{feature.description}</p>
              
            </div>
            
            
          </div>
        ))}
        <div>
          
        </div>
      </div>
      

      </div>
      
    </div>
  )
}

export default BottomBanner
