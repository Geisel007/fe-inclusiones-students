// React
import React from 'react'
// Components
import View from '../../../components/HtmlComponents/View/View'
import Label from '../../../components/HtmlComponents/Label/Label'
// Lang
import i18n from '../../../configs/i18n.config'

// Styles
import './Card.style.css'

const Card = ({
  values
}) => {

  return (
    <View
      className='card-container'
    >
      {
        Object.keys(values).map(key => {
          return (
            <View
              className='card'
            >
              <Label
                className='h7'
              >
                {i18n.t(key)}: 
              </Label>
              <Label
                className='body2'
              >
                {values[key]}.
              </Label>
            </View>
          )
        })
      }
    </View>
  )
}

export default Card
