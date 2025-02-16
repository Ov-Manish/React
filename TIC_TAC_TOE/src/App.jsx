import { useState } from 'react'
import './components/tic_tac_toe/Tic_Tac_Toe'
import './App.css'
import './index.css'
import Tic_Tac_Toe from './components/tic_tac_toe/Tic_Tac_Toe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Tic_Tac_Toe/>
    </>
  )
}

export default App
