import React from 'react'

const Button = ({onAdd, children}) => {
  return (
    <button onClick={onAdd}>{children}</button>
  )
}

export default Button
