// React
import React from 'react'

/**
A reusable component for displaying spans with internationalization support.
@param {Object} props - The props object for the Span component.
@param {string} props.className - The CSS class name for the span element.
@param {string} props.children - The text content of the span.
@param {function} props.onClick - The function to be called when the span is clicked.
@returns {JSX.Element} - A React JSX element representing the span.
*/
const Span = ( props ) => {

  return (
    <span 
      {...props}
    />
  )
}

export default Span
