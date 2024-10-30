import React, { useState } from 'react'
import {FaSearch} from  "react-icons/fa"
import "./style.css"
const Hidden_Search = () => {
   const [data,setData] = useState(false)
   const [bg,setBg] = useState("white")

   const handleClick= (e) =>{
    setBg("#1a1a1a")
    if (e.target.className === "container") {
        setData(false)
        setBg("white")
    }

   }
  return (
    <section onClick={handleClick} className='container' style={{background:bg}}>

        {data ? (
            <input type="text" placeholder='Search...'  />
        ) : (
            <FaSearch style={{fontSize:"30px"}} onClick={()=>setData(true)} />
        )}
        
    </section>
  )
}

export default Hidden_Search