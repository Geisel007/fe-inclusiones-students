// React
import React from 'react'
import { useNavigate } from 'react-router-dom'
// Components
import View from '../../components/HtmlComponents/View/View'
import Label from '../../components/HtmlComponents/Label/Label'
import Button from '../../components/Buttons/Button/Button'
// Icons 
import ArrowForward from '../../assets/icons/arrow-forward.svg'
import Add from '../../assets/icons/add.svg'
// Lang
import i18n from '../../configs/i18n.config'

// Styles
import './Home.style.css'

/**
@file Home page component
*/
const Home = () => {

  const navigate = useNavigate()

  const onNavigate = (route) => {
    navigate('/' + route)
  }

  return (
    <View 
      className='home-container'
    >
      <Label
        className='h4'
      >
        {i18n.t('WELCOME_HOME_PAGE')}
      </Label>
      <View
        className='home-subcontainer'
      >
        <Button
          icon={Add}
          onClick={() => onNavigate('new-request')}
        >
          <Label
            className='h6'
          >
            {i18n.t('REQUEST_FORM')}
          </Label>
        </Button>
        <Button
          icon={ArrowForward}
          onClick={() => onNavigate('get-requests')}
        >
          <Label
            className='h6'
          >
            {i18n.t('LIST_MY_FORMS')}
          </Label>
        </Button>
      </View>
    </View>
  )
}

export default Home
