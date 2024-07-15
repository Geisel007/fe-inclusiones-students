// React
import React, { forwardRef } from 'react'

/**
A reusable component for displaying inputs with internationalization support.
@param {Object} props - The props object for the Input component.
@param {string} props.className - The CSS class name for the input element.
@param {string} props.children - The text content of the input.
@returns {JSX.Element} - A React JSX element representing the input.
*/
const Input = forwardRef((props, ref) => {

  return (
    <input
      ref={ref} 
      {...props}
    />
  )
})

export default Input
