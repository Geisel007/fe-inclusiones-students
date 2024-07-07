// React
import React, { createContext, useState }  from "react"

const LoadingContext = createContext([null, () => null])

/**
 * Loading provider component context.
 * @param {object} props - Component props.
 * @returns {JSX.Element} Loading provider component.
 */
const LoadingProvider = (props) => {
  const [showLoading, setShowLoading] = useState(false)

  return (
    <LoadingContext.Provider 
      value={[showLoading, setShowLoading]} 
    >
      {props.children}
    </LoadingContext.Provider >
  )
}

export {
  LoadingContext,
  LoadingProvider
}