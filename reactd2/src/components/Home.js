import React from 'react'
import MainView from './MainView'
import CustomCarousel from './Carousel'
import CustomCards from './CardHolder'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../App'
import '../styles/navbar.css'

function Home() {
  console.log("Home")
  const navigate = useNavigate();
  const name = useContext(context);

  return (
    <div className='text-center'>
      {name.name !== "Unknown" ?
        <div>
          <MainView />
          <CustomCarousel />
          <h1 className='text-white text-center p-4'>---Horror Library---</h1>
          <CustomCards />
          <Button variant="danger" type='button' className='my-4' onClick={(e) => {
            console.log("setting unknown")
            name.setName("Unknown")
            navigate(`/`)
          }}>Logout</Button>
        </div>
        :
        <div>
          <h1 className='text-white horror_text'>Please log in to see the website contents</h1>
          <Button variant="danger" type='button' className='my-4' onClick={(e) => {
            navigate(`/`)
          }}>Back</Button>
        </div>
      }
    </div>
  )
}

export default Home