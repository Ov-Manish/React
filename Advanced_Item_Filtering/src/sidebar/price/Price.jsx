import React from 'react'
import "./price.css"
import Input from '../../components/Input'
const Price = ({handleRadioInputs}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">
        Price
      </h2>
      <label className='sidebar-label-conatainer'>
          <input onChange={handleRadioInputs} type="radio" value='' name='test' />
          <span className='checkmark'></span>All
        </label>

        <Input
        handleradioinputs={handleRadioInputs}
        value={100}
        title="$0 - $100"
        name="test"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value={200}
        title="$100 - $200"
        name="test"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value={300}
        title="$200 - $300"
        name="test"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value={500}
        title="$300 - $500"
        name="test"
        />
    </div>
  )
}

export default Price