import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
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
          id :uuidv4()
        }
      ))
    })

   return setInputVal("")
    
  }



  const removeTodo = (id) =>settodos(todo.filter((items)=>items.id !== id))
  return (
    <div className='container'>
      <h1>Todo</h1>
      <input type="text" placeholder='Enter your Item' value={inputval} onChange={(e)=>setInputVal(e.target.value)} />
      <button onClick={handleSubmit} >submit</button>


      <ul className='todos-list'>
        {todo.map(({text,id})=>(
          <li className='todo' key={id}>
            <span>
              {text} 
            </span>
          <button className='close' onClick={(e)=>removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo