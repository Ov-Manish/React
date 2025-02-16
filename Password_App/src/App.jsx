import { useCallback, useEffect, useState ,useRef} from 'react'



function App() {
  const [length, setLenght] = useState(8);
  const [number,setNumber] = useState(false);
  const [character,setCharacter] = useState(false);
  const [Password,setPassword] = useState("");

  // Using useRef hook 
  const passwordReference = useRef(null) 

  const passwordGenerator = useCallback(()=>{
    let currentPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str+="0123456789"
    }
    if (character) {
      str+="~`!@#$%^&*()_-+={}[]|:;<>,.?/"
    }

    for (let i = 0; i <length; i++) {
      let pass= Math.floor(Math.random()*str.length)
      currentPassword+=str.charAt(pass)
    }
    setPassword(currentPassword)
    
  },[length,number,character,setPassword])

  const handleCopy =()=>{

    passwordReference.current.select()
    window.navigator.clipboard.writeText(Password);

  }
  
  useEffect(()=>{
    passwordGenerator();
  },[length,number,character,passwordGenerator])


  return (
    <>
    <div className='  rounded-3xl py-30'>
      <h1>Password-Generator</h1>
      <div className=' text-5xl flex items-center justify-center shadow rounded-3xl overflow-hidden mb-4'>
        <input className='bg-white mt-3 border-none outline-none py-1 px-3 rounded-l-2xl' type="text" value={Password} readOnly ref={passwordReference}/>
        <button className='bg-purple-500 px-3 py-3 mt-3 shrink-0 outline-none cursor-pointer rounded-r-2xl' onClick={handleCopy}>Copy</button>
      </div>

      {/* bottom */}

      <div className=' flex items-center text-purple-500 text-3xl justify-center gap-10 p-2 mt-10'>
        <input onChange={(e)=>{setLenght(e.target.value)}} className=' outline-none accent-purple-500 w-83 h-6 cursor-pointer' type="range" value={length} min={8} max={16}/>
        <label > length : {length}</label>
        <label > 
        <input 
          defaultChecked={number} 
          className='w-6 h-6 cursor-pointer accent-purple-500' 
          type="checkbox" 
          onChange={()=>{setNumber((prev)=>!prev)
            console.log(number);
            
           }}/>Number
        </label>
        <label > 
        <input 
          defaultChecked={character}
          className='w-6 h-6 cursor-pointer  accent-purple-500' 
          type="checkbox"
          onChange={()=>{setCharacter((prev)=>!prev)
          console.log(character);
          
         }}
        />Characters
        </label>
       
        
      </div>
    </div>
    </>
  )
}

export default App
