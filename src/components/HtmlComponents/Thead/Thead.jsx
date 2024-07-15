// React
import React, { forwardRef } from 'react'

/**
 * A reusable component for displaying tables with custom styles.
 * @param {Object} props.className - An object containing CSS styles for the thead.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the thead.
 * @returns {JSX.Element} - A React JSX element representing the thead.
 */
const Thead = forwardRef((props, ref) => {

  return (
    <thead 
      ref={ref}
      {...props}
    />
  )
})

export default Thead
