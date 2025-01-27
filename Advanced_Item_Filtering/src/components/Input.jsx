import React from 'react'

const Input = ({handleRadioInputs,value,title,name,color}) => {
  return (
    
    <label className='sidebar-label-conatainer'>
          <input type="radio" handleradioinputs={handleRadioInputs} name={name} value={value} />
          <span className='checkmark'  style={{backgroundColor : color}}></span>{title}
        </label>
    
  )
}

export default Input