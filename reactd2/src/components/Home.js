import React from 'react'
import MainView from './MainView'
import CustomCarousel from './Carousel'
import CustomCards from './CardHolder'

function Home() {
  console.log("Home")
  return (
    <div>
      <MainView />
     <CustomCarousel />
     <h1 className='text-white text-center p-4'>---Horror Library---</h1>
     <CustomCards />
    </div>
  )
}

export default Home