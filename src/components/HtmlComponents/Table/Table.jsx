// React
import React, { forwardRef } from 'react'

/**
 * A reusable component for displaying tables with custom styles.
 * @param {Object} props.className - An object containing CSS styles for the table.
 * @param {React.ReactNode} props.children - The child elements to be displayed inside the table.
 * @returns {JSX.Element} - A React JSX element representing the table.
 */
const Table = forwardRef((props, ref) => {

  return (
    <table 
      ref={ref}
      {...props}
    />
  )
})

export default Table
