import { useState } from 'react'

import './App.css'

function App() {
  const [Colors, setColors] = useState("black")
 
  
  return (
    <>
     <h1 className={` text-black px-75 py-75 rounded-xl`} style={{backgroundColor : `${Colors}`}}>
      Hello Manish !
     </h1>
      <div className=' flex  justify-center  space-x-4 mt-3 '>

      <button onClick={handleClick => setColors("yellow") }>Yellow</button>
      <button onClick={handleClick => setColors("#64e764")}>Green</button>
      <button onClick={handleClick => setColors("white")} >White</button>
      <button onClick={handleClick => setColors("blue")}>Blue</button>
      <button onClick={handleClick => setColors("lavender")}>Lavender</button>
      <button onClick={handleClick => setColors("purple")}>Purple</button>
      <button onClick={handleClick => setColors("orange")}>Orange</button>
      <button onClick={handleClick => setColors("#ff748c")}>Pink</button>

      </div>
    </>
  )
}

export default App
