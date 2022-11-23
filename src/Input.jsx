import "./Input.css"

function Input({handleBuscarNombre, placeholder}) {

  return (
    
    <input 
    type="text"
    placeholder={placeholder}
    onChange={handleBuscarNombre}
    />
  )
}

export default Input