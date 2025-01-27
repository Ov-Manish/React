import React from 'react'
import "./colors.css"
import Input from '../../components/Input'
const Colors = ({handleRadioInputs}) => {
  return (
    <div>
      <h2 className=''>Colors</h2>
      <label className='sidebar-label-conatainer'>
          <input onChange={handleRadioInputs} type="radio" value='' name='test' />
          <span className='checkmark all'></span>All
        </label>

        <Input
        handleradioinputs={handleRadioInputs}
        value="black"
        title="Black"
        name="test"
        color="black"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="white"
        title="White"
        name="test"
        color="white"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="green"
        title="Green"
        name="test"
        color="green"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="blue"
        title="Blue"
        name="test"
        color="blue"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="red"
        title="Red"
        name="test"
        color="red"
        />
        
    </div>
  )
}

export default Colors