// React
import React, { forwardRef } from 'react'

/**
 * A reusable component for displaying tables with custom styles.
 * @param {Object} props.className - An object containing CSS styles for the tbody.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the tbody.
 * @returns {JSX.Element} - A React JSX element representing the tbody.
 */
const Tbody = forwardRef((props, ref) => {

  return (
    <tbody 
      ref={ref}
      {...props}
    />
  )
})

export default Tbody
