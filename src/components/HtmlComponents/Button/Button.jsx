// React
import React from 'react'

/**
A reusable component for displaying buttons with internationalization support.
@param {Object} props - The props object for the button component.
@param {string} props.className - The CSS class name for the button element.
@param {string} props.children - The text content of the button.
@param {function} props.onClick - The function to be called when the button is clicked.
@returns {JSX.Element} - A React JSX element representing the button.
*/
const ButtonHtml = ( props ) => {

  return (
    <button 
      {...props}
    />
  )
}

export default ButtonHtml
