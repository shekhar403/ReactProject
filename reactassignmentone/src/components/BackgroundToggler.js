import React from 'react'

function BackgroundToggler() {
  return (
    <div>
         <button onClick={changeBackgroundColor}>Change Background Color</button>
    </div>
  )
}

function changeBackgroundColor() {
    console.log(document.body.style.backgroundColor)
    if (document.body.style.backgroundColor === "red") {
      document.body.style.backgroundColor = "yellow";
    }
    else {
      document.body.style.backgroundColor = "red";
    }
  }

export default BackgroundToggler