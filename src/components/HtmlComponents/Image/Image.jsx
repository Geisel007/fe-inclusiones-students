// React
import React from 'react'

/**

A reusable component for displaying images.
@param {string} props.src - The image source URL.
@param {string} props.alt - The alt text to be displayed if the image fails to load.
@param {string} props.className - An optional CSS class name for the image element.
@returns {JSX.Element} - A React JSX element representing the image.
*/
const Image = (props) => {

  return (
    <img 
      {...props}
    />
  )
}

export default Image
