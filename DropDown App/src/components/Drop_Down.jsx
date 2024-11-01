import React, { useState } from 'react'
import "../index.css"
const Drop_Down = ({title,content}) => {
     const[on,setOn] =  useState(false);

  return (
    <section className='accordion-card' key={Math.floor(Math.random())*10}>
        <div className='header' onClick={()=>setOn(!on)}>
          <div className='ttt'>{title}</div>
          <p className='icon' >{on ? "-" : "+"}</p>
        </div>
        <div className='content'>
          {on && <p className='card-info'>{content}</p>}
        </div>
    </section>
  )
}

export default Drop_Down