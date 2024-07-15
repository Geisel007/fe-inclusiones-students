// React
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// Pages
import Home from '../pages/Home/Home'
import ListRequest from '../pages/ListRequest/ListRequest'
import RequestForm from '../pages/RequestForm/RequestForm'
// Componentes
import Label from '../components/HtmlComponents/Label/Label'
// Lang
import i18n from './i18n.config'

/**
@component React Router component for managing the application's routes.
@return {JSX.Element}
*/
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Label>{i18n.t('ERROR')}</Label>
  },
  {
    path: '/new-request',
    element: <RequestForm/>,
    errorElement: <Label>{i18n.t('ERROR')}</Label>
  },
  {
    path: '/get-requests',
    element: <ListRequest/>,
    errorElement: <Label>{i18n.t('ERROR')}</Label>
  }
])

export default Router
