// React
import React from 'react'
import { RouterProvider } from 'react-router-dom'
// Contexts
import { UserProvider } from './contexts/user.context'
import { LoadingProvider } from './contexts/loading.context'
// Router
import Router from './configs/Router'

/**
App component that renders the React Router, is the root component of the application,
@returns {JS.Element} The JS code that represents the component.
*/
const App = () => {

  return (
    <UserProvider>
      <LoadingProvider>
        <RouterProvider router={Router} />
      </LoadingProvider>
    </UserProvider>
  )
}

export default App
