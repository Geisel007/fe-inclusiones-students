// React
import React from 'react'

/**
A reusable component for displaying uls with internationalization support.
@param {Object} props - The props object for the Ul component.
@param {string} props.className - The CSS class name for the ul element.
@param {string} props.children - The text content of the ul.
@returns {JSX.Element} - A React JSX element representing the ul.
*/
const Ul = (props) => {

  return (
    <ul 
      {...props}
    />
  )
}

export default Ul
