import React from 'react'
import Drop_Down from './components/Drop_Down'
import {accordionData} from './components/data.js'
const App = () => {
  return (
    <div>
      {accordionData.map(({title,content})=>(
        <Drop_Down  title={title} content={content} />
      ))}
    </div>
  )
}

export default App