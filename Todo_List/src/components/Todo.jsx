import React, { useState } from 'react'
import  "./style.css"

const Todo = () => {

  const [todo,settodos] = useState([])
  const [inputval,setInputVal] = useState("")


  const  handleSubmit = () =>{
    if (inputval.trim() ==="") {
      return 
      
    }
    settodos((todo)=>{
      return todo.concat((
        {
          text : inputval,
          id : Math.floor(Math.random() * 10+3)
        }
      ))
    })

   return setInputVal("")
    
  }



  const removeTodo = (id) =>settodos(todo.filter((items)=>items.id !== id))
  return (
    <div className='container'>
      <h1>Todo</h1>
      <h1>Analyze it in the Morning</h1>
      <input type="text" placeholder='Enter your Item' value={inputval} onChange={(e)=>setInputVal(e.target.value)} />
      <button onClick={handleSubmit} >submit</button>


      <ul>
        {todo.map(({text,id})=>(
          <li key={id}>{text} 
          <button className='close' onClick={(e)=>removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo