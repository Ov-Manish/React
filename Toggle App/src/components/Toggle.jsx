import React, { useState } from 'react'
import "./style.css"
const Toggle = () => {
    const [backgroundColor,setBackgroundColor] = useState("#1b1b1b")
    const [textColor,setTextColor] = useState("white")
    const [buttonStyle,setButtonStyle] = useState("black");

    const handleClick = () =>{
       setBackgroundColor(backgroundColor === '#1b1b1b' ? "white" : "#1b1b1b")
       setTextColor(textColor === "#1b1b1b" ? "gold" : "#1b1b1b")
       setButtonStyle(buttonStyle === "#1b1b1b" ? "gold" : "#1b1b1b")
    }
  return (
    <div style={{backgroundColor,color:textColor}}>
        <button style={{buttonStyle, color:textColor, border:`2px solid ${textColor}` }} onClick={handleClick}>
            {backgroundColor == '#1b1b1b' ? "Black Theme" : "White Theme"}
        </button>
        <section className='content'>
            <h1 >Welcome to Real World..</h1>
        </section>
    </div>
  )
}

export default Toggle