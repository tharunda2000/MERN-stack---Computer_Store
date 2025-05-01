import React from 'react'
import MainBanner from '../components/MainBanner'
import Catagories from '../components/Catagories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className='mt-10 '>
      <MainBanner/>
      <Catagories/>
      <BestSeller/>
      <BottomBanner/>
      <Newsletter/>
    
    </div>
  )
}

export default Home
