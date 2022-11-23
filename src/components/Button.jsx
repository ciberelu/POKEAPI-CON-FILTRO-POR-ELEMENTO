import "./Button.css"

import React from 'react'

function Buscar({click, name}) {
  return (
    <button
      onClick={click}
      
    >{name}</button>
  )
}

export default Buscar