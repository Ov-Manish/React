import React from 'react'
import "./category.css"
import Input from '../../components/Input'
const Category = ({handleRadioInputs}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
      <label className='sidebar-label-conatainer'>
          <input onChange={handleRadioInputs} type="radio" value='' name='test' />
          <span className='checkmark'></span>All
        </label>

        <Input
        handleradioinputs={handleRadioInputs}
        value="Sneakers"
        title="Sneakers"
        name="test"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="Flats"
        title="Flats"
        name="test"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="Sandals"
        title="Sandals"
        name="test"
        />
        <Input
        handleradioinputs={handleRadioInputs}
        value="Heels"
        title="Heels"
        name="test"
        />
      </div>
    </div>
  )
}

export default Category