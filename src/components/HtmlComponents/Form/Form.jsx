// React
import React from 'react'

/**
A reusable component for displaying forms with internationalization support.
@param {Object} props - The props object for the form component.
@param {string} props.className - The CSS class name for the form element.
@param {string} props.children - The text content of the form.
@param {function} props.onClick - The function to be called when the form is clicked.
@returns {JSX.Element} - A React JSX element representing the form.
*/
const Form = ( props ) => {

  return (
    <form 
      {...props}
    />
  )
}

export default Form
