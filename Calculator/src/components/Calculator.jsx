import React, { useState } from 'react'
import "./style.css"
const Calculator = () => {
    const [inpuValue,setInpuValue] = useState("");

    const clear = () =>  setInpuValue("")
    const display = (value) =>setInpuValue(inpuValue + value)
    console.log(inpuValue);
    
    const calculate = () => setInpuValue(eval(inpuValue))
  return (
    <div>
        <form className='calculator'>
            <input className='value' type="text" value={inpuValue} />
            <span className='clear' onClick={()=>clear()}>C</span>

            <span onClick={()=>display("/")}>/</span>
            <span onClick={()=>display("*")}>*</span>
            <span onClick={()=>display("7")}>7</span>
            <span onClick={()=>display("8")}>8</span>
            <span onClick={()=>display("6")}>9</span>
            <span onClick={()=>display("-")}>-</span>
            <span onClick={()=>display("4")}>4</span>
            <span onClick={()=>display("5")}>5</span>
            <span onClick={()=>display("6")}>6</span>
            <span className='plus' onClick={()=>display("+")}>+</span>

            <span onClick={()=>display("1")}>1</span>
            <span onClick={()=>display("2")}>2</span>
            <span onClick={()=>display("3")}>3</span>
            <span onClick={()=>display("0")}>0</span>
            <span onClick={()=>display("00")}>00</span>
            <span onClick={()=>display(".")}>.</span>
            <span className='num equal' onClick={()=>calculate()}>=</span>
        </form>
    </div>
  )
}

export default Calculator