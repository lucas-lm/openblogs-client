import styled from 'styled-components'
import ButtonBase from './ButtonBase'

const ButtonIcon = styled(ButtonBase)`
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  display: flex;
  justify-content: center;
  align-items: center;
`

ButtonIcon.defaultProps = {
  radius: '32px',
}

export default ButtonIcon
