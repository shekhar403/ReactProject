import React from 'react'
import '../styles/mainview.css'

function MainView() {
  return (
    <div className='text-center'>
        <img className='w-100' src='https://wallpaperaccess.com/full/2847742.jpg' alt="main"></img>
        <h1 id='main_name' className='position-absolute text-white text-center d-inline' style={{left:"100px", right:"100px", bottom:"50px"}}>The Horror House</h1>
    </div>
  )
}

export default MainView