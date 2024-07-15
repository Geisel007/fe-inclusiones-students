// React
import React from 'react'

/**
 * @description Basic react Cell component for table row implementing html element \<td />.
 * @param {Object} props - Component property object.
 * @param {(React.ReactElement|React.ReactElement[])} props.children - List of React Components that will be inside of the component.
 * @param {(String)} [props.className=''] - String with the css class of the component.
 * @param {String} [props.key] - String key identifier of the component.
 * @returns {React.Component}
*/
const Cell = (props) => {
  const { className } = props
  return (
    <td
      {...props}
      className={className}
    />
  )
}

export default Cell
