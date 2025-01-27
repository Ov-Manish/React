import { useState } from 'react'


function App() {
  

  const [counter, setCounter] = useState(0);

  const handleMaxCounter = () =>{
    console.log(" + Clicked");
    if(counter >= 20){
      return;
    }
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
    setCounter(prevCount => prevCount + 1);
  }

  const handleMinCounter = () =>{
    console.log(" - Clicked");
    if(counter < 1){
      return;
    }
    setCounter(counter -1);
  }

  return (
    <>
     <h1>Hi Manish</h1>

     <h2>counter : {counter}</h2>

     <button onClick={handleMaxCounter}>+</button>
     <button onClick={handleMinCounter}>-</button>
    </>
  )
}

export default App
