// React
import React, { forwardRef } from 'react'
// Utils
import { classes } from '../../global/HandleClassnames'
// Components 
import TextArea from '../HtmlComponents/TextArea/TextArea'

// Styles
import './Multiline.styles.css'

/**
A reusable component for displaying an input multiline field with custom styles.
@param {string} props.type - The type of input field (e.g. "text", "email", "password").
@param {React.RefObject} props.inputField - A reference object to the input field.
@returns {JSX.Element} - A React JSX element representing the input field.
*/
const Multiline = forwardRef(({ 
    id,
    className, 
    onChange, 
    placeholder, 
    type, 
    rows,
    columns,
    ...rest 
  }, 
    ref
  ) => {
    
  return (
    <TextArea
      type={type}
      className={classes(['inputMultiline', className])}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
      rows={rows}
      columns={columns}
      {...rest}
    />
  )
})

export default Multiline
