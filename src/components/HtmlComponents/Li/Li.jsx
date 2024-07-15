// React
import React from 'react'

/**
A reusable component for displaying lis with internationalization support.
@param {Object} props - The props object for the Li component.
@param {string} props.className - The CSS class name for the li element.
@param {string} props.children - The text content of the li.
@returns {JSX.Element} - A React JSX element representing the li.
*/
const Li = (props) => {

  return (
    <li 
      {...props}
    />
  )
}

export default Li
