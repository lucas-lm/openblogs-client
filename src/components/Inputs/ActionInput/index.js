import React, { Children } from 'react'
import { Root, Actions } from './containers'
import Input from './Input'

export default (props) => {
  const { children, ...rest } = props
  return (
    <Root>
      <Input {...rest} />
      <Actions>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </Actions>
    </Root>
  )
}
