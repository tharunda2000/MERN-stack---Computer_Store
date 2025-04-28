import React from 'react'
import MainBanner from '../components/MainBanner'
import Catagories from '../components/Catagories'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div className='mt-10 '>
      <MainBanner/>
      <Catagories/>
      <BestSeller/>
    
    </div>
  )
}

export default Home
