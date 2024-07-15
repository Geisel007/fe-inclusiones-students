// React
import React, { forwardRef } from 'react'

/**
A reusable component for displaying textareas with internationalization support.
@param {Object} props - The props object for the TextArea component.
@param {string} props.className - The CSS class name for the textarea element.
@param {string} props.children - The text content of the textarea.
@returns {JSX.Element} - A React JSX element representing the textarea.
*/
const TextArea = forwardRef((props, ref) => {

  return (
    <textarea 
      ref={ref}
      {...props}
    />
  )
})

export default TextArea
