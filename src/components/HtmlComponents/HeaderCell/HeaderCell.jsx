// React
import React from 'react'

/**
 * @description Basic react Cell component for table header row implementing html element \<th />.
 * @param {Object} props - Component property object.
 * @param {(React.ReactElement|React.ReactElement[])} props.children - List of React Components that will be inside of the component.
 * @param {(String)} [props.className=''] - String with the css class of the component.
 * @param {String} [props.key] - String key identifier of the component.
 * @returns {React.Component}
*/
const HeaderCell = (props) => {
  const { className } = props
  return (
    <th
      {...props}
      className={className}
    />
  )
}

export default HeaderCell
