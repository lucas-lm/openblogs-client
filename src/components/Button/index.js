import React from 'react'
import ButtonIcon from './ButtonIcon'
import ButtonContained from './ButtonContained'
import ButtonOutlined from './ButtonOutlined'
import ButtonText from './ButtonText'

const buttonMap = {
  icon: ButtonIcon,
  contained: ButtonContained,
  outlined: ButtonOutlined,
  text: ButtonText,
}

const Button = ({ variant, ...rest }) => {
  const Component = buttonMap[variant]
  return <Component {...rest} />
}

Button.defaultProps = {
  variant: 'contained',
}

export default Button
