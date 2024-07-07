// React
import React, { createContext, useState }  from 'react'

const UserContext = createContext([null, () => null])

/**
 * User provider component context.
 * @param {object} props - Component props.
 * @returns {JSX.Element} User provider component.
 */
const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInformation')) )

  return (
    <UserContext.Provider 
      value={[user, setUser]} 
    >
      {props.children}
    </UserContext.Provider >
  )
}

export {
  UserContext,
  UserProvider
}
