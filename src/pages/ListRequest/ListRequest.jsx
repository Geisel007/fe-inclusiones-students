// React
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// Components
import View from '../../components/HtmlComponents/View/View'
import InputData from '../../components/InputData/InputData'
import Label from '../../components/HtmlComponents/Label/Label'
import Button from '../../components/Buttons/Button/Button'
import Card from './Card/Card'
// Icons
import HomeIcon from '../../assets/icons/home.svg'
// Lang
import i18n from '../../configs/i18n.config'

// Styles
import './ListRequest.style.css'

/**
@file ListRequest page component
*/
const ListRequest = () => {

  const idCardRef = useRef('')

  const navigate = useNavigate()

  const [listEnrolls, setListEnrolls] = useState([
    {
      COURSE: 'IC1802- Introducción a la Programación',
      GROUP: 'Grupo 1',
      TEACHER: 'Ivannia Cerdas'
    },
    {
      COURSE: 'IC1802- Introducción a la Programación',
      GROUP: 'Grupo 1',
      TEACHER: 'Ivannia Cerdas'
    },
    {
      COURSE: 'IC1802- Introducción a la Programación',
      GROUP: 'Grupo 1',
      TEACHER: 'Ivannia Cerdas'
    },
    {
      COURSE: 'IC1802- Introducción a la Programación',
      GROUP: 'Grupo 1',
      TEACHER: 'Ivannia Cerdas'
    }
  ])

  const onClickBackToHome = () => {
    navigate('/')
  }

  const consultIdCard = () => {
    console.log('Looking for: ', idCardRef?.current?.value)
  }

  return (
    <View 
      className={'list-request-container'}
    >
      <Button 
        className='back-to-home-button'
        icon={HomeIcon}
        onClick={onClickBackToHome}
      >
        <Label 
          className='body5'
        >
          {i18n.t('BACK_TO_HOME')}
        </Label>
      </Button>
      <Label
        className='h4'
      >
        {i18n.t('CONSULT_MY_FORMS')}
      </Label>
      <View
        className='container-consult-panel'
      >
        <InputData
          tpye='numeric'
          className='body2 input-consult'
          placeholder={i18n.t('WRITE_YOUR_ID_CARD')}
          ref={idCardRef}
        />
        <Button
          onClick={() => consultIdCard()}
          className='btn-consult'
        >
          <Label 
            className='body5'
          >
            {i18n.t('CONSULT')}
          </Label>
        </Button>
      </View>
      <View
        className='list-request'
      >
        {
          listEnrolls.map((enroll, index) => {
            return (
              <Card
                id={index}
                values={enroll}
              />
            )
          })
        }
      </View>
    </View>
  )
}

export default ListRequest
