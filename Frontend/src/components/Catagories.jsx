import React from 'react'
import { catagories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Catagories = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mt-25'>

        <p className='text-2xl md:text-3xl font-medium mt-25 mb-5'>Categories</p>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-25 gap-6'>

            {
                catagories.map((catagory,index)=>(

                <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center' 
                                style={{backgroundColor:catagory.bgColor }}
                                onClick={()=>{navigate(`/products/${catagory.path.toLowerCase()}`);
                                                scrollTo(0,0)}}>
                    <img src={catagory.image} alt={catagory.text} className='group-hover:scale-110 transition max-w-28' />
                    <p className='text-sm font-medium'>{catagory.text}</p>
                </div>

                ))
            }

            

        </div>
      
    </div>
  )
}

export default Catagories
