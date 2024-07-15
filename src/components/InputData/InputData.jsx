// React
import React, { forwardRef } from 'react'
// Utils
import { classes } from '../../global/HandleClassnames'
// Components 
import Input from '../HtmlComponents/Input/Input'

// Styles
import './InputData.styles.css'

/**
A reusable component for displaying an input field with custom styles.
@param {string} props.type - The type of input field (e.g. "text", "email", "password").
@param {React.RefObject} props.inputField - A reference object to the input field.
@returns {JSX.Element} - A React JSX element representing the input field.
*/
const InputData = forwardRef(({ 
    className, 
    onChange, 
    placeholder, 
    type, 
    ...rest 
  }, 
    ref
  ) => {
    
  return (
    <Input
      type={type}
      className={classes(['inputForm', className])}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      {...rest}
    />
  )
})

export default InputData
