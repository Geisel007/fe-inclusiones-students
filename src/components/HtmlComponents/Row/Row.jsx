// React
import React from 'react'

/**
 * @description Basic react Row component for table implementing html element \<tr />.
 * @param {Object} props - Component property object.
 * @param {(React.ReactElement|React.ReactElement[])} props.children - List of React Components that will be inside of the component.
 * @param {(String)} [props.className=''] - String with the css class of the component.
 * @param {String} [props.key] - String key identifier of the component.
 * @returns {React.Component}
*/
const Row = (props) => {
  const { className } = props
  return (
    <tr
      {...props}
      className={className}
    />
  )
}

export default Row
