// React
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// Lang
import i18n from './i18n.config'

/**
@component React Router component for managing the application's routes.
@return {JSX.Element}
*/
const Router = createBrowserRouter([
  {
    path: '/',
    element: <div>{i18n.t('HELLO_STUDENTS')}</div>,
    errorElement: <div>{i18n.t('ERROR')}</div>
  }
])

export default Router
