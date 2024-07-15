// React
import React from 'react'
// Global
import { classes } from '../../../global/HandleClassnames'
// Components
import ButtonHtml from '../../HtmlComponents/Button/Button'
import Image from '../../HtmlComponents/Image/Image'
import View from '../../HtmlComponents/View/View'

// Styles
import './Button.styles.css'

/**
A reusable button component.
@param {Object} props - The props object.
@param {string} props.className - The CSS class name to be added to the button.
@param {React.ReactNode} props.children - The child elements to be displayed inside the button.
@param {function} props.onClick - The callback function to be called when the button is clicked.
@returns {JSX.Element} - A React JSX element representing the button.
*/
const Button = ({ 
  style, 
  children, 
  onClick, 
  disabled, 
  icon 
}) => {

  return (
    <ButtonHtml 
      className={
        classes([
          'button', 
          disabled ? 'button-disable' : 'button-enabled'
        ])
      }
      style={style}
      onClick={onClick} 
      disabled={disabled} 
    >
      <View
        className='lbl-button-base'
      >
        {children}
      </View>
      <Image
        src={icon}
      />
    </ButtonHtml>
  )
}

export default Button
